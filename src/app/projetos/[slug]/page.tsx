import { projects, getProjectBySlug } from '@/data/projects'
import ProjectPageClient from './ProjectPageClient'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'Projeto nao encontrado' }

  return {
    title: `${project.title} | Kadu`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  return <ProjectPageClient project={project} />
}

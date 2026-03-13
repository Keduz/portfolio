/* ==========================================
   tsParticles — Neural Network Configuration
   ========================================== */

async function initParticles() {
    if (typeof tsParticles === 'undefined') return;

    await tsParticles.load("tsparticles", {
        fullScreen: false,
        fpsLimit: 60,
        particles: {
            number: {
                value: 70,
                density: {
                    enable: true,
                    area: 900
                }
            },
            color: {
                value: ["#6C63FF", "#00D4AA", "#8B83FF"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: {
                    min: 0.1,
                    max: 0.5
                },
                animation: {
                    enable: true,
                    speed: 0.8,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            size: {
                value: {
                    min: 1,
                    max: 3
                },
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 0.5,
                    sync: false
                }
            },
            links: {
                enable: true,
                distance: 150,
                color: "#6C63FF",
                opacity: 0.12,
                width: 1,
                triangles: {
                    enable: true,
                    color: "#6C63FF",
                    opacity: 0.02
                }
            },
            move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                    default: "bounce"
                },
                attract: {
                    enable: false
                }
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 180,
                    links: {
                        opacity: 0.35,
                        color: "#00D4AA"
                    }
                },
                push: {
                    quantity: 3
                }
            }
        },
        detectRetina: true,
        background: {
            color: "transparent"
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initParticles);

import React,{useState} from "react"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"
import { useCallback } from "react"


function ParticleSettings(){
    const particlesInit = useCallback(async (engine) => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        //console.log(container);
    }, []);
    return(
        <div>
            <Particles 
            style={{zIndex:-2}}
            width="100vw"
            id='tspartcles'
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                
                /* background: {
                    color: {
                        value: "transparent",
                    },
                }, */
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 300,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#FBDCC4",
                        distance: 300,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: "out",
                        random: false,
                        speed: 3,
                        straight: false,
                        bounce:false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 15,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
            />
        </div>
    )
}

export default ParticleSettings;
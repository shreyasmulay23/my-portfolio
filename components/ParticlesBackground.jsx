"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true },
                particles: {
                    color: { value: "#00FFFF" },
                    links: { enable: true, distance: 150, color: "#00FF00" },
                    move: { enable: true, speed: 2 },
                    number: { value: 80 },
                    shape: { type: "circle" },
                },
            }}
            className="absolute top-0 left-0 w-full h-full z-[-1]"
        />
    );
};

export default ParticlesBackground;

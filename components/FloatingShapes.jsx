"use client";
import { Canvas } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

const FloatingShapes = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[2, 2, 2]} />

                {/* Floating Spheres */}
                <motion.group
                    animate={{ y: [0, 0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                    <Sphere args={[0.4, 32, 32]} position={[-2, 1, -1]}>
                        <meshStandardMaterial color="gray" metalness={0.6} roughness={0.4} />
                    </Sphere>
                    <Sphere args={[0.3, 32, 32]} position={[1, -1, -1]}>
                        <meshStandardMaterial color="white" metalness={0.3} roughness={0.7} />
                    </Sphere>
                    <Sphere args={[0.2, 32, 32]} position={[2, 2, -1]}>
                        <meshStandardMaterial color="lightgray" metalness={0.5} roughness={0.5} />
                    </Sphere>
                </motion.group>

                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default FloatingShapes;

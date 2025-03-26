"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Stars } from "@react-three/drei";

const Canvas3D = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                {/* Lights */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} />

                {/* 3D Text */}
                <Text fontSize={1} color="white" position={[0, 0, 0]}>
                    Shreyas Mulay
                </Text>

                {/* 3D Background */}
                <Stars radius={5} depth={50} count={5000} factor={4} />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default Canvas3D;

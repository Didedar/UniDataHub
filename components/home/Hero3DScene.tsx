"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, PerspectiveCamera, Environment, Stars } from "@react-three/drei"
import * as THREE from "three"

function FloatingShape({ position, color, speed, rotationSpeed, scale }: { position: [number, number, number], color: string, speed: number, rotationSpeed: number, scale: number }) {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (!meshRef.current) return
        const time = state.clock.getElapsedTime()
        meshRef.current.rotation.x = Math.sin(time * rotationSpeed) * 0.2
        meshRef.current.rotation.y += rotationSpeed * 0.05
    })

    return (
        <Float speed={speed} rotationIntensity={rotationSpeed} floatIntensity={speed * 2}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <icosahedronGeometry args={[1, 0]} />
                <meshPhysicalMaterial
                    color={color}
                    roughness={0.2}
                    metalness={0.1}
                    transmission={0.6} // Glass-like
                    thickness={0.5}
                    clearcoat={1}
                />
            </mesh>
        </Float>
    )
}

export function Hero3DScene() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#60a5fa" />
            <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.5} penumbra={1} />

            {/* Floating Elements */}
            <group>
                {/* Main large shape */}
                <FloatingShape position={[3, 1, -2]} color="#bfdbfe" speed={1.5} rotationSpeed={0.5} scale={2} />

                {/* Secondary shapes */}
                <FloatingShape position={[-3, 2, -5]} color="#93c5fd" speed={2} rotationSpeed={0.8} scale={1.5} />
                <FloatingShape position={[-4, -2, -3]} color="#60a5fa" speed={1.8} rotationSpeed={0.6} scale={1.2} />
                <FloatingShape position={[4, -2, -4]} color="#3b82f6" speed={1.2} rotationSpeed={0.4} scale={1.8} />

                {/* Tiny particles */}
                <FloatingShape position={[0, 3, -8]} color="#dbeafe" speed={3} rotationSpeed={1} scale={0.5} />
                <FloatingShape position={[1, -3, -6]} color="#eff6ff" speed={2.5} rotationSpeed={1.2} scale={0.6} />
            </group>

            {/* Background Environment */}
            <Environment preset="city" />

            {/* Subtle Background Stars/Particles */}
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        </>
    )
}

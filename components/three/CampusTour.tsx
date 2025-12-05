"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei"
import { useRef, useState } from "react"
import * as THREE from "three"

function Model(props: any) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame((state, delta) => {
        meshRef.current.rotation.y += delta * 0.5
    })

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        </mesh>
    )
}

export function CampusTour() {
    return (
        <div className="w-full h-[500px] bg-slate-900 rounded-xl overflow-hidden relative">
            <div className="absolute top-4 left-4 z-10 bg-black/50 text-white p-2 rounded backdrop-blur-sm">
                <p className="text-sm font-medium">Interactive 3D Campus View</p>
                <p className="text-xs opacity-70">Drag to rotate, scroll to zoom</p>
            </div>

            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />

                <Model position={[0, 0, 0]} />

                <ContactShadows resolution={1024} scale={10} blur={1} opacity={0.5} far={10} color="#000000" />
                <OrbitControls enableZoom={true} />
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}

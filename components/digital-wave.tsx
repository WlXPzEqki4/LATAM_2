"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

const DigitalWave = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 10, 30)
    camera.lookAt(0, 0, 0)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    // Responsive handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // Grid parameters
    const gridSize = 60
    const spacing = 1
    const particleSize = 0.1

    // Particles setup
    const particles = new THREE.BufferGeometry()
    const positions = []
    const initialY = []

    // Create grid of particles
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = (i - gridSize / 2) * spacing
        const z = (j - gridSize / 2) * spacing
        const y = 0

        positions.push(x, y, z)
        initialY.push(0)
      }
    }

    particles.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))

    // Material for particles
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: particleSize,
      transparent: true,
      opacity: 0.8,
    })

    // Create points object and add to scene
    const points = new THREE.Points(particles, material)
    scene.add(points)

    // Animation parameters
    let time = 0
    const speed = 0.3
    const waveHeight = 3
    const waveLength = 6

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      time += 0.05

      const positions = particles.attributes.position.array

      // Update particle positions to create wave effect
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const index = (i * gridSize + j) * 3
          const x = positions[index]
          const z = positions[index + 2]

          // Create asymmetric wave patterns with more variation
          const noiseOffset = Math.sin(i * 0.3) * Math.cos(j * 0.2) * 1.5
          const distortionX = Math.sin(x * 0.2 + time * 0.3) * 0.7
          const distortionZ = Math.cos(z * 0.3 - time * 0.4) * 0.7

          // Add asymmetry by using different frequencies and phases
          const wave1 = Math.sin(x * 0.4 + z * 0.2 - time * speed) * (waveHeight * 0.8)
          const wave2 = Math.sin(x * 0.3 - z * 0.5 - time * speed * 0.7 + noiseOffset) * (waveHeight * 0.4)
          const wave3 = Math.cos(x * 0.2 + z * 0.6 - time * speed * 0.5) * (waveHeight * 0.3)
          const wave4 = Math.sin(z * 0.7 - x * 0.1 + time * speed * 0.6) * (waveHeight * 0.5)

          // Apply non-uniform height distribution
          const heightModifier = 1 + ((i % 3) - 1) * 0.2 + ((j % 5) - 2) * 0.1

          positions[index + 1] = (wave1 + wave2 + wave3 + wave4 + distortionX + distortionZ) * heightModifier
        }
      }

      particles.attributes.position.needsUpdate = true
      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="w-full h-screen bg-black" style={{ overflow: "hidden" }} />
}

export default DigitalWave


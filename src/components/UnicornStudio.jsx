import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './UnicornStudio.css';

const UnicornStudio = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef([]);
  const geometriesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x6366f1, 1, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xec4899, 1, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x14b8a6, 1, 100);
    pointLight3.position.set(0, 10, -10);
    scene.add(pointLight3);

    // Create floating particles
    const particleGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const particleCount = 200;

    for (let i = 0; i < particleCount; i++) {
      const color = [0x6366f1, 0xec4899, 0x14b8a6, 0x818cf8][Math.floor(Math.random() * 4)];
      const material = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.6
      });

      const particle = new THREE.Mesh(particleGeometry, material);
      particle.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );

      particle.userData = {
        velocity: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        }
      };

      scene.add(particle);
      particlesRef.current.push(particle);
    }

    // Create floating geometric shapes
    const shapes = [
      { geometry: new THREE.TorusGeometry(3, 1, 16, 100), color: 0x6366f1 },
      { geometry: new THREE.OctahedronGeometry(4), color: 0xec4899 },
      { geometry: new THREE.IcosahedronGeometry(3), color: 0x14b8a6 },
      { geometry: new THREE.TetrahedronGeometry(4), color: 0x818cf8 }
    ];

    shapes.forEach((shape, index) => {
      const material = new THREE.MeshPhysicalMaterial({
        color: shape.color,
        emissive: shape.color,
        emissiveIntensity: 0.3,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.4,
        wireframe: true
      });

      const mesh = new THREE.Mesh(shape.geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30
      );

      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        },
        floatSpeed: Math.random() * 0.001 + 0.0005,
        floatRange: Math.random() * 2 + 1
      };

      scene.add(mesh);
      geometriesRef.current.push(mesh);
    });

    // Mouse movement tracking
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Animate particles
      particlesRef.current.forEach((particle) => {
        particle.position.x += particle.userData.velocity.x;
        particle.position.y += particle.userData.velocity.y;
        particle.position.z += particle.userData.velocity.z;

        // Bounce particles within bounds
        if (Math.abs(particle.position.x) > 50) particle.userData.velocity.x *= -1;
        if (Math.abs(particle.position.y) > 50) particle.userData.velocity.y *= -1;
        if (Math.abs(particle.position.z) > 50) particle.userData.velocity.z *= -1;
      });

      // Animate geometric shapes
      const time = Date.now() * 0.001;
      geometriesRef.current.forEach((mesh, index) => {
        mesh.rotation.x += mesh.userData.rotationSpeed.x;
        mesh.rotation.y += mesh.userData.rotationSpeed.y;
        mesh.rotation.z += mesh.userData.rotationSpeed.z;

        // Floating motion
        mesh.position.y += Math.sin(time * mesh.userData.floatSpeed + index) * 0.01;
      });

      // Camera follows mouse slightly
      camera.position.x += (mouseRef.current.x * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseRef.current.y * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Dispose of Three.js resources
      particlesRef.current.forEach(particle => {
        particle.geometry.dispose();
        particle.material.dispose();
      });
      geometriesRef.current.forEach(mesh => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      renderer.dispose();

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="unicorn-studio-container">
      <div ref={containerRef} className="unicorn-wrapper"></div>
    </div>
  );
};

export default UnicornStudio;

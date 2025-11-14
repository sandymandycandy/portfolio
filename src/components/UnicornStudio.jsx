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
    if (!containerRef.current) {
      console.error('UnicornStudio: Container ref is null');
      return;
    }

    console.log('🌌 Initializing Three.js Space Scene...');

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    console.log('✅ Scene created');

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    cameraRef.current = camera;
    console.log('✅ Camera created at position:', camera.position);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    console.log('✅ Renderer created and canvas appended');

    // Lights - Space theme
    const ambientLight = new THREE.AmbientLight(0x1a1a2e, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x4a5fff, 1.5, 150);
    pointLight1.position.set(30, 30, 30);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x9d4edd, 1.2, 150);
    pointLight2.position.set(-30, -30, 30);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x00d4ff, 1, 150);
    pointLight3.position.set(0, 30, -30);
    scene.add(pointLight3);

    // Add a bright test sphere to verify rendering
    const testGeometry = new THREE.SphereGeometry(5, 32, 32);
    const testMaterial = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      emissive: 0xff00ff,
      emissiveIntensity: 1
    });
    const testSphere = new THREE.Mesh(testGeometry, testMaterial);
    testSphere.position.set(0, 0, 0);
    scene.add(testSphere);
    console.log('✅ Test sphere added at origin');

    // Create stars (twinkling particles) - closer to camera
    const starCount = 300;

    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 0.8 + 0.3;
      const geometry = new THREE.SphereGeometry(size, 8, 8);

      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: false
      });

      const star = new THREE.Mesh(geometry, material);
      // Position stars in front of camera (negative z from camera position)
      star.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 60 - 30  // Range from -60 to 0 (in front of camera at z=50)
      );

      star.userData = {
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
        baseOpacity: 1.0
      };

      scene.add(star);
      particlesRef.current.push(star);
    }
    console.log(`✅ Created ${starCount} stars`);

    // Create planets and celestial objects - positioned in view
    const planets = [
      { geometry: new THREE.SphereGeometry(6, 32, 32), color: 0x4a5fff, position: [15, 10, -15] },
      { geometry: new THREE.SphereGeometry(5, 32, 32), color: 0x9d4edd, position: [-20, -8, -20] },
      { geometry: new THREE.SphereGeometry(4, 32, 32), color: 0x00d4ff, position: [10, -15, -25] },
      { geometry: new THREE.TorusGeometry(6, 1, 16, 100), color: 0x7b2cbf, position: [-12, 15, -18] },
      { geometry: new THREE.IcosahedronGeometry(5), color: 0x5a189a, position: [18, -10, -22] }
    ];

    planets.forEach((planet, index) => {
      const material = new THREE.MeshBasicMaterial({
        color: planet.color,
        transparent: false,
        wireframe: index === 3 || index === 4
      });

      const mesh = new THREE.Mesh(planet.geometry, material);
      mesh.position.set(...planet.position);

      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.005,
          z: (Math.random() - 0.5) * 0.005
        },
        floatSpeed: Math.random() * 0.0008 + 0.0003,
        floatRange: Math.random() * 1.5 + 0.5,
        orbitSpeed: (Math.random() - 0.5) * 0.001,
        orbitRadius: 5 + Math.random() * 3
      };

      scene.add(mesh);
      geometriesRef.current.push(mesh);
    });
    console.log(`✅ Created ${planets.length} celestial objects`);

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
    let frameCount = 0;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (frameCount === 0) {
        console.log('✅ Animation loop started');
      }
      frameCount++;

      // Animate time
      const time = Date.now() * 0.001;

      // Stars are static and bright for now
      // particlesRef.current.forEach((star) => {
      //   const twinkle = Math.sin(time * star.userData.twinkleSpeed + star.userData.twinkleOffset);
      //   star.material.opacity = star.userData.baseOpacity + twinkle * 0.3;
      // });

      // Animate planets and celestial objects
      geometriesRef.current.forEach((mesh, index) => {
        mesh.rotation.x += mesh.userData.rotationSpeed.x;
        mesh.rotation.y += mesh.userData.rotationSpeed.y;
        mesh.rotation.z += mesh.userData.rotationSpeed.z;

        // Floating motion
        mesh.position.y += Math.sin(time * mesh.userData.floatSpeed + index) * 0.02;

        // Subtle orbital motion
        const orbitAngle = time * mesh.userData.orbitSpeed;
        mesh.position.x += Math.cos(orbitAngle) * 0.01;
        mesh.position.z += Math.sin(orbitAngle) * 0.01;
      });

      // Camera follows mouse slightly
      camera.position.x += (mouseRef.current.x * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseRef.current.y * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();
    console.log('🚀 Space scene fully initialized!');
    console.log('Canvas element:', renderer.domElement);
    console.log('Container children:', containerRef.current.children.length);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Dispose of Three.js resources
      particlesRef.current.forEach(star => {
        if (star.geometry) star.geometry.dispose();
        if (star.material) star.material.dispose();
      });
      geometriesRef.current.forEach(mesh => {
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) mesh.material.dispose();
      });
      if (renderer) renderer.dispose();

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

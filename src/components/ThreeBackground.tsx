import { useEffect, useRef } from "react";

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create script element for Three.js
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.async = true;

    script.onload = () => {
      if (!containerRef.current || !(window as any).THREE) return;

      const THREE = (window as any).THREE;
      const container = containerRef.current;

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // Create geometric shapes
      const geometry1 = new THREE.TorusGeometry(10, 3, 16, 100);
      const material1 = new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      const torus = new THREE.Mesh(geometry1, material1);
      scene.add(torus);

      const geometry2 = new THREE.IcosahedronGeometry(7, 0);
      const material2 = new THREE.MeshStandardMaterial({
        color: 0x60a5fa,
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      });
      const icosahedron = new THREE.Mesh(geometry2, material2);
      icosahedron.position.set(-20, 10, -10);
      scene.add(icosahedron);

      // Lighting
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(20, 20, 20);
      scene.add(pointLight);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      camera.position.z = 30;

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);

        torus.rotation.x += 0.001;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.001;

        icosahedron.rotation.x -= 0.002;
        icosahedron.rotation.y -= 0.003;

        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        container.removeChild(renderer.domElement);
      };
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ThreeBackground;

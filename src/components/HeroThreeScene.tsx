import { useEffect, useRef } from "react";
import * as THREE from "three";

const restThreshold = 0.002;

type DisposableSceneObject = {
  traverse: (callback: (child: { geometry?: { dispose: () => void }; material?: unknown }) => void) => void;
};

type SceneMaterial = {
  dispose?: () => void;
};

type SceneRenderer = {
  domElement: HTMLCanvasElement;
  setClearColor: (color: number, alpha: number) => void;
  setPixelRatio: (ratio: number) => void;
  setSize: (width: number, height: number, updateStyle: boolean) => void;
  render: (scene: unknown, camera: unknown) => void;
  dispose: () => void;
  forceContextLoss: () => void;
};

function disposeObject(object: DisposableSceneObject) {
  object.traverse((child) => {
    if (child.geometry) {
      child.geometry.dispose();
    }

    const material = child.material as SceneMaterial | SceneMaterial[] | undefined;

    if (Array.isArray(material)) {
      material.forEach((item) => item.dispose?.());
    } else if (material) {
      material.dispose?.();
    }
  });
}

export default function HeroThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const element = container;
    let renderer: SceneRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    const group = new THREE.Group();
    const pointer = new THREE.Vector2(0, 0);
    const current = new THREE.Vector2(0, 0);
    const baseRotation = new THREE.Euler(-0.18, -0.34, 0.08);
    let frameId = 0;
    let startTime = performance.now();
    let isAnimating = false;
    let entranceProgress = 0;

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    container.appendChild(renderer.domElement);

    camera.position.set(0, 0.15, 6.2);
    scene.add(new THREE.HemisphereLight(0xf4efe7, 0x151718, 1.2));

    const keyLight = new THREE.DirectionalLight(0xffd78d, 1.45);
    keyLight.position.set(3, 4, 4);
    scene.add(keyLight);

    const accentLight = new THREE.PointLight(0xd8b46a, 3, 8);
    accentLight.position.set(-2.4, -1.2, 2.2);
    scene.add(accentLight);

    const planeMaterial = new THREE.MeshStandardMaterial({
      color: 0x181b1c,
      emissive: 0x2a2113,
      emissiveIntensity: 0.14,
      metalness: 0.42,
      roughness: 0.44,
      transparent: true,
      opacity: 0.9,
    });
    const accentMaterial = new THREE.MeshStandardMaterial({
      color: 0xd8b46a,
      emissive: 0x5f4516,
      emissiveIntensity: 0.24,
      metalness: 0.32,
      roughness: 0.36,
    });
    const railMaterial = new THREE.MeshStandardMaterial({
      color: 0xf4efe7,
      emissive: 0x47371a,
      emissiveIntensity: 0.08,
      metalness: 0.22,
      roughness: 0.5,
      transparent: true,
      opacity: 0.34,
    });

    const panelGeometry = new THREE.BoxGeometry(2.4, 1.24, 0.035);
    const railHorizontal = new THREE.BoxGeometry(1.6, 0.035, 0.045);
    const railVertical = new THREE.BoxGeometry(0.035, 0.82, 0.045);
    const accentGeometry = new THREE.BoxGeometry(1.05, 0.045, 0.05);

    const panels = [
      { position: [-0.54, 0.52, 0], rotation: [0.04, -0.42, -0.04], scale: [0.92, 0.74, 1] },
      { position: [0.58, -0.16, -0.42], rotation: [-0.02, 0.34, 0.08], scale: [0.82, 0.62, 1] },
      { position: [-0.04, -0.72, 0.34], rotation: [0.1, -0.08, -0.03], scale: [0.62, 0.44, 1] },
    ] as const;

    panels.forEach((panel, index) => {
      const mesh = new THREE.Mesh(panelGeometry, planeMaterial);
      mesh.position.set(panel.position[0], panel.position[1], panel.position[2]);
      mesh.rotation.set(panel.rotation[0], panel.rotation[1], panel.rotation[2]);
      mesh.scale.set(panel.scale[0], panel.scale[1], panel.scale[2]);
      group.add(mesh);

      const railTop = new THREE.Mesh(railHorizontal, index === 0 ? accentMaterial : railMaterial);
      railTop.position.set(panel.position[0] - 0.12, panel.position[1] + 0.36, panel.position[2] + 0.06);
      railTop.rotation.copy(mesh.rotation);
      railTop.scale.set(panel.scale[0] * 0.72, 1, 1);
      group.add(railTop);

      const railSide = new THREE.Mesh(railVertical, railMaterial);
      railSide.position.set(panel.position[0] - 0.68, panel.position[1] - 0.08, panel.position[2] + 0.07);
      railSide.rotation.copy(mesh.rotation);
      railSide.scale.set(1, panel.scale[1] * 0.7, 1);
      group.add(railSide);
    });

    const accent = new THREE.Mesh(accentGeometry, accentMaterial);
    accent.position.set(0.88, 0.68, 0.26);
    accent.rotation.set(0.02, 0.48, -0.18);
    group.add(accent);

    group.rotation.copy(baseRotation);
    group.scale.setScalar(0.92);
    scene.add(group);

    function resize() {
      const { width, height } = element.getBoundingClientRect();
      const safeWidth = Math.max(width, 1);
      const safeHeight = Math.max(height, 1);

      renderer.setSize(safeWidth, safeHeight, false);
      camera.aspect = safeWidth / safeHeight;
      camera.updateProjectionMatrix();
      invalidate();
    }

    function renderFrame() {
      const elapsed = performance.now() - startTime;
      entranceProgress = Math.min(elapsed / 850, 1);
      current.lerp(pointer, 0.08);

      group.rotation.x = baseRotation.x + current.y * 0.1;
      group.rotation.y = baseRotation.y + current.x * 0.14;
      group.rotation.z = baseRotation.z + current.x * 0.035;
      group.position.y = THREE.MathUtils.lerp(-0.08, 0, entranceProgress);
      group.scale.setScalar(THREE.MathUtils.lerp(0.86, 0.92, entranceProgress));

      renderer.render(scene, camera);

      const stillSettling =
        entranceProgress < 1 ||
        Math.abs(pointer.x - current.x) > restThreshold ||
        Math.abs(pointer.y - current.y) > restThreshold;

      if (stillSettling) {
        frameId = window.requestAnimationFrame(renderFrame);
      } else {
        isAnimating = false;
      }
    }

    function invalidate() {
      if (isAnimating) {
        return;
      }

      isAnimating = true;
      frameId = window.requestAnimationFrame(renderFrame);
    }

    function handlePointerMove(event: PointerEvent) {
      const bounds = element.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -2;
      pointer.x = THREE.MathUtils.clamp(pointer.x, -1, 1);
      pointer.y = THREE.MathUtils.clamp(pointer.y, -1, 1);
      invalidate();
    }

    function handlePointerLeave() {
      pointer.set(0, 0);
      invalidate();
    }

    resize();
    container.addEventListener("pointermove", handlePointerMove, { passive: true });
    container.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("resize", resize);
    invalidate();

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
      disposeObject(group);
      panelGeometry.dispose();
      railHorizontal.dispose();
      railVertical.dispose();
      accentGeometry.dispose();
      planeMaterial.dispose();
      accentMaterial.dispose();
      railMaterial.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} className="hero-three-scene" aria-hidden="true" />;
}

import { GLTFLoader } from "https://unpkg.com/three@0.158.0/examples/jsm/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

loader.load(
  "neko.glb",
  (gltf) => {
    const neko = gltf.scene;

    neko.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshNormalMaterial();
      }
    });

    neko.scale.set(1, 1, 1);
    neko.position.set(2, 0, 0); // ←箱の横に置く
    scene.add(neko);
  },
  undefined,
  (error) => {
    console.error("GLB load error:", error);
  }
);

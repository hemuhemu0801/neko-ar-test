const start = async () => {
  const mindarThree = new window.MINDAR.Three.MindARThree({
    container: document.body
  });

  const { renderer, scene, camera } = mindarThree;

  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  scene.add(light);

  
    const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshNormalMaterial();
  const box = new THREE.Mesh(geometry, material);
  scene.add(box);

  const loader = new THREE.GLTFLoader();
  loader.load("neko.glb", (gltf) => {
    const neko = gltf.scene;
    console.log(neko);
    neko.scale.set(1, 1, 1);
    neko.position.set(0, -0.5, -1);
    camera.position.set(0, 0.5, 2);
    scene.add(neko);
    
  });

  

  await mindarThree.start();
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
};

start();
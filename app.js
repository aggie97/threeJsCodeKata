import * as THREE from "three";
// import WebGL from "three/addons/capabilities/WebGL.js";

// if (WebGL.isWebGLAvailable()) {
// Initiate function or other initializations here
// animate();
// } else {
// const warning = WebGL.getWebGLErrorMessage();
// document.getElementById("container").appendChild(warning);
// }

const width = window.innerWidth,
  height = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // FOV 시야각 설정
  width / height, // aspect ratio 종횡비 설정
  0.1, // 절단면 near
  1000 // 절단면 far
  // far 값보다 멀리 있는 요소, near 값보다 가까이 있는 오브젝트는 렌더링 x
);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight); // 렌더링할 곳의 크기 설정
// 성능이 중요하다면 크기를 width/2, height/2 와 같이 줄이는 방법과
// 해상도를 줄이는 세 번째 파라미터에 false로 설정하여 기준 크기의 절반 해상도로 설정 가능.

document.body.appendChild(renderer.domElement);
// const controls = new OrbitControls();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

"use client"
import { useRef, useEffect } from "react";
import * as THREE from "three";
import particleFrag from "./compiledShaders/particle.frag";
import particleVert from "./compiledShaders/particle.vert";

export default function PictureAnimation(props: any) {
   const containerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (typeof window !== 'undefined') {
         var width = window.innerWidth / 1.3;
         var height = window.innerHeight / 1.6;

         const scene = new THREE.Scene();
         const containerObj = new THREE.Object3D();
         const camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000);
         const clock = new THREE.Clock(true);
         camera.position.z = 2;
         const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
         renderer.setSize(width, height);

         if (containerRef.current?.hasChildNodes()) {
            containerRef.current?.replaceChild(renderer.domElement, containerRef.current?.firstChild as ChildNode);
         } else {
            containerRef.current?.appendChild(renderer.domElement)
         }

         const geometry = new THREE.InstancedBufferGeometry();
         geometry.instanceCount = 1;

         // positions
         const positions = new THREE.BufferAttribute(new Float32Array(4 * 3), 3);
         positions.setXYZ(0, -0.5, 0.5, 0.0);
         positions.setXYZ(1, 0.5, 0.5, 0.0);
         positions.setXYZ(2, -0.5, -0.5, 0.0);
         positions.setXYZ(3, 0.5, -0.5, 0.0);
         geometry.setAttribute('position', positions);

         // uvs
         const uvs = new THREE.BufferAttribute(new Float32Array(4 * 2), 2);
         uvs.setXY(0, 0.0, 1.0);
         uvs.setXY(1, 1.0, 1.0);
         uvs.setXY(2, 0.0, 0.0);
         uvs.setXY(3, 1.0, 0.0);
         geometry.setAttribute('uv', uvs);

         // index
         geometry.setIndex(new THREE.BufferAttribute(new Uint16Array([0, 2, 1, 2, 3, 1]), 1));

         const uvTexture = new THREE.TextureLoader().load("/logo2.png", (texture) => {
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.format = THREE.RGBAFormat;

            var canvasWidth = texture.image.width;
            var canvasHeight = texture.image.height;

            var numPoints = canvasWidth * canvasHeight;
            var numVisible = 0;
            var threshold = 1;
            var originalColors;

            const img = texture.image;
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            ctx?.scale(1, -1);
            ctx?.drawImage(img, 0, 0, canvasWidth, canvasHeight * -1);

            const imgData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
            originalColors = Float32Array.from((imgData as ImageData).data);

            for (let i = 0; i < numPoints; i++) {
               if (originalColors[i * 4 + 0] > threshold) numVisible++;
            }

            // console.log('numVisible', numVisible, numPoints);
            // console.log("width", canvasWidth)
            // console.log("height", canvasHeight)

            const indices = new Uint16Array(numVisible);
            const offsets = new Float32Array(numVisible * 3);
            const angles = new Float32Array(numVisible);

            for (let i = 0, j = 0; i < numPoints; i++) {
               if (originalColors[i * 4 + 0] <= threshold) continue;

               offsets[j * 3 + 0] = i % canvasWidth;
               offsets[j * 3 + 1] = Math.floor(i / canvasWidth);

               indices[j] = i;

               angles[j] = Math.random() * Math.PI;

               j++;
            }

            const pIndex = new THREE.InstancedBufferAttribute(indices, 1, false);
            const offset = new THREE.InstancedBufferAttribute(offsets, 3, false);
            const angle = new THREE.InstancedBufferAttribute(angles, 1, false);

            geometry.setAttribute('pindex', pIndex);
            geometry.setAttribute('offset', offset);
            geometry.setAttribute('angle', angle);

            const uniforms = {
               uTime: { value: 0 },
               uRandom: { value: 1.0 },
               uDepth: { value: 2.0 },
               uSize: { value: 0.0 },
               uTextureSize: { value: new THREE.Vector2(canvasWidth, canvasHeight) },
               uTexture: { value: texture },
               uTouch: { value: null },
            };

            // const material = new THREE.RawShaderMaterial({
            //    uniforms,
            //    vertexShader: particleVert,
            //    fragmentShader: particleFrag,
            //    depthTest: false,
            //    transparent: true,
            //    // blending: THREE.AdditiveBlending
            // });

            const material = new THREE.MeshBasicMaterial({
               color: 0xff0000
            });

            // console.log("material", material);
            // console.log("texture", texture);

            // Add texture material and geometry
            // const material = new THREE.MeshBasicMaterial({ map: uvTexture });
            const planeMesh = new THREE.Mesh(geometry, material);
            containerObj.add(planeMesh);

            scene.add(containerObj);

         });



         const bgTexture = new THREE.TextureLoader().load("/1498580507_seamless_geometrical_pattern.jpg");
         scene.background = bgTexture;

         // Render the scene and camera
         renderer.render(scene, camera);

         const renderScene = () => {
            // boxMesh.rotation.x += 0.01;
            // boxMesh.rotation.y += 0.01;
            renderer.render(scene, camera);
            requestAnimationFrame(renderScene);
         };

         // Call the renderScene function to start the animation loop
         renderScene();

         /// Close renders scene block

         const handleResize = () => {
            var width = window.innerWidth / 1.3;
            var height = window.innerHeight / 1.6;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
         };

         window.addEventListener('resize', handleResize);

         // Clean up the event listener when the component is unmounted
         return () => {
            window.removeEventListener('resize', handleResize);
         };
      }
   }, []);

   return (<div ref={containerRef} />);
}
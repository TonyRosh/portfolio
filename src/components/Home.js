import React, { Component } from "react";
import * as THREE from "three";
import NavbarHome from "./NavbarHome";

export class Home extends Component {
  componentDidMount() {

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    let renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg"),
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    camera.position.setX(-3);

    function diamond() {

      let geometry = new THREE.OctahedronGeometry(3.5, 0);
      let material = new THREE.MeshBasicMaterial({ color: 0x149414 });
      let cube1 = new THREE.Mesh(geometry, material);
      let edges = new THREE.EdgesGeometry( geometry );
      let line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x111111 } ) );
      
      let [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(195));
      
      cube1.position.set(x, y, z);
      line.position.set(x, y, z)
      
      scene.add(cube1);
      scene.add( line );
    }

    Array(5).fill().forEach(diamond);



function pyramid() {

      let geometry = new THREE.TetrahedronGeometry(2.5, 0);
      let material = new THREE.MeshBasicMaterial({ color: 0x0aff09 });
      let cube1 = new THREE.Mesh(geometry, material);
      let edges = new THREE.EdgesGeometry( geometry );
      let line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x111111 } ) );
      
      let [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(195));
      
      cube1.position.set(x, y, z);
      line.position.set(x, y, z)
      
      scene.add(cube1);
      scene.add( line );
    }
    
    Array(5).fill().forEach(pyramid);



    function knot() {

      let geometry = new THREE.TorusKnotGeometry(  3, 1, 33, 5 );
      let material = new THREE.MeshBasicMaterial({ color: 0x355e3b });
      let cube1 = new THREE.Mesh(geometry, material);
      let edges = new THREE.EdgesGeometry( geometry );
      let line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x111111 } ) );
      
      let [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(195));
      
      cube1.position.set(x, y, z);
      line.position.set(x, y, z)
      
      scene.add(cube1);
      scene.add( line );
    }
    
    Array(10).fill().forEach(knot);



    function ufo() {

      let points = [];
      for ( let i = 0; i < 10; i ++ ) {
	      points.push( new THREE.Vector2( Math.sin( i * 0.4 ) * 5 + 2.5, ( i - 2.5 ) * .33 ) );
      }
      let geometry = new THREE.LatheGeometry( points );
      let material = new THREE.MeshBasicMaterial({ color: 0x2db83d });
      let cube1 = new THREE.Mesh(geometry, material);
      let edges = new THREE.EdgesGeometry( geometry );
      let line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x111111 } ) );
      
      let [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(195));
      
      cube1.position.set(x, y, z);
      line.position.set(x, y, z)
      
      scene.add(cube1);
      scene.add( line );
    }
    
    Array(25).fill().forEach(ufo);
































    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new THREE.AmbientLight(0xf1f1f1);

    scene.add(pointLight, ambientLight);

    const firstCube = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshBasicMaterial({ color: 0x3c1361 })
    );

    scene.add(firstCube);

    firstCube.position.z = -5;
    firstCube.position.x = 2;

    const lastCube = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshBasicMaterial({ color: 0xed7014 })
    );

    scene.add(lastCube);

    lastCube.position.z = 107;
    lastCube.position.x = 5;

    const spaceTexture = new THREE.TextureLoader().load("Space.jpeg");
    scene.background = spaceTexture;

    let animate = function () {
      requestAnimationFrame(animate);
      
      renderer.render(scene, camera);
    };

    function moveCamera() {
      const top = document.body.getBoundingClientRect().top;

      function addStarYellow() {
        const geometry = new THREE.SphereGeometry(0.075, 0.5, 0.5);
        const material = new THREE.MeshStandardMaterial({ color: 0xffd729 });
        const star = new THREE.Mesh(geometry, material);
  
        const [x, y, z] = Array(3)
          .fill()
          .map(() => THREE.MathUtils.randFloatSpread(175));
  
        star.position.set(x, y, z);
  
        scene.add(star);
      }
  
      Array(13).fill().forEach(addStarYellow);

      function addStarWhite() {
        const geometry = new THREE.SphereGeometry(0.075, 0.5, 0.5);
        const material = new THREE.MeshStandardMaterial({ color: 0xf5f5f5 });
        const star = new THREE.Mesh(geometry, material);
  
        const [x, y, z] = Array(3)
          .fill()
          .map(() => THREE.MathUtils.randFloatSpread(175));
  
        star.position.set(x, y, z);
  
        scene.add(star);
      }
  
      Array(13).fill().forEach(addStarWhite);

      firstCube.rotation.y += 0.01;
      firstCube.rotation.z += 0.01;

      camera.position.z = top * -0.01;
      camera.position.x = top * -0.0002;
      camera.position.y = top * -0.0002;
    }
    window.onscroll = moveCamera;
    moveCamera();
    animate();
  }
  render() {
    return (
      <div className="home">
        <canvas id="bg"></canvas>
        <p><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </p>
        <NavbarHome />
      </div>
    );
  }
}

export default Home;
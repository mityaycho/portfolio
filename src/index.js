import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './animate.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < App /> , document.getElementById('root'));

const canvas = document.getElementById('starField');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth; //screen width
canvas.height = window.innerHeight; //screen height

//on mouse scroll changes speed
window.addEventListener('wheel', (event) => {
  c.strokeStyle = 'rgb(41, 241, 195, 1)';
  if (event.deltaY > 0) speed *= 1.03;
  else speed *= 0.5;
  if (speed < 0.01) speed = 0.01; else if (speed > 0.1) speed = 0.1;
	if (event.cancelable) speed = 0.01
});

class Star {
  constructor() {
    //initializing
    this.x = Math.random()*canvas.width-canvas.width/2; //random x
    this.y = Math.random()*canvas.height-canvas.height/2; //random y
    this.px = 0;
		this.py = 0;
    this.z = Math.random()*4; //random z
  }
  
  update() {
    //stores previous x, y and z and generates new coordinates
    this.px = this.x;
    this.py = this.y;
    this.z += speed;
    this.x += this.x*(speed*0.2)*this.z;
    this.y += this.y*(speed*0.2)*this.z;
    if (this.x > canvas.width/2+50 || this.x < -canvas.width/2-50 || this.y > canvas.height/2+50 || this.y < -canvas.height/2-50) {
      this.x = Math.random()*canvas.width-canvas.width/2;
      this.y = Math.random()*canvas.height-canvas.height/2;
      this.px = this.x;
      this.py = this.y;
      this.z = 0;
    }
  }
  
  //draws line from x,y to px,py
  show() {
    c.lineWidth = this.z;
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.px, this.py);
    c.stroke();
  }
}

let speed = 0.09;
setTimeout(() => speed = 0.01, 300)
let stars = [];

//create 100 stars (objects)
for (let i = 0; i < 100; i++) stars.push(new Star());

c.fillStyle = 'rgba(0, 0, 0, 0.1)';
c.strokeStyle = 'rgb(41, 241, 195, 1)';

c.translate(canvas.width / 2, canvas.height / 2);

function draw() {
  //create rectangle
  c.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
  for (let s of stars) {
    s.update();
    s.show();
  }
  //infinte call to draw
  requestAnimationFrame(draw);
}

draw();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
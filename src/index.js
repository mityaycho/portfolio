import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './animate.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < App /> , document.getElementById('root'));


const canvas = document.getElementById("starsSky");

const c = canvas.getContext("2d");

let w;
let h;

const setCanvasExtents = () => {
	w = document.body.clientWidth;
	h = document.body.clientHeight;
	canvas.width = w;
	canvas.height = h;
};

setCanvasExtents();

window.onresize = () => {
	setCanvasExtents();
};

const makeStars = count => {
	const out = [];
	for (let i = 0; i < count; i++) {
		const s = {
			x: Math.random() * 1600 - 800,
			y: Math.random() * 900 - 450,
			z: Math.random() * 1000
		};
		out.push(s);
	}
	return out;
};

let stars = makeStars(10000);

const clear = () => {
	c.fillStyle = "black";
	c.fillRect(0, 0, canvas.width, canvas.height);
};

const putPixel = (x, y, brightness) => {
	const intensity = brightness * 255;
	const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
	c.fillStyle = rgb;
	c.fillRect(x, y, 1, 1);
};

const moveStars = distance => {
	const count = stars.length;
	for (var i = 0; i < count; i++) {
		const s = stars[i];
		s.z -= distance;
		while (s.z <= 1) {
			s.z += 1000;
		}
	}
};

let prevTime;
const init = time => {
	prevTime = time;
	requestAnimationFrame(tick);
};

const tick = time => {
	let elapsed = time - prevTime;
	prevTime = time;

	moveStars(elapsed * 0.05);

	clear();

	const cx = w / 2;
	const cy = h / 2;

	const count = stars.length;
	for (var i = 0; i < count; i++) {
		const star = stars[i];

		const x = cx + star.x / (star.z * 0.001);
		const y = cy + star.y / (star.z * 0.001);

		if (x < 0 || x >= w || y < 0 || y >= h) {
			continue;
		}

		const d = star.z / 500.0;
		const b = 1 - d * d;

		putPixel(x, y, b);
	}

	requestAnimationFrame(tick);
};

requestAnimationFrame(init);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
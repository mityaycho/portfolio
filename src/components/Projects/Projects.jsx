import React from 'react';
import styles from './Projects.module.css';
import Project from '../Project/Project';
import firstProject from '../../img/first-project.png';
import paintChat from '../../img/paint-chat.png';
import reactDiplom from '../../img/react-diplom.png';
import BlockTitle from '../Blocktitle/BlockTitle';
import JSDiplom from '../../img/js-diplom.png';
import feDiplom from '../../img/fe-diplom.png';
import gameCards from '../../img/game-cards.png';
import weatherImg from '../../img/weather-app.png';
import Particles from 'react-particles-js';


const Projects = () => {
	const params = {
    particles: {
			background: {
				color: '#0000FF'
			},
      number: {
        value: 300
      },
      color: {
        value: 'random'
      },
      shape: {
        type: 'star',
        stroke: {
          width: 1,
          color: 'darkgreen'
        },
        image: {
          src: 'http://www.iconsdb.com/icons/preview/white/contacts-xxl.png'
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 1
        }
      },
      size: {
        value: 2,
        random: false,
        anim: {
          enable: false,
          speed: 40
        }
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: '#fff',
        width: 1
      },
      move: {
        enable: true,
        speed: 0.3,
        direction: 'none',
        straight: false
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'push'
        }
      },
      modes: {
        repulse: {
          distance: 50,
          duration: 0.4
        },
        bubble: {
          distance: 100,
          size: 10
        }
      }
    }
	};
	
	return (
		<section className={styles.projects} id="projects">
      {/* <Particles className={styles.particles} params={params} /> */}

			<div className={styles.container}>
				<BlockTitle title="Projects" />

				<div className={styles.myProjects}>
					<Project titleProject="Order train tickets online"
						text="Project on React-Bootstrap, Axios, Redux and Redux-Thunk."
						src={feDiplom}
						link="https://mityaycho.github.io/fe-diplom-trainbooking/" />

					<Project titleProject="Bosa Noga site"
						text="Project on React."
						src={reactDiplom}
						link="https://mityaycho.github.io/ra-diplom-netology/" />

					<Project titleProject="Drawing with chat"
						text="Drawing with chat and adding comments on JS. Connected to server."
						src={paintChat}
						link="https://mityaycho.github.io/HJ_Diplom_Netology/" />

					<Project titleProject="Game on JS"
						text="The project is made native javascript."
						src={JSDiplom}
						link="https://mityaycho.github.io/JS_Diplom_Netology/" />

					<Project titleProject="First layout site on 'floats'"
						text="The project is made pixel by pixel. Without using flex."
						src={firstProject}
						link="https://mityaycho.github.io/diplom_html_css/" />

					<Project titleProject="Game - guess the paired colors"
						text="Stack: react, redux, typescript"
						src={gameCards}
						link="https://mityaycho.github.io/test-task-crimea-digital/" />

					<Project titleProject="Weather mobile"
						text="Stack: react, redux, typescript"
						src={weatherImg}
						link="https://mityaycho.github.io/test-task-sociaro-inc/" />
				</div>
			</div>
		</section>
	);
};

export default Projects;
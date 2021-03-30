import React from 'react';
import styles from './Main.module.css';
import typingDog from '../../img/typing-dog.gif';
import myPhoto from '../../img/my-photo.jpeg';
import Tilt from 'react-tilt';

const Main = () => {
  const mouseMoveCapture = (e) => e.currentTarget.src = typingDog;
  const mouseLeave = (e) => e.currentTarget.src = myPhoto;

  return (
    <main className={styles.main} id="main">
      <div className={styles.container}>
        <div className={styles.greeting}>
          <span className="animated bounceInLeft">Hello!</span>
          <span className="animated bounceInRight">My name is</span>
          <span className="animated zoomInLeft delay-1s">Dmitriy</span>
          <span className="animated zoomInRight delay-1s">Semchenko</span>
          <h1 className="animated rotateInUpLeft delay-2s">I'm
            <strong className="animated heartBeat delay-5s">&ensp;front-end&ensp;</strong>
            developer</h1>
        </div>
				<Tilt>
					<div className={`${styles.photo} animated flipInY delay-3s`}>
						<img src={myPhoto}
								onMouseMoveCapture={(e) => mouseMoveCapture(e)}
								onMouseLeave={e => mouseLeave(e)}
								alt="" />
					</div>
				</Tilt>
      </div>
    </main>
  );
};

export default Main;
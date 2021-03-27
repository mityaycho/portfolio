import React from 'react';
import styles from './Skills.module.css';
import BlockTitle from '../Blocktitle/BlockTitle';
import Skill from '../Skill/Skill';
import html from '../../img/html5.png';
import css from '../../img/css.png';
import js from '../../img/js.png';
import react from '../../img/react.png';
import bootstrap from '../../img/bootstrap.png';
import redux from '../../img/redux.png';
import Sky from 'react-sky';


class Skills extends React.Component {

	state = {
		checkSkill: react
	};

	changeSkill = (event) => {
		switch (event.currentTarget.dataset.value) {
			case 'HTML':
				return this.setState({ checkSkill: html });
			case 'CSS':
				return this.setState({ checkSkill: css });
			case 'Bootstrap':
				return this.setState({ checkSkill: bootstrap });
			case 'JS':
				return this.setState({ checkSkill: js });
			case 'React':
				return this.setState({ checkSkill: react });
			case 'Redux':
				return this.setState({ checkSkill: redux });
			default:
				return
		}
	};

	render() {
		return (
			<section className={styles.skills} id="skills">
				{/* <Sky
					images={{ 0: this.state.checkSkill }}
					how={100}
					time={15}
					size={'25px'}
					background={'palettedvioletred'}
				/> */}

				<div className={styles.container}>
					<BlockTitle title="Skills" />

					<div className={styles.skillsWrapper}>
						<Skill
							icon={html}
							changeSkill={this.changeSkill}
							title="HTML"
							description="html & html5" />

						<Skill
							icon={css}
							changeSkill={this.changeSkill}
							title="CSS"
							description="inline block, float, flex, grid" />

						<Skill
							icon={bootstrap}
							changeSkill={this.changeSkill}
							title="Bootstrap"
							description="bootstrap4" />

						<Skill
							icon={js}
							changeSkill={this.changeSkill}
							title="JS"
							description="es5 & es6" />

						<Skill
							icon={react}
							changeSkill={this.changeSkill}
							title="React"
							description="hoc & hook" />

						<Skill
							icon={redux}
							changeSkill={this.changeSkill}
							title="Redux"
							description="react-redux" />
					</div>
				</div>
			</section>
		);
	}
};

export default Skills;
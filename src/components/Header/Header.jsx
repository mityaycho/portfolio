import React from 'react';
import styles from './Header.module.css';
import NavMenu from '../NavMenu/NavMenu';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<NavMenu />
			</div>
		</header>
	);
};

export default Header;
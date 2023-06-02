import React from 'react';

import styles from 'scss/components/Header/Header.module.scss';
import Hero from './Hero';
import Social from './Social';

function Header() {
	return (
		<header className={styles.header}>
			<Hero />

			<Social />
		</header>
	)
}

export default Header;

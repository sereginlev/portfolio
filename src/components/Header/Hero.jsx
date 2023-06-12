import React from 'react';

import styles from 'scss/components/Header/Hero.module.scss';

function Hero() {

	return (
		<article className={styles.hero}>
			<h1 className={styles.title}>Hello. I'm junior front-end developer</h1>
			<p className={styles.text}>My name is Lev. I recently started my way in programming and want to share my works with you.</p>
			<a className={styles.button} href='#projects'>Let's see my projects!</a>
		</article>
	)
}

export default Hero;

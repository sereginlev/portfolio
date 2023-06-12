import React from 'react';

import styles from 'scss/components/Main/About.module.scss';

function About() {

	return (
		<section className={styles.about}>
			<h2 className={styles.title}>About me.</h2>

			<p className={styles.textBold}>Several times I started to learn python, but gave up due to lack of interest. Later I wanted to learn about the process of developing sites, so I got acquainted with the frontend. I was fascinated by this because of the creative component and the opportunity to immediately see the result of my work.</p>

			<h3 className={styles.subtitle}>More information</h3>
			<p className={styles.text}>I was born and raised in Volgograd, Russia. Received an engineering education and worked in construction for a long time.
			<br/>
			<br/>
			If you want to know something personal about me, then I adore basketball, fishing and 'The Sopranos' series.
			</p>
		</section>
	)
}

export default About;


import React from 'react';
import { motion } from 'framer-motion';

import styles from 'scss/components/Main/About.module.scss';

const textAnimation = {
	hidden: {
		y: 100,
		opacity: 0
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: { property: 'all', duration: 0.5 }
	}
}

function About() {

	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.2, once: true }}
			variants={textAnimation}
			className={styles.about}
		>
			<h2 className={styles.title}>About me.</h2>

			<p className={styles.textBold}>I can't draw, but I've always wanted to learn. Front-end development allows me to do this to some extent. I also like to see the results of my work, which is why I chose the front-end direction.</p>

			<h3 className={styles.subtitle}>Some more information</h3>
			<p className={styles.text}>I was born and raised in Volgograd, Russia. Received an engineering education and worked in construction for a long time. At some point, I realized that changes were needed and decided to change my profession.
			<br/>
			<br/>
			If you want to know something personal about me, then I adore basketball, fishing and 'The Sopranos' series.
			</p>
		</motion.section>
	)
}

export default About;


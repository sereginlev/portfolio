import React from 'react';
import { motion } from 'framer-motion';

import styles from 'scss/components/Header/Hero.module.scss';

const textAnimation = {
	hidden: {
		x: 150,
		opacity: 0,
	},
	visible: custom => ({
		x: 0,
		opacity: 1,
		transition: { property: 'all', duration: 0.5, delay: custom * 0.2 }
	})
}

function Hero() {

	return (
		<motion.article
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			className={styles.hero}
		>
			<motion.h1 custom={1} variants={textAnimation} className={styles.title}>Hello. I'm junior front-end developer</motion.h1>
			<motion.p custom={3} variants={textAnimation} className={styles.text}>My name is Lev. I recently started my way in programming and want to share my works with you.</motion.p>
			<motion.a custom={3} variants={textAnimation} className={styles.button} href='#projects'>Let's see my projects!</motion.a>
		</motion.article>
	)
}

export default Hero;

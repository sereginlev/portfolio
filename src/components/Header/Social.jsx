import { React, forwardRef } from 'react';
import { motion } from 'framer-motion';

import styles from 'scss/components/Header/Social.module.scss';

const textAnimation = {
	hidden: {
		x: '-100%',
		opacity: 0,
	},
	visible: custom => ({
		x: 0,
		opacity: 1,
		transition: { property: 'all', duration: 0.2, delay: custom * 0.2 }
	})
}

function Social() {
	return (
		<motion.article
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			custom={3} 
			variants={textAnimation}
			className={styles.social}
		>
			<p className={styles.text}>
				Find me at <a className={styles.link} href='https://github.com/jnmmt' target='_blank'>GitHub</a>, <a className={styles.link} href='https://t.me/schwpps' target='_blank'>Telegram</a> and <a className={styles.link} href='#'>LinkedIn</a>.
			</p>
			<p className={styles.text}>
				Download <a className={styles.link} href='#' target='_blank'>my resume</a> (PDF 469 kb)
			</p>
		</motion.article>
	)
}

export default Social;


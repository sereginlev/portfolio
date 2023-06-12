import { React, forwardRef } from 'react';

import styles from 'scss/components/Header/Social.module.scss';

function Social() {
	return (
		<article className={styles.social}>
			<p className={styles.text}>
				Find me at <a className={styles.link} href='https://github.com/jnmmt' target='_blank'>GitHub</a>, <a className={styles.link} href='https://t.me/schwpps' target='_blank'>Telegram</a> and <a className={styles.link} href='#'>LinkedIn</a>.
			</p>
			<p className={styles.text}>
				Download <a className={styles.link} href='#' target='_blank'>my resume</a> (PDF 469 kb)
			</p>
		</article>
	)
}

export default Social;


import React  from 'react';

import styles from 'scss/components/Header/Social.module.scss';

const Social: React.FC = () => {
	return (
		<article className={styles.social}>
			<p className={styles.text}>
				Find me at <a className={styles.link} href='https://github.com/sereginlev' target='_blank'>GitHub</a>, <a className={styles.link} href='https://t.me/sereginlev' target='_blank'>Telegram</a> and <a className={styles.link} href='https://www.linkedin.com/in/levseregin/' target='_blank'>LinkedIn</a>.
			</p>
			<p className={styles.text}>
				Download <a className={styles.link} href='https://drive.google.com/file/d/1WzAwP9IgFfsVlu7QAA9y18NMezKl6sWO/view' target='_blank'>my resume</a> (PDF 718 kb)
			</p>
		</article>
	)
}

export default Social;


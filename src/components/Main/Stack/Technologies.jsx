import React from 'react';

import styles from 'scss/components/Main/Stack/Technologies.module.scss';

function Technologies() {

	return (
		<ul className={styles.technologies}>
			<li className={styles.item}>
				<i className="fa-brands fa-html5"></i>
				<p className={styles.text}>HTML5</p>
			</li>
			<li className={styles.item}>
				<i className="fa-brands fa-css3-alt"></i>
				<p className={styles.text}>CSS3</p>
			</li>
			<li className={styles.item}>
				<i className="fa-brands fa-square-js"></i>
				<p className={styles.text}>JavaScript</p>
			</li>
			<li className={styles.item}>
				<i className="fa-brands fa-react"></i>
				<p className={styles.text}>React</p>
			</li>
			<li className={styles.item}>
				<i className="fa-brands fa-sass"></i>
				<p className={styles.text}>SASS</p>
			</li>
			<li className={styles.item}>
				<i class="fa-brands fa-skyatlas"></i>
				<p className={styles.text}>Redux Toolkit</p>
			</li>
		</ul>
	)
}

export default Technologies;
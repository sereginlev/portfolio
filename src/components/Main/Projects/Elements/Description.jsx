import React from 'react';

import styles from 'scss/components/Main/Projects/Elements/Description.module.scss';

function Description({ title, text }) {
	return (
		<div className={styles.description}>
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default Description;

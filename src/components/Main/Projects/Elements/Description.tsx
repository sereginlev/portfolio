import React from 'react';

import styles from 'scss/components/Main/Projects/Elements/Description.module.scss';

type DescriptionProps = {
	title: string;
	text: string;
}

const Description: React.FC<DescriptionProps> = ({ title, text }) => {
	return (
		<div className={styles.description}>
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default Description;

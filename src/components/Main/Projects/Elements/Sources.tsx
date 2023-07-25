import React from 'react';

import styles from 'scss/components/Main/Projects/Elements/Sources.module.scss';

type SourcesProps = {
	sources: string[];
}

const Sources: React.FC<SourcesProps> = ({ sources }) => {
	return (
		<ul className={styles.sources}>
			<li className={styles.item}>
				<i className="fa-brands fa-github"></i>
				<a className={styles.link} href={sources[0]} target='_blank'>Code</a>
			</li>
			<li className={styles.item}>
				<i className="fa-solid fa-arrow-up-right-from-square"></i>
				<a className={styles.link} href={sources[1]} target='_blank'>Live demo</a>
			</li>
		</ul>
	)
}

export default Sources;

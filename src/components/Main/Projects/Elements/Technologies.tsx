import React from 'react';

import styles from 'scss/components/Main/Projects/Elements/Technologies.module.scss';

type TechnologiesProps = {
	technologies: string[];
}

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {

	return (
		<ul className={styles.technologies}>
			{
				technologies.map((item, index) => (
					<li className={styles.item} key={index}>{item}</li>
				))
			}
		</ul>
	)
}

export default Technologies;

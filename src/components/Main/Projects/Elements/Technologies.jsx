import React from 'react';

import styles from 'scss/components/Main/Projects/Elements/Technologies.module.scss';

function Technologies({ technologies }) {

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

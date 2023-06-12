import React from 'react';

import styles from 'scss/components/Main/Stack/Stack.module.scss';
import Technologies from './Technologies';

function Stack() {

	return (
		<section className={styles.stack}>
			<h2 className={styles.title}>Tech stack.</h2>

			<p className={styles.text}>At the moment I continue to study all the technologies listed below, but I also plan to study TypeScript and Next.js.</p>

			<Technologies />
		</section>
	)
}

export default Stack;

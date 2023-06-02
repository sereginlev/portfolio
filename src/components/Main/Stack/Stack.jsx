import React from 'react';

import styles from 'scss/components/Main/Stack/Stack.module.scss';
import Technologies from './Technologies';

function Stack() {
	const [scrollHeight, setScrollHeight] = React.useState(0);

	React.useEffect(() => {
		const handleScroll = () => {
			const height = window.scrollY;
			setScrollHeight(height);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section className={styles.stack}
			style={{ background: `linear-gradient(${scrollHeight}deg, #fa709a 0%, #fee140 100%)`, transition: 'all 1s ease'}}
		>
			<h2 className={styles.title}>Tech stack.</h2>

			<p className={styles.text}>At the moment I continue to study all the technologies listed below, but I also plan to study TypeScript and Next.js.</p>

			<Technologies />
		</section>
	)
}

export default Stack;

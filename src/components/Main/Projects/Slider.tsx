import React from 'react';
import { motion } from 'framer-motion';
import { useAppSelector } from 'hook';

import styles from 'scss/components/Main/Projects/Slider.module.scss';

import Description from './Elements/Description';
import Technologies from './Elements/Technologies';
import Sources from './Elements/Sources';

const Slider: React.FC = () => {
	const [width, setWidth] = React.useState(0);
	const slider = React.useRef<HTMLDivElement>(null);

	const { projects } = useAppSelector(state => state.projects);

	React.useEffect(() => {
		setWidth(slider.current!.scrollWidth - slider.current!.offsetWidth);
	}, [])

	return (
		<motion.div ref={slider} className={styles.slider}>
			<motion.ul drag='x' dragConstraints={{ right: 0, left: -width }} className={styles.list}>
				{
					projects.map((project, index) => (
						<motion.li className={styles.item} key={index}>
							<div className={styles.info} style={{ height: '100%', width: '100%', background: project.image, backgroundSize: 'cover' }}>
								<div className={styles.block}>
									<Description title={project.title} text={project.text} />

									<Technologies technologies={project.technologies} />

									<Sources sources={project.sources} />
								</div>
							</div>
						</motion.li>
					))
				}
			</motion.ul>
		</motion.div>
	)
}

export default Slider;
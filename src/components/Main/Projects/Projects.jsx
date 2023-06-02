import React from 'react';

import styles from 'scss/components/Main/Projects/Projects.module.scss';
import Slider from './Slider';

function Projects() {
  return (
	 <section className={styles.projects} id='projects'>
			<h2 className={styles.title}>My projects.</h2>
			<p className={styles.text}>Swipe or drag below to see projects I've worked on.</p>

			<Slider />
	 </section>
  )
}

export default Projects;

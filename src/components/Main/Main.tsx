import React from 'react';

import styles from 'scss/components/Main/Main.module.scss';

import About from './About';
import Stack from './Stack/Stack';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';

const Main: React.FC = () => {
  return (
	 <section className={styles.main}>
		<div className={styles.photo}>
			<div className={styles.cover}></div>
		</div>
		
		<About />
		<Stack />
		<Projects />
		<Contacts />
	 </section>
  )
}

export default Main;

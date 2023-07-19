import React from 'react';

import styles from 'scss/components/Main/Contacts/Contacts.module.scss';

function Contacts() {
	return (
		<section className={styles.contacts} id='contacts'>
			<h2 className={styles.title}>Contact me</h2>
			<p className={styles.description}>Currently I live in Volgograd. Ready to relocation to Moscow.</p>

			<ul className={styles.block}>
				<li className={styles.item}>
					<i className="fa-solid fa-envelope"></i>
					<div className={styles.info}>
						<h5 className={styles.subtitle}>Mail</h5>
						<p className={styles.text}>sereginlev1437@gmail.com</p>
					</div>
				</li>
			</ul>
		</section>
	)
}

export default Contacts;

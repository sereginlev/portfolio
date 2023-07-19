import React from 'react';

import styles from 'scss/components/Main/Contacts/Contacts.module.scss';

function Contacts() {
	return (
		<section className={styles.contacts} id='contacts'>
			<h2 className={styles.title}>Contact me</h2>
			<p className={styles.description}>Now I live in Volgorad, Russia. Ready to consider any option of relocation.</p>

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

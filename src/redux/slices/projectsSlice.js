import { createSlice } from '@reduxjs/toolkit';

import weather from '../../assets/projects/weather.jpg';
import coolors from '../../assets/projects/coolors.jpg';
import game from '../../assets/projects/2048.jpg';
import shop from '../../assets/projects/shop.jpg';

const initialState = {
	projects: [
		{ image: `url(${weather})`, title: 'Weather YR', text: 'Worldwide weather forecast for a few days.', technologies: ['HTML', 'CSS', 'React', 'Redux'], sources: ['https://github.com/jnmmt/weather-yr', 'https://jnmmt.github.io/weather-yr/']},
		{ image: `url(${shop})`, title: 'Funiro', text: 'Shop of furniture and items for interior and home.', technologies: ['HTML', 'CSS', 'React', 'Redux'], sources: ['https://github.com/jnmmt/funiro', 'https://jnmmt.github.io/funiro/']},
		{ image: `url(${coolors})`, title: 'Coolors', text: 'Generate beatiful colors for your designs.', technologies: ['HTML', 'CSS', 'React', 'Redux'], sources: ['https://github.com/jnmmt/coolors', 'https://jnmmt.github.io/coolors/']},
		// { image: `url(${game})`, title: '2048', text: "Easy and fun puzzle game. Even if you don't love numbers you will love this game.", technologies: ['HTML', 'CSS'], sources: ['https://github.com/witchcult-today/coolors', 'https://witchcult-today.github.io/coolors/']},
	]
}

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
	}
})

export default projectsSlice.reducer
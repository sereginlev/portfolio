import { createSlice } from '@reduxjs/toolkit';

import weather from '../../assets/projects/weather.jpg';
import coolors from '../../assets/projects/coolors.jpg';
import funiro from '../../assets/projects/funiro.jpg';

type ProjectsState = {
	projects: Project[];
}

type Project = {
	image: string;
	title: string;
	text: string;
	technologies: string[];
	sources: string[];
}

const initialState: ProjectsState = {
	projects: [
		{ image: `url(${weather})`, title: 'Weather YR', text: 'Worldwide weather forecast for a few days.', technologies: ['HTML', 'CSS', 'React', 'Redux'], sources: ['https://github.com/sereginlev/weather-yr', 'https://sereginlev.github.io/weather-yr/']},
		{ image: `url(${funiro})`, title: 'Funiro', text: 'Shop of furniture and items for interior and home.', technologies: ['HTML', 'CSS', 'React', 'Redux'], sources: ['https://github.com/sereginlev/funiro', 'https://sereginlev.github.io/funiro/']},
		{ image: `url(${coolors})`, title: 'Coolors', text: 'Generate beatiful colors for your designs.', technologies: ['HTML', 'CSS', 'React', 'Redux'], sources: ['https://github.com/sereginlev/coolors', 'https://sereginlev.github.io/coolors/']},
	]
}

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
	}
})

export default projectsSlice.reducer
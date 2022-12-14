import Chatter from '../assets/Chatter.png';
import QuickSnags from '../assets/QuickSnags.png';
import SpotifyMonthly from '../assets/SpotifyMonthly.png';

const projectData = [
	{
		name            : 'QuickSnags',
		liveUrl         : 'https://quicksnags.herokuapp.com/',
		repoUrl         : 'https://github.com/JJHDZ123/QuickSnags-MERN',
		projectImageUrl : QuickSnags,
		description     :
			'Full feature commerce site, for all your favorite snacks and interesting snacks from aroudn the world. Please give it a little time for the web Dynos to spin up as it is hosted on Heroku'
	},
	{
		name            : 'Chatter',
		liveUrl         : 'https://chatter-juan.herokuapp.com/',
		repoUrl         : 'https://github.com/JJHDZ123/Chatter-MERN',
		projectImageUrl : Chatter,
		description     :
			'Real-time Chat app that utilizes Websockets and fully fledged out user-sign in with persistant sign-in. Please give it a little time for the web Dynos to spin up as it is hosted on Heroku'
	},
	{
		name            : 'Spotify Monthly',
		liveUrl         : 'https://spotify-monthly-1.herokuapp.com/',
		repoUrl         : 'https://github.com/JJHDZ123/Spotify-Monthly',
		projectImageUrl : SpotifyMonthly,
		description     :
			'Live application used to make monthly spotify playlists for all your favorite artists. Please give it a little time for the web Dynos to spin up as it is hosted on Heroku'
	}
];

export default projectData;

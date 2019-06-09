import axios from 'axios';


const KEY = 'AIzaSyCTtU7hNj05clDh-Eq1NBr0pkrpVy2rTVQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

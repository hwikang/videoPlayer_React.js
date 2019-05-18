import axios from 'axios';
const KEY = 'AIzaSyB3xgE6yfjRNgZfqrCxNLLA2rQ2RgoOW_Q';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part:'snippet',
        maxResult : '5',
        key : KEY
        
    }
})
//axios

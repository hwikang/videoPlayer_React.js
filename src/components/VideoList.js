import React from 'react';
import VideoItem from './VideoItem';
const VideoList = ({videos,onVideoSelect}) => {
    
    //props = app.js 의 props가 넘어옴
    console.log(videos)
    //{videos} == props.videos
    const renderedList = videos.map((video)=>{
        return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId}/>
    });  
    return <div className="ui relaxed devided list"> {renderedList} </div>
};

export default VideoList;
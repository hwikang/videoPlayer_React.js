import React from 'react';

const VideoDetail = ({video}) =>{
    if(!video){
        return <div>Loading...</div>
    } //밑으로 안내려감 return 하면
    //백틱사용해서 적용
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title="video player"/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    {video.snippet.title}
                </h4>
                <p>{video.snippet.description}</p>
            </div>
    
        </div>
    )
}

export default VideoDetail;
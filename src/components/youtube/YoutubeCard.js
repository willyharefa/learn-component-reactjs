import React from "react";
import '../../assets/style/components/youtube.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://loremflickr.com/640/360"></img>
                <p className="time-thumb">{props.time}</p>
            </div>
            <div className="metadata-desc">
                <p className="title">{props.title}</p>
                <p className="desc">{props.views} x ditonton &bull; {props.timeUpload}</p>
            </div>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: "00:00",
    title: "Title Here",
    views: "0",
    timeUpload: "unknown"
}

export default YoutubeComp;
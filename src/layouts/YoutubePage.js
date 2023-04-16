import React, { Component, Fragment } from "react";
import YoutubeCard from '../components/youtube/YoutubeCard';
import "../assets/style/pages/youtube-page.css";


class YoutubePage extends Component {
    render() {
        return (
            <div className="container-card">
                < YoutubeCard 
                    time="7.15"
                    title="Belajar Dasar Pemograman"
                    views="312"
                    timeUpload="2 minggu yang lalu"
                />
                < YoutubeCard 
                    time="4.32"
                    title="Apa itu arti JSX pada ReactJS"
                    views="1.021"
                    timeUpload="3 minggu yang lalu"
                />
                < YoutubeCard 
                    time="5.22"
                    title="Function dan Class Components pada ReactJS"
                    views="1.210"
                    timeUpload="3 minggu yang lalu"
                />
                < YoutubeCard 
                    time="7.15"
                    title="State & Lifecycle pada ReactJS"
                    views="490"
                    timeUpload="6 bulan yang lalu"
                />
                < YoutubeCard 
                    time="7.15"
                    title="Apa itu Handling Event pada React"
                    views="5.290"
                    timeUpload="1 tahun yang lalu"
                />
                < YoutubeCard 
                    // time="7.15"
                    // title="Apa itu Handling Event pada React"
                    // views="5.290"
                    // timeUpload="1 tahun yang lalu"
                />
            </div>
        )
    }
}

export default YoutubePage;
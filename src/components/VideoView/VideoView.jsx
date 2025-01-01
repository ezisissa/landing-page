import Headline from "../Headline/Headline";
import "./VideoView.css"

const VideoView = () => {
    return(
        <div className="video-container">
            <Headline text="Video View" />
            <h2>Get Closer View & Different Feeling</h2>
            <div className="video-img">
                <img src="/assets/video-frame.jpg" alt="video-frame"/>
                <div className="play">
                <i className="fa-solid fa-circle-play"></i>
                </div>
            </div>
        </div>
    )

} 

export default VideoView;
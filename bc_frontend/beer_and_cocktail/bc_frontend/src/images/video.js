import React from 'react'
// import still from './still.png'
import video from './video.mp4'

const Video = () => {
    return (
        <div className='Video'>
            <video src={video} type='video/mp4'
            autoPlay 
            loop
            muted
            style={{
                position: "absolute",
                width: '100%',
                left: '50%',
                top: '50%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translate(-50%, -50%)',
                zIndex: '-1'
            }}
            >
            </video>
        </div>
    )
}

export default Video;
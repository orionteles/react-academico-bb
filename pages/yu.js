import React from "react";
import PropTypes from "prop-types";



const YoutubeEmbed = () => {

    const url = 'https://www.youtube.com/watch?v=UGHokOZH0hg'
    const id = url.substring(url.lastIndexOf('=') + 1)

    return (
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/` + url.substring(url.lastIndexOf('=') + 1)}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
};

export default YoutubeEmbed;
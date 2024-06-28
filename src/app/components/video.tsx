import React from "react";

const Video = () => {
  return (
    <div className="aspect-video">
      <iframe
        className=" h-full w-full rounded-lg"
        src="https://www.youtube.com/embed/imxdoV9Qsbg"
        width="100%"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;

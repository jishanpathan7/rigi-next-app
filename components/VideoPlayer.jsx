//* Packages Imports */
import React, { useState, useEffect } from "react";
import { formatTime } from "../utils/formatTime";
import { Maximize, Minimize, Volume2, VolumeX } from "lucide-react";

const VideoDetails = ({ video }) => {
  return (
    <div className="mt-4 bg-gray-200 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
      <span className="text-sm font-bold opacity-70">
        Creator: {video.subtitle}
      </span>
      <p className="text-gray-600 mt-2">{video.description}</p>
    </div>
  );
};

const VideoPlayer = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [videoElement, setVideoElement] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [volume, setVolume] = useState(1);

  const handlePlayPause = () => {
    if (videoElement) {
      setIsPlaying((prevState) => {
        const newState = !prevState;
        newState ? videoElement.play() : videoElement.pause();
        return newState;
      });
    }
  };

  const handleTimeUpdate = (event) => {
    setCurrentTime(event.target.currentTime);
    setDuration(event.target.duration);
  };

  const handleSeek = (time) => {
    if (videoElement) {
      videoElement.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    if (videoElement) {
      videoElement.playbackRate = speed;
      isPlaying && videoElement.play();
    }
  };

  const handleVolumeChange = (vol) => {
    setVolume(vol);
    if (videoElement) videoElement.volume = vol;
  };

  const handleFullScreenChange = () => {
    setIsFullScreen(!!document.fullscreenElement);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      videoElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const element = document.getElementById("videoPlayer");
    setVideoElement(element);
  }, []);

  useEffect(() => {
    const fullscreenChangeHandler = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", fullscreenChangeHandler);
    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
    };
  }, []);

  return (
    <div>
      <div className="relative">
        <div className="video-player-container bg-gray-900 shadow-lg rounded-lg overflow-hidden">
          <video
            id="videoPlayer"
            className="w-full"
            src={video.sources[0]}
            autoPlay
            controls
            onTimeUpdate={handleTimeUpdate}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            playbackRate={playbackSpeed}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="bg-white bg-opacity-75 px-4 py-2 rounded-lg"
              onClick={handlePlayPause}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 flex items-center justify-between">
            <input
              type="range"
              className="w-full mr-2 cursor-pointer"
              min={0}
              max={duration}
              value={currentTime}
              onChange={(e) => handleSeek(e.target.value)}
            />
            <span className="text-white">
              {formatTime(currentTime)}/{formatTime(duration)}
            </span>
            <button
              className="px-4 py-2 rounded-lg ml-2 md:ml-4 text-slate-50"
              onClick={toggleFullScreen}
            >
              {isFullScreen ? <Minimize /> : <Maximize />}
            </button>
            <button
              className="px-2 py-2 rounded-lg ml-0 md:ml-2 text-slate-50"
              onClick={() => handleVolumeChange(volume === 0 ? 1 : 0)}
            >
              {volume === 0 ? <VolumeX /> : <Volume2 />}
            </button>
            <input
              type="range"
              className="w-16 ml-2"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            />
            <select
              className="bg-white rounded-md px-2 py-2 ml-2"
              value={playbackSpeed}
              onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
            >
              <option value={0.5}>0.5x</option>
              <option value={1}>1x</option>
              <option value={1.5}>1.5x</option>
              <option value={2}>2x</option>
            </select>
          </div>
        </div>
      </div>
      <VideoDetails video={video} />
    </div>
  );
};

export default VideoPlayer;


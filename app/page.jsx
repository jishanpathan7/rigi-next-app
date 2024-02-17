"use client";

//* Packages Imports */
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";

//* Components Imports */
import Header from "../components/Header";

//* Utils Imports */
import mediaJson from "../data/mediaJson";

//* Dynamic Imports */c
const VideoPlayer = dynamic(() => import("../components/VideoPlayer"));
const MediaPlayList = dynamic(() => import("../components/PlayList"));

export default function Home() {
  const videos = useMemo(() => mediaJson.categories[0].videos, []);
  const [playlist, setPlaylist] = useState(videos);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(playlist);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPlaylist(items);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-300">
      <Header />
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4">
            <VideoPlayer video={currentVideo} />
          </div>
          <div className="md:w-1/4 mt-8 md:mt-0">
            <MediaPlayList
              videos={playlist}
              handleVideoClick={handleVideoClick}
              onDragEnd={handleDragEnd}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

//* Packages Imports */
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Grip } from "lucide-react";

const Playlist = ({ videos, onDragEnd, handleVideoClick }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the videos based on the search
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="ml-2">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search videos..."
        className="w-full py-2 px-4 mb-4 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="playlist">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col gap-y-4"
            >
              {filteredVideos.map((video, index) => (
                <Draggable
                  key={video.title}
                  draggableId={video.title}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="bg-slate-200 border-slate-200 border text-slate-700 rounded-md mb-1 md:mb-3 text-sm"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <div
                        className="px-2 py-3 border-r border-r-slate-200 rounded-l-md 
                        transitionborder-r-sky-200 hover:bg-sky-200 flex items-center justify-between gap-2"
                        {...provided.dragHandleProps}
                      >
                        <div
                          className="flex items-center justify-between gap-4"
                          onClick={() => handleVideoClick(video)}
                        >
                          <img
                            src={video.thumb}
                            alt={video.title}
                            className="h-16 w-16 object-cover rounded-md"
                          />
                          <span className="cursor-pointer">{video.title}</span>
                        </div>
                        <Grip className="h-5 w-5" />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Playlist;

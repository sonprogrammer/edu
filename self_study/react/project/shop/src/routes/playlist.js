import React from "react";
import { PlaylistCardProps } from "../../types/PlaylistCardProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";


export default function PlaylistCardComponent({
  profileIcon,
  profileName,
  albumCover,
  title,
  hashtags,
  likes,
}) {
  return (
    <div>
      <div>
        <div>
          <img src={profileIcon} alt="Profile" />
          <span>{profileName}</span>
        </div>
        <img src={albumCover} alt="Album Cover" />
      </div>
      <div>
        <span>{title}</span>
        <div>
          {hashtags.map((tag, index) => (
            <div key={index}>#{tag}</div>
          ))}
        </div>
        <div
          icon={faHeart}
          className="text-purple-500 text-3xl mr-4"
        />
        <div
          icon={faComment}
          className="text-purple-500 text-3xl"
        />
        <div>
          <span>좋아요: {likes}개</span>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export function LikeDislike() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="like-dislike">
      <button onClick={() => setLikes(likes + 1)}>Like</button>
      <span> Likes: {likes}</span>
      <button onClick={() => setDislikes(dislikes + 1)}>Dislike</button>
      <span> Dislikes: {dislikes}</span>
    </div>
  );
}

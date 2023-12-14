'use client'

import { useState } from "react";

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddCollection = async (e) => {
    e.preventDefault();
    const data = { anime_mal_id, user_email, anime_image, anime_title };

    const response = await fetch('/api/v1/collection', {
      method: "POST",
      body: JSON.stringify(data)
    });

    if (response.ok) {
      setIsAdded(true);
    }
  }

  return (
    <>
      {
        isAdded ?
          <p className="px-3 py-2 bg-color-primary text-color-dark rounded-sm inline">Added to collection</p>
          :
          <button onClick={handleAddCollection} className="px-3 py-2 bg-color-accent text-color-primary rounded-sm">Add to Collection</button>
      }
    </>
  )
}

export default CollectionButton;
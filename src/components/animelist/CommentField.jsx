'use client'

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const CommentField = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const comment = useRef('');
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000)
    }
  }, [isSuccess])

  const handlePostComment = async (e) => {
    e.preventDefault();

    if(!comment.current.value) {
      return
    }

    const data = { anime_mal_id, user_email, comment: comment.current.value, username, anime_title };

    const response = await fetch('/api/v1/comment', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    if (response.ok) {
      setIsSuccess(true);
      comment.current.value = '';
      router.refresh();
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {
        isSuccess && <p className="py-1 text-color-primary">Comment posted...</p>
      }
      <textarea ref={comment} rows={2} className="p-4 text-lg rounded-sm" placeholder="Type something..." />
      <button disabled={isSuccess} onClick={handlePostComment} className="px-3 py-2 bg-color-accent rounded-sm text-lg w-48">Post Comment</button>
    </div>
  )
}

export default CommentField;
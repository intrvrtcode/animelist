import prisma from "@/libs/prisma";

const CommentBox = async ({anime_mal_id}) => {
  const comments = await prisma.comment.findMany({where: {anime_mal_id}})

  return (
    <div className="mb-6">
      <h3 className="text-2xl text-color-primary mb-4">All Comments</h3>

      <div className="border  border-color-primary rounded-sm p-4 bg-color-dark min-h-[100px] max-h-[300px] overflow-auto">
        {
          comments.map((item, index) => (
            <div className="my-2" key={index}>
              <p className="text-white">{item.comment}</p>
              <span className="text-color-accent text-sm italic">{item.username}</span>
            </div>
          ))
        }

        {
          comments.length === 0 &&
          <p className="text-lg text-color-primary">No comments yet..</p>
        }
      </div>
    </div>
  )
}

export default CommentBox;
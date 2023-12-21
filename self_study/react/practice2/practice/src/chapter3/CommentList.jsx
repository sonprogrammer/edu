import React from "react";
import Comment from "./Comment";



const comments = [
    {
        name: "son",
        comment: "hi im son"
    },
    {
        name: "lee",
        comment: "hi im lee"
    },
    {
        name: "park",
        comment: "hi im park"
    }
]


function CommentList(props) {
    return(
        <div>
            {comments.map((comment) => {
                return (
                <Comment name ={comment.name} comment={comment.comment} />
            )})}
        </div>
    )
}

export default CommentList;
import Link from "next/link";
import React from "react";

const PostCard = ({ image, title, body, id }) => {
  return (
    <Link
      href={`post/${id}`}
      className="border rounded-md p-4 m-4 bg-white h-[20rem] w-[15rem]"
    >
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{body}</p>
      </div>
    </Link>
  );
};

export default PostCard;

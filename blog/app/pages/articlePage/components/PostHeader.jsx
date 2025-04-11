import React from "react";

function PostHeader({ date, title, tags }) {
  return (
    <div className="">
      <p className="text-gray-400">{date}</p>
      <h1 className="font-bold text-4xl m-2">{title}</h1>
      <ol className="flex">
        {tags.map((tag) => {
          return (
            <li className="mr-0.5 min-w-15 p-1 rounded-3xl bg-gray-600 text-center
">
              <p>{tag}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default PostHeader;

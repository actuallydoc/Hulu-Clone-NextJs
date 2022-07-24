import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div
      ref={ref}
      className="p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 group cursor-pointer"
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.poster_path || result.backdrop_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        alt={result.title}
        height={300}
        width={200}
      />
      <div>
        <p className="truncate max-w-md text-white">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100 ">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2 text-white" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName = "Thumbnail";
export default Thumbnail;

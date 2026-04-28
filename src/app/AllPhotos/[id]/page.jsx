import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidHeart } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";

const PhotosDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://pix-gen-five.vercel.app/data.json");
  const photos = await res.json();
  const photo = photos.find((p) => p.id == id);
  const {
    title,
    imageUrl,
    prompt,
    category,
    model,
    tags,
    likes,
    downloads,
  } = photo;

  return (
    <div className="max-w-5xl w-6/12 my-10 mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
      <div className="relative w-full h-[400px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />

        <Chip className="absolute top-4 left-4 bg-black text-white">
          {category}
        </Chip>
      </div>

      <div className="p-6 space-y-4">

        <h2 className="text-3xl font-bold">{title}</h2>

        <p className="text-gray-600 italic">"{prompt}"</p>

        <p className="text-sm text-gray-500">
           Model: <span className="font-semibold">{model}</span>
        </p>

        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <Chip key={index} size="sm" variant="flat">
              #{tag}
            </Chip>
          ))}
        </div>

        <div>
          <div className="flex justify-between items-center text-gray-600">
            <p className="flex items-center gap-2">
              <BiSolidHeart /> {likes}
            </p>
            <p className="flex items-center gap-2">
              <FaDownload /> {downloads}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosDetails;

import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { BiSolidHeart } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
  // console.log(photo, 'photo')
  const { title, imageUrl, likes, downloads,category } = photo;
  return (
    <div className="border p-2 rounded-xl space-y-3">
      <div className="relative w-full aspect-square">
        <Image
          className="rounded-xl object-cover"
          src={imageUrl}
          alt="title"
          fill
        ></Image>
        <Chip size="sm" className="absolute right-2 top-2">{category}</Chip>
      </div>
      <p className="text-xl font-bold">{title}</p>
      <div className="flex text-gray-400 font-medium justify-between items-center">
        <p className="flex items-center gap-2">
          {" "}
          <BiSolidHeart />
          {likes}
        </p>
        <p className="flex items-center gap-2">
          <FaDownload />
          {downloads}
        </p>
      </div>
      <Button variant="outline" className={'w-full font-bold'}>Card details</Button>
    </div>
  );
};

export default PhotoCard;

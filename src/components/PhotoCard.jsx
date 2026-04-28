import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidHeart } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
  const { title, imageUrl, likes, downloads,category } = photo;
  return (
    <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white">

      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        <Chip className="absolute top-3 left-3 bg-black text-white text-xs">
          {category}
        </Chip>
      </div>

      <div className="p-4 space-y-3">

        <h2 className="font-semibold text-lg line-clamp-1">
          {title}
        </h2>

        <div className="flex justify-between text-gray-500 text-sm">
          <span className="flex items-center gap-1">
            <BiSolidHeart /> {likes}
          </span>
          <span className="flex items-center gap-1">
            <FaDownload /> {downloads}
          </span>
        </div>

        <Link href={`/AllPhotos/${photo.id}`}>
          <Button
            variant="outline"
            className="w-full font-semibold group-hover:bg-black group-hover:text-white transition"
          >
            View Details
          </Button>
        </Link>

      </div>
    </div>
  );
};

export default PhotoCard;

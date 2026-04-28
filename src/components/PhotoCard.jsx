import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
  // console.log(photo, 'photo')
  const { title, imageUrl, likes, downloads } = photo;
  return (
    <div className="border p-2 rounded-xl space-y-3">
      <Image src={imageUrl} alt="title" width={300} height={300}></Image>
      <p className="text-xl font-bold">{title}</p>
      <div className="flex text-gray-400 font-medium justify-between items-center">
        <p> {likes}</p>
        <p><FaDownload />{downloads}</p>
      </div>
    </div>
  );
};

export default PhotoCard;

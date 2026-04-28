import React from "react";
import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch("https://pix-gen-five.vercel.app/data.json");
  const photos = await res.json();
  const photoCut = photos.slice(0, 8);

  return (
    <div className="my-10 p-2">
        <h2 className="text-3xl font-bold mb-4">Top Generations</h2>
      <div className="grid grid-cols-4 gap-2">
        {photoCut.map((photo) => {
          return <PhotoCard key={photo.id} photo={photo}></PhotoCard>
        })}
      </div>
    </div>
  );
};

export default TopGenerations;

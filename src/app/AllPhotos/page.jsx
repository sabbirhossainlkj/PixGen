import PhotoCard from "@/components/PhotoCard";

const AllPhotos = async () => {
  const res = await fetch("https://pix-gen-five.vercel.app/data.json");
  const photos = await res.json();
  return (
    <div className="my-9">
      <h2 className="text-2xl font-bold my-4">all photos</h2>
      <div className="grid grid-cols-4 gap-4">
        {photos.map((photo) => {
          return <PhotoCard key={photo.id} photo={photo}></PhotoCard>;
        })}
      </div>
    </div>
  );
};

export default AllPhotos;

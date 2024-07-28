const images = [
  "https://static.remove.bg/uploader-examples/person/7_thumbnail.jpg",
  "https://static.remove.bg/uploader-examples/animal/6_thumbnail.jpg",
  "https://static.remove.bg/uploader-examples/car/1_thumbnail.jpg",
  "https://static.remove.bg/uploader-examples/product/2_thumbnail.jpg",
];

const TestImages = () => {
  return (
    <div id="testImages" className="flex items-center justify-between">
      <p className="text-gray-800 mt-1">
        No image?
        <br />
        Try one of these:
      </p>

      <div className="flex gap-3">
        {images.map((image) => (
          <button
            key={image}
            className="w-16 h-16 bg-cover rounded-lg hover:opacity-75 transition 0.1s ease-in-out"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestImages;

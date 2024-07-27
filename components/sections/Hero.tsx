const images = [
  "https://static.remove.bg/uploader-examples/person/7_thumbnail.jpg",
  "https://static.remove.bg/uploader-examples/animal/6_thumbnail.jpg",
  "https://static.remove.bg/uploader-examples/car/1_thumbnail.jpg",
  "https://static.remove.bg/uploader-examples/product/2_thumbnail.jpg",
];

const Hero = () => {
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-center h-[100%-72px] gap-12 lg:gap-20"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      <div className="flex flex-col mt-16 lg:mb-16 gap-4 max-w-xs">
        <video className="w-full h-auto min-h-[500px] bg-gray-500" autoPlay />
        <h1 className="text-gray-800 text-6xl font-bold">Resize Your Image</h1>
        <p className="text-gray-800 text-2xl">100% automatically and Free</p>
      </div>

      <div className="flex flex-col gap-4">
        <div
          id="uploadContainer"
          className="h-80 flex flex-col justify-center rounded-3xl bg-white shadow-2xl gap-6"
        >
          <button className="!mx-28 rounded-full font-bold text-2xl px-8 py-2.5 mt-12 text-white bg-blue-500 hover:bg-blue-600 transition 0.2s ease-in-out active:scale-[0.98]">
            Upload Image
          </button>
          <div className="text-center">
            <p className="text-xl">or drop a file</p>
            <span>
              paste image or{" "}
              <a href="#" className="underline">
                URL
              </a>
            </span>
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default Hero;

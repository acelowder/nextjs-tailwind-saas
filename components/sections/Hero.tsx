import { Promo, TestImages, UploadContainer } from "../shared";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center h-[calc(100vh-72px)]">
      <Promo />
      <div className="flex flex-col gap-4">
        <UploadContainer />
        <TestImages />
      </div>
    </section>
  );
};

export default Hero;

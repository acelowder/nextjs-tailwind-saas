import { Promo, TestImages, UploadContainer } from "../shared";

const Hero = () => {
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-center h-[100%-72px] gap-12 lg:gap-20"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      <Promo />
      <div className="flex flex-col gap-4">
        <UploadContainer />
        <TestImages />
      </div>
    </section>
  );
};

export default Hero;

const halftonePattern = {
  backgroundImage: `
    radial-gradient(
      circle,
      rgba(0, 0, 0, 0.03) 2px,
      transparent 2px
    ),
    radial-gradient(
      circle,
      rgba(0, 0, 0, 0.03) 2px,
      transparent 2px
    )
  `,
  backgroundSize: "20px 20px",
  backgroundPosition: "0 0, 10px 10px",
};

const View = () => {
  return (
    <div
      className="flex w-full h-full items-center justify-center bg-gray-50"
      style={halftonePattern}
    >
      <img className="w-96 h-96 bg-slate-500" />
    </div>
  );
};

export default View;

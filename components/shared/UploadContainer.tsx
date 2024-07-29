"use client";

import { useDropzone } from "react-dropzone";
import Link from "next/link";

const UploadContainer = () => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop: (acceptedFiles) => {
      // Handle the uploaded file here
      console.log(acceptedFiles);
    },
  });

  return (
    <div
      id="uploadContainer"
      {...getRootProps()}
      className="h-80 flex flex-col justify-center rounded-3xl bg-white shadow-2xl gap-6 pt-12 px-28 pointer-events-none"
    >
      <Link href="/expand" passHref>
        <button className="rounded-full font-bold text-2xl px-8 py-2.5 text-white bg-blue-500 hover:bg-blue-600 transition 0.2s ease-in-out active:scale-[0.98] pointer-events-auto">
          Upload Image
        </button>
      </Link>
      <div className="text-center">
        <p className="text-xl">or drop a file</p>
        <span className="text-xs">
          paste image or{" "}
          <a href="#" className="underline pointer-events-auto">
            URL
          </a>
        </span>
      </div>
      <input {...getInputProps()} />
    </div>
  );
};

export default UploadContainer;

import React from "react";
import Image from "next/image";

const Section: React.FC = () => {
  return (
    <div className="h-screen max-w-full mx-auto flex items-center justify-center bg-black  p-8">
      <Image
        src="/shape.svg"
        sizes="100vh"
        layout="fill"
        alt="shape"
        className=" relative -top-12 left-1/2  h-screen"
        style={{
          right: "-50%",
          //   top: "-25%",
          left: "50%",
        }}
      />
      <div className="flex-1 text-white text-center">
        <h1 className="text-4xl font-bold uppercase">Software Developer</h1>
        <h2 className="text-6xl font-extrabold">Sri Krishna Koushik Kapaka</h2>
        <p className="text-xl">Im a Software developer.</p>
      </div>
      <div className="flex-1 relative">
        <Image
          src="/koushik.png"
          alt="Sri Krishna Koushik"
          width={300}
          height={300}
          className="rounded-full"
        />
        <div className="absolute top-0 right-0 flex flex-col items-center">
          <button className="bg-white text-purple-600 p-2 rounded-full">
            X
          </button>
          <button className="bg-white text-purple-600 p-2 rounded-full">
            X
          </button>
        </div>
        <div className="absolute bottom-0 left-0 flex flex-col items-center">
          <button className="bg-white text-purple-600 p-2 rounded-full">
            CV
          </button>
          <button className="bg-white text-purple-600 p-2 rounded-full">
            FB
          </button>
          <button className="bg-white text-purple-600 p-2 rounded-full">
            TW
          </button>
          <button className="bg-white text-purple-600 p-2 rounded-full">
            IG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;

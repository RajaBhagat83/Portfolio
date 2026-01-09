import React from "react";

type stackinput = {
  name: string;
  icons: React.ReactNode;
};

function Stackinput({ name, icons }: stackinput) {
  return (
    <div
      className="
        cursor-pointer
        w-full
        sm:w-56
        md:w-64
        hover:scale-105
        active:scale-100
        transition-transform
      "
    >
      <div
        className="
          flex items-center
          justify-start
          mt-6
          sm:mt-10
          md:mt-12
          gap-4
        "
      >
        {icons}
        <h2
          className="
            text-xs
            sm:text-sm
            relative
            sm:top-11 sm:right-12
          "
        >
          {name}
        </h2>
      </div>
    </div>
  );
}

export default Stackinput;

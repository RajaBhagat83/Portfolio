
type projectInput={
  link:string,
  image: string ,
  alt : string,
  title:string,
  desc :string
}
function ProjectPart(input: projectInput) {
  return (
    <div
      className="
        p-3 
        border-2 border-gray-950 
        rounded-full
        w-full
        sm:w-auto
        flex justify-center
      "
    >
      <a
        href={input.link}
        target="_blank"
        className="
          group relative block 
          w-full
          max-w-xs
          sm:w-72
          h-40
          sm:h-48
          overflow-hidden 
          rounded-xl 
          shadow-lg 
          cursor-pointer
        "
      >
        <img
          src={input.image}
          alt={input.alt}
          className="
            w-full h-full object-cover
            transition-transform duration-500 
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute inset-0 
            opacity-100 
            group-hover:opacity-0 
            transition-opacity 
            duration-1000
          "
        >
          <div className="w-full h-full bg-black px-3 sm:px-0">
            <h3 className="text-white text-lg sm:text-2xl font-semibold pt-4">
              {input.title}
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-4">
              {input.desc}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectPart;


import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="mt-[15%] animate-fade-in">
      <a
        href=""
        className="group block relative max-w-[960px] h-72 md:h-[485px] lg:md:h-[525px] mb-20 md:mb-32 lg:mb-36 overflow-hidden"
      >
        <Image
          src="/airbnb_laptop.jpeg"
          alt="Airbnb"
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          priority
        />
        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full text-7xl text-white font-regular transition duration-300 bg-black bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100">
          <span className="transition duration-300 translate-y-7 group-hover:translate-y-0">Airbnb</span>
        </div>
      </a>
      <a
        href=""
        className="group block relative max-w-[960px] h-72 md:h-[485px] lg:md:h-[525px] mb-20 md:mb-32 lg:mb-36 overflow-hidden"
      >
        <Image
          src="/snapchat_hero.jpeg"
          alt="Airbnb"
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          priority
        />
        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full text-7xl text-white font-regular transition duration-300 bg-black bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100">
          <span className="transition duration-300 translate-y-7 group-hover:translate-y-0">Snapchat</span>
        </div>
      </a>
      <a
        href=""
        className="group block relative max-w-[960px] h-72 md:h-[485px] lg:md:h-[525px] mb-20 md:mb-32 lg:mb-36 overflow-hidden"
      >
        <Image
          src="/capital_one_hero.png"
          alt="Airbnb"
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          priority
        />
        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full text-7xl text-white font-regular transition duration-300 bg-black bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100">
          <span className="transition duration-300 translate-y-7 group-hover:translate-y-0">Capital One</span>
        </div>
      </a>
    </div>
  );
};

export default Portfolio;

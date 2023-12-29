import Image from "next/image";

const projects = [
  {
    title: "Airbnb",
    image: "/airbnb_laptop.jpeg",
    href: "/portfolio/airbnb",
  },
  {
    title: "Snapchat",
    image: "/snapchat_hero.jpeg",
    href: "/portfolio/snapchat",
  },
  {
    title: "Capital One",
    image: "/capital_one_hero.png",
    href: "/portfolio/capital_one",
  },
];

const Portfolio = () => {
  return (
    <div className="mt-[15%] animate-fade-in">
      {projects.map(({ title, image, href }) => (
        <a
          href={href}
          className="group block relative max-w-5xl h-72 md:h-[485px] lg:md:h-[525px] mb-20 md:mb-32 lg:mb-36 overflow-hidden"
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full text-7xl text-white font-regular transition duration-300 bg-black bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100">
            <span className="transition duration-300 translate-y-7 group-hover:translate-y-0">{title}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Portfolio;

import React, { ReactElement } from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: ReactElement;
  image: string;
  duration: string;
  role: string;
  technologies: string;
}

const PortfolioPDP = ({ title, description, image, duration, role, technologies }: Props) => {
  return (
    <div className="mt-[15%] mb-16">
      <h1 className="text-4xl mb-8">{title}</h1>

      {description}

      <div className="w-full h-[400px] relative mb-10">
        <Image src={image} alt="Airbnb" fill className="object-cover" priority />
      </div>

      <h2 className="font-bold uppercase">Duration</h2>
      <p className="mb-4">{duration}</p>

      <h2 className="font-bold uppercase">Role</h2>
      <p className="mb-4">{role}</p>

      <h2 className="font-bold uppercase">Technologies</h2>
      <p className="mb-4">{technologies}</p>
    </div>
  );
};

export default PortfolioPDP;

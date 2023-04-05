import styles from "@/styles/Headline.module.scss";

const Headline = () => {
  return (
    <div className="mt-[15%] md:w-3/5">
      <h1 className="text-5xl">Hi, I'm André.</h1>
      <p className="text-2xl my-8">
        I’m a Senior Software Engineer at <span className="text-rausch">Airbnb</span> based in New York. I previously
        helped build things at Snapchat. Outside of work I enjoy playing soccer, sushi, chess, and watching UFC.
      </p>
    </div>
  );
};

export default Headline;

const Headline = () => {
  return (
    <div className="mt-[15%] text-black w-full md:w-[60%]">
      <h1 className="font-light mb-4 animate-slide-up-1 text-5xl lg:text-6xl">Hello! I'm André.</h1>
      <h2 className="font-extralight mb-10 animate-slide-up-2 text-3xl lg:text-4xl">
        Senior Software Engineer at{" "}
        <a
          href="https://www.airbnb.com/"
          className="border-b-2 border-rausch transition duration-300 ease hover:text-rausch"
        >
          Airbnb
        </a>{" "}
        based in New York
      </h2>
      <p className="animate-slide-up-3 text-lg md:text-xl">
        Previously at{" "}
        <a href="https://www.snapchat.com/en-US" target="_blank" className="font-medium underline">
          Snapchat
        </a>{" "}
        and{" "}
        <a href="https://www.capitalone.com/" target="_blank" className="font-medium underline">
          Capital One
        </a>
      </p>
    </div>
  );
};

export default Headline;

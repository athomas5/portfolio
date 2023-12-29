import React from "react";

import PortfolioPDP from "@/components/portfolio/PortfolioPDP";

const CapitalOne = () => {
  return (
    <PortfolioPDP
      title="CapitalOne"
      description={
        <p className="mb-10">
          During my time at Capital One, I had the privilege of being a part of the Web Credit Card team. I contributed
          to the development and maintenance of over 100 web pages, showcasing my versatility in handling diverse
          aspects of the project. In addition to my involvement in page creation, I actively participated in the
          implementation of numerous A/B tests. These tests played a crucial role in optimizing user experience and
          refining the overall performance of the web platform, driving meaningful insights and informed
          decision-making.
        </p>
      }
      image="/capital_one_banner.jpeg"
      duration="October 2018 - April 2021"
      role="Software Engineer"
      technologies="React, TypeScript, HTML, CSS, Node, AWS, Contentful"
    />
  );
};

export default CapitalOne;

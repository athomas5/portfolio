import React from "react";

import PortfolioPDP from "@/components/portfolio/PortfolioPDP";

const Airbnb = () => {
  return (
    <PortfolioPDP
      title="Airbnb"
      description={
        <p className="mb-10">
          I'm currently working as a Senior Software Engineer at Airbnb on the Marketing Technology team. I'm working on
          the Journey Platform , a low-code tool for creating interactive user workflows.
          <br />
          <br />
          The{" "}
          <a
            href="https://medium.com/airbnb-engineering/journey-platform-a-low-code-tool-for-creating-interactive-user-workflows-9954f51fa3f8"
            target="_blank"
            className="underline"
          >
            Journey Platform
          </a>{" "}
          empowers non-technical and technical users to create complex stateful workflows through a simple drag and drop
          interface. By leveraging a generic workflow definition DSL, along with action store, event store, and
          attribute store, the platform facilitates the creation of workflows that respond to real-time events,
          streamlining communication, and enhancing user experiences.
        </p>
      }
      image="/airbnb_banner.png"
      duration="November 2022 - Present"
      role="Senior Software Engineer"
      technologies="React, TypeScript, HTML, CSS, Java, SQL, GraphQL, AWS, Docker, Kubernetes"
    />
  );
};

export default Airbnb;

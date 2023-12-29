import React from "react";

import PortfolioPDP from "@/components/portfolio/PortfolioPDP";

const Snapchat = () => {
  return (
    <PortfolioPDP
      title="Snapchat"
      description={
        <p className="mb-10">
          As a full stack engineer at Snapchat, I had the opportunity to contribute to various web products, including
          Snap's Web Messenger and Web Map. In my role, I actively collaborated on both the frontend and backend aspects
          of these applications. On the frontend, I leveraged React to enhance the user experience and design intuitive
          interfaces. Simultaneously, I delved into the backend by constructing robust APIs using Go and GRPC, ensuring
          seamless data exchange and efficient communication between different components of the system.
        </p>
      }
      image="/snapchat_banner.jpeg"
      duration="April 2021 - September 2022"
      role="Full Stack Software Engineer"
      technologies="React, TypeScript, HTML, CSS, Go, gRPC, Protocol Buffers, AWS, Docker, Kubernetes"
    />
  );
};

export default Snapchat;

import React from "react";

const Footer = () => {
  return (
    <div className="flex max-w-[960px] justify-between pt-16 border-t">
      <div>
        <h3 className="mb-2 uppercase">Contact</h3>
        <p>athomas.software@gmail.com</p>
      </div>
      <div>
        <h3 className="mb-2 uppercase">Résumé</h3>
        <a href="/resume.pdf" target="_blank" className="block hover:text-rausch">
          View PDF
        </a>
      </div>
      <div>
        <h3 className="mb-2 uppercase">Social</h3>
        <a href="https://www.linkedin.com/in/andrethomas5" target="_blank" className="block hover:text-rausch">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/athomas.nyc" target="_blank" className="block hover:text-rausch">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-carbon text-brightGray font-semibold flex items-center justify-center h-full ">
      <div>
        <h1 className="text-xs ">
          © {new Date().getFullYear()} Obaid Khan. All rights reserved. |
          Designed & built with passion.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;

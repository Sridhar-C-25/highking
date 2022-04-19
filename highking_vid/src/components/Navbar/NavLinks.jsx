import React from "react";

const NavLinks = () => {
  const Links = [
    {
      name: "Location",
      link: "/",
    },
    {
      name: "Blogs",
      link: "/",
    },
    {
      name: "Testimoials",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];
  return (
    <>
      {Links.map((link, i) => (
        <li key={i} className="font-semibold hover:text-primary">
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;

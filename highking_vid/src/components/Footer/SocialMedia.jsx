import React from "react";
import fb from "../../assets/f.png";
import tw from "../../assets/t.png";
import ig from "../../assets/i.png";
const SocialMedia = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      <img
        src={fb}
        className="h-8 cursor-pointer hover:scale-110 duration-300"
        alt="fb"
      />
      <img
        src={tw}
        className="h-8 cursor-pointer hover:scale-110 duration-300"
        alt="tw"
      />
      <img
        src={ig}
        className="h-8 cursor-pointer hover:scale-110 duration-300"
        alt="ig"
      />
    </div>
  );
};

export default SocialMedia;

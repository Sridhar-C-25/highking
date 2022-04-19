import React from "react";
import mail from "../../assets/mail.png";
import ButtonFill from "../ButtonFill";
const NewsLetter = () => {
  return (
    <div className="text-center pb-9">
      <h1 className="text-2xl font-semibold md:w-1/2 md:mx-auto leading-normal">
        Subscribe to Our Newsletter For Weekly Article Update.
      </h1>
      <p className="md:w-1/2 md:mx-auto pt-5 text-sm text-gray-600 leading-loose">
        We have hiking-related blog so we can share our thought and rutinity in
        our blog that updated weekly. We will not spam you, we promise.
      </p>
      <div className="flex flex-wrap justify-center md:w-2/4 md:mx-auto my-6 gap-2 items-center">
        <div className="flex-1 flex rounded-full items-center gap-2 px-5 md:w-2/5 md:mx-auto justify-center border border-primary my-4">
          <img src={mail} alt="mail" className="h-5" />
          <input
            type="email"
            placeholder="Enter Your e-mail address"
            className="bg-transparent flex-1 outline-none text-sm py-3 placeholder-primary"
          />
        </div>
        <div>
          <ButtonFill>Subscribe</ButtonFill>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

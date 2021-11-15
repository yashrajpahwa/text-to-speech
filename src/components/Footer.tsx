import React, { FC } from "react";

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <>
      <div className="w-full bottom-0 absolute text-center px-2 py-1 bg-[#161b22] text-white">
        Made by Yashraj Pahwa. All code can be found on Github.
      </div>
    </>
  );
};

export default Footer;

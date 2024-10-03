import React from "react";

const Footer = () => {
  return (
    <>
      {/* footer container */}
      <div className="fixed bottom-0 w-full mt-10 flex flex-col items-center">
        {/* footer */}
        <div className="footer w-full h-10 bg-slate-900">
          <div className="w-full text-center mt-2">
            <p className="capitalize text-gray-200 cursor-pointer">
              ✨ Made with ❤️ by Ayush Sharma ✨
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

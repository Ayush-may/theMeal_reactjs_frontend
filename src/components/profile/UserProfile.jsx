import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [name, setName] = useState(() => {
    return localStorage.getItem("themeal_username");
  });

  return (
    <>
      <div className="w-full h-auto pb-28 max-sm:pb-14 grid-rows-1 grid-cols-[minmax(300px,1280px)] grid place-content-center">
        <div className="mt-28 flex flex-col items-center">
          <div className="sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] rounded-full text-black border-2 border-slate-800 shadow-md overflow-hidden">
            <img
              className="w-full h-full "
              src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${name}`}
              alt="profile"
            />
          </div>
          <h4 className="font-light text-4xl text-center mt-5 uppercase">
            {name}
          </h4>

          {/* This is other options */}
          <div className="w-full mt-5 flex flex-col flex-wrap justify-center self-start gap-5 max-sm:gap-1">
            <Link
              to={"/themeal/order"}
              className="px-10 py-7  flex items-center rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div>
                <span className="block text-4xl max-sm:text-3xl mb-2">
                  Your Order
                </span>
                <span className="text-md max-sm:text-sm font-light text-gray-700">
                  your order , past orders , current orders....
                </span>
              </div>
              <span className="ms-auto">
                <IoMdArrowDropright size={"2em"} />
              </span>
            </Link>
            <Link
              to={"/themeal/cart"}
              className="px-10 py-7  flex items-center rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div>
                <span className="block text-4xl max-sm:text-3xl mb-2">
                  Cart
                </span>
                <span className="text-md max-sm:text-sm font-light text-gray-700">
                  Cart..
                </span>
              </div>
              <span className="ms-auto">
                <IoMdArrowDropright size={"2em"} />
              </span>
            </Link>
            <Link
              to={"wishlist"}
              className="px-10 py-7  flex items-center rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div>
                <span className="block text-4xl max-sm:text-3xl mb-2">
                  Wishlist
                </span>
                <span className="text-md max-sm:text-sm font-light text-gray-700">
                  fav foods that you have liked...
                </span>
              </div>
              <span className="ms-auto">
                <IoMdArrowDropright size={"2em"} />
              </span>
            </Link>
            <Link
              to={"myreview"}
              className="px-10 py-7  flex items-center rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div>
                <span className="block text-4xl max-sm:text-3xl mb-2">
                  My reviews
                </span>
                <span className="text-md max-sm:text-sm font-light text-gray-700">
                  reviews , comments..
                </span>
              </div>
              <span className="ms-auto">
                <IoMdArrowDropright size={"2em"} />
              </span>
            </Link>
            <Link
              to={"#"}
              className="px-10 py-7  flex items-center rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div>
                <span className="block text-4xl max-sm:text-3xl mb-2">
                  Shipping Address
                </span>
                <span className="text-md max-sm:text-sm font-light text-gray-700">
                  temporary address , permament address...
                </span>
              </div>
              <span className="ms-auto">
                <IoMdArrowDropright size={"2em"} />
              </span>
            </Link>
            <Link className="px-10 py-7  flex items-center rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
              <div>
                <span className="block text-4xl max-sm:text-3xl mb-2">
                  Payments
                </span>
                <span className="text-md max-sm:text-sm font-light text-gray-700">
                  payment methods , UPI , credit card, depit card...
                </span>
              </div>
              <span className="ms-auto">
                <IoMdArrowDropright size={"2em"} />
              </span>
            </Link>
            <Link
              to={"#"}
              className="px-10 py-7  flex items-center rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div>
                <span className="block text-4xl max-sm:text-3xl mb-2">
                  Setting
                </span>
                <span className="text-md max-sm:text-sm font-light text-gray-700">
                  Password, Notificatiosn..
                </span>
              </div>
              <span className="ms-auto">
                <IoMdArrowDropright size={"2em"} />
              </span>
            </Link>
            <div className="px-10 py-7  flex items-center rounded-xl hover:bg-red-400 transition-colors cursor-pointer">
              <div>
                <span className="block text-4xl max-sm:text-3xl mb-2">
                  Log out
                </span>
                <span className="text-md max-sm:text-sm font-light text-gray-700">
                  Password, Notificatiosn..
                </span>
              </div>
              <span className="ms-auto">
                <IoMdArrowDropright size={"2em"} />
              </span>
            </div>
            {/* <p className="px-5 py-7 min-w-[300px] max-w-[400px] flex items-center rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div>
                <span className="block text-4xl mb-2">Shipping Address</span>
                <span className="text-md font-light text-gray-700">
                  temporary address , permament address...
                </span>
              </div>
              <span className="ms-auto">
                <IoMdArrowDropright size={"2em"} />
              </span>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;

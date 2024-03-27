import React from "react";
//Srcs
// import 

const WelomePage = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          ពិធីអាពាពិពាហ៍
        </h2>
        {/* <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"> */}
        <img
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="../../Assets/bride-and-groom.png"
          alt="Bride"
          width="158"
          height="48"
        />
        {/* </div> */}
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          សូមគោរពអញ្ជើញ
        </h2>
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ឯកឧត្តម និងលោកជំទាវ
        </h2>
      </div>
    </div>
  );
};

export default WelomePage;

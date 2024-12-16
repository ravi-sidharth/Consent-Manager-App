import React from "react";

function Main() {
  return (
    <div className="w-[216px] h-[822px] top-[78px] left-[67px] border-r-[0.5px] px-[12.5px] py-[24px] text-[#FAFAFA] border-[#050552] shadow">
      <div className="pb-[20px]">
        <h1 className="w-[191.5px] h-[24px] pb-[20px] font-[500px] text-[20px] leading-[24.2px] text-[#050552]">
          Consent Manager
        </h1>
      </div>
      <div className="flex items-center w-[191.5px] h-[36px] border-[1px] p-[12.5px] text-[#554EF1] bg-[#FAFAFA] gap-[4px]">
        <img className="w-[20px] h-[20px]" src="./demoicon.png" alt="" />
        <span>Demo</span>
      </div>
      <div className="flex justify-between w-[191.5px] h-[36px] p-[12.5px]">
        <div className="flex gap-[4px]">
          <img  className ="w-[20px] h-[20px]" src="./settingicon.png" alt="" />
          <span className="text-black">Configurations</span>
        </div>
        <div className="hidden w-[20px] h-[20px] border-2"></div>
      </div>
      <div className="flex justify-between w-[191.5px] h-[36px] p-[12.5px]">
        <div className="flex gap-[4px]">
          <img  className ="w-[20px] h-[20px]" src="./searchicon.png" alt="" />
          <span className="text-black">Search</span>
        </div>
        <div  className="hidden w-[20px] h-[20px] border-2"></div>
      </div>
    </div>
  );
}

export default Main;

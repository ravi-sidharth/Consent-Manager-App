import React from "react";

function Header() {
  return (
    <div className="w-[68px] h-[822px] top-[78px] flex flex-col py-5 gap-2.5 bg-[#000342]">
        <div className="w-[100%] h-[54px] flex justify-center ">
          <img className="w-12 h-12" src="./logo.png" alt="" />
        </div>

        <div className="w-[66px] h-[54px ] flex flex-col place-items-center">
          <img className="w-[24px] h-[24px]" src="./home.png" alt="" />
          <span className="w-[29px] h-[12px] font-[500] text-[10px] leading-[12.1px] text-[#B2B3CA]">
            Home
          </span>
        </div>
        <div className="w-[66px] h-[46px] flex flex-col place-items-center ">
          <img
            className="w-[32px] h-[32px]"
            src="./application.png"
            alt=""
          />
          <span className="w-[60px] h-[12px] font-[500] text-[10px] leading-[12.1px] text-[#D9D9DD]">
            Applications
          </span>
        </div>

        <div className="w-[66px] h-[46px] flex flex-col place-items-center gap-[2px] ">
          <img
            className="w-[32px] h-[32px]"
            src="./anlaytics.png"
            alt=""
          />
          <span className="w-[44px] h-[12px] font-[500] text-[10px] leading-[12.1px] text-[#D9D9DD]">
            Anlaytics
          </span>
        </div>
        <div className="w-[66px] h-[46px] flex flex-col place-items-center gap-[2px]  ">
          <img
            className="w-[32px] h-[32px]"
            src="./workflow.png"
            alt=""
          />
          <span className="w-[51px] h-[12px] font-[500] text-[10px] leading-[12.1px] text-[#D9D9DD]">
            Workflows
          </span>
        </div>
        <div className="w-[66px] h-[46px] flex flex-col place-items-center gap-[2px]  ">
          <img
            className="w-[32px] h-[32px]"
            src="./devhub.png"
            alt=""
          />
          <span className="w-[41px] h-[12px] font-[500] text-[10px] leading-[12.1px] text-[#D9D9DD]">
            Dev Hub
          </span>
        </div>

        <div className="w-[66px] h-[46px] flex flex-col place-items-center  ">
          <img
            className="w-[32px] h-[32px]"
            src="./account.png"
            alt=""
          />
          <span className="w-[40px] h-[12px] font-[500] text-[10px] leading-[12.1px] text-[#D9D9DD]">
            Account
          </span>
        </div>

        <div className="w-[66px] h-[58px] flex flex-col place-items-center">
          <img
            className="w-[32px] h-[32px]"
            src="./consentmanager.png"
            alt=""
          />
          <span className="w-[66px] h-[24px] font-[500] text-[10px] text-center text-[#D9D9DD]">
            Consent Manager
          </span>
        </div>
      </div>
  );
}

export default Header;


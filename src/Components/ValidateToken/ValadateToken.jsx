import React from "react";

function ValadateToken() {
  return (
    <div className="flex flex-col items-center flex-1 gap-[40px]">
  <div className="flex items-center justify-center relative w-[567px] h-[140px] top-[40px] gap-[20px] shadow-lg">
    <div className="flex flex-col w-[503px] h-[92px] gap-[20px]">
      <div className="flex items-center gap-[56px] w-[100%] h-[36px]">
        <div className="w-[39px] h-[21px] text-[#05055299] font-[500] text-[12px] leading-[21px] tracking-[-0.2%]">
          Token
        </div>
        <div className="w-[403px] h-[36px] rounded-[6px] border-[1px] px-[12px] py-[5.5px] gap-[12px] bg-white border-[#D9DBBB]">
          Token Value
        </div>
      </div>
      <button className="flex justify-center items-center w-[503px] h-[36px] min-w-[64px] rounded-[6px] px-[16px] py-[11.5px] bg-[#554EF1] text-white font-[500] text-[14px] leading-[21px] tracking-[-0.2%]">
        Validate Token
      </button>
    </div>
  </div>
  <div className="relative flex flex-col gap-[36px] w-[567px] h-[605px] p-[32px] overflow-y-scroll shadow-2xl">
    <div className="flex justify-between w-[439px] h-[32px]">
        <div>Consent Status</div>
        <button> Accepted</button>
    </div>
    <div className="flex flex-col w-[439px] h-[381px] gap-[20px]">
        <div className="w-[108px] h-[21px] ">Consent Details</div>
    </div>
    <div className=""></div>
    <div className=""></div>
    <div className=""></div>
    <div className=""></div>
    <div className=""></div>
  </div>
</div>

  );
}

export default ValadateToken;

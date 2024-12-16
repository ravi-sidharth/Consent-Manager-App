import React from "react";

function ConsentScreen() {
  return (
    <div className="flex flex-1 absolute left-[283px] w-[1157px] h-[822px]  border-black border-4">
      <div className="flex flex-col w-[567px] h-[696px] absolute top-[64px] left-[295px] gap-[24px] shadow-2xl">
        <div className="flex w-[100%] h-[96px] rouned-r-[8px] border-b-[1px] px-[32px] py-[24px] left-[32px] gap-[20px]">
          <div className="flex">
            <img
              className="w-[48px] h-[48px] rounded-[75px] z-10"
              src="./angeloneicon.png"
              alt=""
            />
            <img
              className="w-[48px] h-[48px] rounded-[75px] ml-[-6px]"
              src="./angeloneicon.png"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <span className="w-[163px] h-[21px] font-[600] text-[16px] leading-[21px] tracking-[-0.2px] text-[#050552] text-opacity-80">
              Johndoe@gmail.com
            </span>
            <span className="w-[111px] h-[21px] font-[400] text-[14px] leading-[21px] tracking-[-0.2px] text-[#050552] text-opacity-60">
              Policy Version
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[100%] h-[409px] px-[32px] py-[24px] gap-[33px] border-black border-4">
          <div className="flex flex-col border-black-500 border-4 w-[495px] h-[210px] gap-[36px]">
            <div className="flex flex-col w-[495px] h-[87px] gap-[12px]">
              <div className="w-[487px] h-[21px] font-[500] text-[16px] leading-[21px] tracking-[-0.2%]">
                The flowing details will be collected from you by XYZ_name
              </div>
              <div className="w-[491px] h-[21px] flex gap-[10px]">
                <input
                  className="w-[16px] h-[16px] text-white"
                  type="checkbox"
                  name=""
                  id=""
                  checked
                />
                <span className="text-[#050552] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-opacity-60">
                  Facial scan
                </span>
              </div>

              <div className="w-[491px] h-[21px] flex gap-[10px]">
                <input
                  className="w-[16px] h-[16px] text-white"
                  type="checkbox"
                  name=""
                  id=""
                  checked
                />
                <span className="text-[#050552] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-opacity-60">
                  Location access
                </span>
              </div>
            </div>
            <div className="flex flex-col w-[495px] h-[87px] gap-[12px] ">
              <div className="w-[100%] h-[21px] text-[#050552CC] font-[500] text-[16px] leading-[21px] tracking-[-0.2%] text-opacity-80">
                Purpose
              </div>
              <div className="w-[100%] h-[21px] text-[#050552] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-opacity-60">
                Fraud prevention and compliance checks
              </div>
              <div className="w-[100%] h-[21px] text-[#050552] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-opacity-60">
                Fraud prevention and compliance checks
              </div>
            </div>
          </div>
        </div>
        <div className="w-567px h-[146px] border-t-[1px] px-[32px] py-[24px] border-[1px] border-[#0505521A] border-opacity-[10%] ">
          <div className="w-[503px] h-[42px] flex flex-col gap-[12px] ">
            <div className="w-[100%] h-[42px] font-[Roboto] font-[400] text-[14px] leading-[21px] tracking-[-0.2%] text-[#414141]">
              By clicking Allow, you allow the app to use your information in
              accordance to their respective{" "}
              <span className="text-[#554EF1]">
                <a href="">terms of serve</a>
              </span>{" "}
              and{" "}
              <span className="text-[#554EF1]">
                <a href="">privacy policies</a>
              </span>
              .
            </div>
            <div className="flex gap-[12px] ">
              <button className=" flex justify-center items-center w-[245px] h-[36px] min-w-[64px] rounded-[6px] border-[1px] px-[16px] py-[11.5px] bg-white">
                Deny
              </button>
              <button className=" flex justify-center items-center w-[245px] h-[36px] min-w-[64px] rounded-[6px] px-[16px] py-[11.5px] bg-[#554EF1] text-white hover:*:">
                Allow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsentScreen;

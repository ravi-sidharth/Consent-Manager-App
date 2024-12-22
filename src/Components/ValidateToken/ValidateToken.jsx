import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function ValidateToken() {
  const [hide, setHide] = useState(false)
  return (
    <div className="flex flex-col items-center flex-1 gap-[40px]">
      <div className="flex items-center justify-center relative w-[503px] h-[140px] top-[40px] gap-[20px] shadow-lg">
        <div onClick={()=>setHide(true)} className="flex flex-col w-[439px] h-[92px] gap-[20px]">
          <div className="flex items-center gap-[56px] w-[100%] h-[36px]">
            <div className="w-[39px] h-[21px] text-[#05055299] font-[500] text-[12px] leading-[21px] tracking-[-0.2%]">
              Token
            </div>
            <div className="w-[403px] h-[36px] rounded-[6px] border-[1px] px-[12px] py-[5.5px] gap-[12px] bg-white border-[#D9DBBB]">
              Token Value
            </div>
          </div>
          <button className="flex justify-center items-center h-[36px] min-w-[64px] rounded-[6px] px-[16px] py-[11.5px] bg-[#554EF1] text-white font-[500] text-[14px] leading-[21px] tracking-[-0.2%]">
            Validate Token
          </button>
        </div>
      </div>
      <div className={`${hide?"block": "hidden"} relative flex flex-col gap-[36px] w-[503px] h-[605px] p-[32px] shadow-2xl overflow-y-scroll overflow-x-hidden break-words`}>
        <div className="flex justify-between w-[439px] h-[32px]">
          <div>Consent Status</div>
          <button className="flex justify-center items-center w-[102px] h-[32px] rounded-[6px] border-[1px] py-[6px] pr-[12px] pl-[8px] gap-[10px] bg-[#F0FAF5] text-[#006644] border-[#006644]">
            <span className="text-[8px]">✔️</span>
            <span>Accepted</span>
            </button>
        </div>
        <div className="flex flex-col w-[439px] h-[400px] gap-[20px]">
          <div className="flex justify-center items-center w-[108px] h-[21px] font-[600] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
            Consent Details
          </div>
          <div className="flex justify-between items-center w-[100%] h-[42px] ">
            <div className="w-[190px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
              Device ID
            </div>
            <div className="w-[249px] h-[100%] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
              b9f8e2d4-9c3a-4571-ae84-3c9df20297a1
            </div>
          </div>
          <div className="flex justify-between w-[439px] h-[63px]">
            <div className="w-[190px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
              hashedUserId
            </div>
            <div className="w-[249px] h-[63px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
              e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b8555991b7852b855
            </div>
          </div>
          <div className="flex justify-between items-center w-[100%] h-[21px] ">
            <div className="w-[190px] h-[100%] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
              timestamp
            </div>
            <div className="w-[249px] h-[100%] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
              2024-06-12T14:35:22Z
            </div>
          </div>
          <div className="flex justify-between items-center w-[100%] h-[21px] ">
            <div className="w-[190px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
              ipAddress
            </div>
            <div className="w-[249px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
              192.168.1.15
            </div>
          </div>
          <div className="flex justify-between items-center w-[100%] h-[21px] ">
            <div className="w-[190px] h-[100%] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
              Scope
            </div>
            <div className="w-[249px] h-[100%] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
              facial scan, Location Access
            </div>
          </div>
          <div className="flex justify-between w-[100%] h-[92px]">
            <div className="w-[190px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
              Purpose
            </div>
            <div className="flex flex-col w-[249px] h-[92px] gap-[8px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
              <div>User onboarding and identity verification</div>
              <div>Fraud prevention and compliance checks</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[439px] h-[173px] gap-[20px]">
          <div className="flex flex-justify items-center w-[47px] h-[21px] font-[600] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
            Tenure
          </div>
          <div className="flex flex-col w-[439px] h-[132px] gap-[16px]">
            <div className="flex w-[100%] h-[21px] justify-between">
              <div className="w-[190px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
                Scope
              </div>
              <div className="w-[249px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
                Chrome
              </div>
            </div>
            <div className="flex w-[100%] h-[21px] justify-between">
              <div className="w-[190px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
                browserVersion
              </div>
              <div className="w-[249px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
                124.0.6367.119
              </div>
            </div>
            <div className="flex w-[100%] h-[21px] justify-between">
              <div className="w-[190px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
                operatingSystem
              </div>
              <div className="w-[249px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
                Windows 11
              </div>
            </div>
            <div className="flex w-[100%] h-[21px] justify-between">
              <div className="w-[190px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
                deviceType
              </div>
              <div className="w-[249px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
                Desktop
              </div>
            </div>
            </div>
            </div>
        
          <div className="flex flex-col w-[439px] h-[99px] gap-[20px]">
            <div className="flex flex-justify items-center w-[47px] h-[21px] font-[600] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
              Tenure
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="flex w-[100%] h-[21px] justify-between">
                <div className="w-[190px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
                  humanReadable
                </div>
                <div className="w-[249px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
                  2025-06-12T14:35:22Z
                </div>
              </div>
              <div className="flex w-[100%] h-[21px] justify-between">
                <div className="w-[190px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
                  machineTimestamp
                </div>
                <div className="w-[249px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
                  1755022522
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[439px] h-[120px] gap-[20px]">
            <div className="flex flex-justify items-center w-[84px] h-[21px] font-[600] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
              SDK Version
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="flex w-[100%] h-[21px] justify-between">
                <div className="w-[190px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
                  Version
                </div>
                <div className="w-[249px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
                  v1.3.2
                </div>
              </div>
              <div className="flex w-[100%] h-[42px] justify-between">
                <div className="w-[190px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
                  machineTimestamp
                </div>
                <div className="w-[249px] h-[42px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
                  https://example.com/sdk/releases/v1.3.2
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[439px] h-[136px] gap-[20px]">
            <div className="flex flex-justify items-center w-[95px] h-[21px] font-[600] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
              Privacy Policy
            </div>
            <div className="flex flex-col w-[100%] h-[95px] gap-[16px]">
              <div className="flex w-[100%] h-[21px] justify-between">
                <div className="w-[190px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
                  privacyPolicy
                </div>
                <div className="w-[249px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
                  https://example.com/privacy/v1.3.2
                </div>
              </div>
              <div className="flex w-[100%] h-[21px] justify-between">
                <div className="w-[190px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
                  machineTimestamp
                </div>
                <div className="w-[249px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
                  accept
                </div>
              </div>
              <div className="flex w-[100%] h-[21px] justify-between">
                <div className="w-[190px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-60">
                  actionTimestamp
                </div>
                <div className="w-[249px] h-[21px] font-[500] text-[14px] leading-[21px] tracking-[-0.2%] text-[#050552] text-opacity-80">
                  2024-06-12T14:35:22Z
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ValidateToken;

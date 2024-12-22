import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

// import { ConsentSDK } from "../../Utils/ConsentSDK";


function Body() {
  // const sdk = new ConsentSDK("<http://13.203.21.49:3000/v1>");
  // console.log(sdk);

  
  const [color, setColor] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    console.log(data);
 
    //  const response =await sdk.requestConsent(
    //   data.customerId,
    //   null,
    //   data.redirectUri,
    //   data.policyVersion,
    //   null, 
    //   null,   
    //   null,    
    //  data.scope, 
    // ) 
    // console.log(response)

    setColor((prev) => !prev);
    navigate("/consent");
    reset();
  };

  return (
    <div className="relative top-[120px] left-[294px] flex flex-col w-[567px] h-[438px]  gap-[24px]">
      <h1 className="text-center font-[500] text-[20px] leading-[30px] tracking-[-2%] opacity-70">
        Enter Consent Details
      </h1>

      <div className="w-[100%] h-[384px] border-2 flex justify-center shadow-2xl pt-[20px] border-none">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col w-[503px] h-[320px] gap-[24px] border-[#E6E6E6] "
          action=""
        >
          <div className="flex justify-between items-center opacity-60">
            <label htmlFor="Customer Id">Customer ID</label>
            <input
              {...register("customerId")}
              className="h-[36px] w-[317px] border-[1px] border-[#838383] rounded"
              id="Customer Id"
              type="text"
            />
          </div>

          <div className="flex justify-between items-center opacity-60">
            <label htmlFor="Redirect URI">Redirect URI</label>
            <input
              {...register("redirectUri")}
              className="h-[36px]  w-[317px] border-[1px] border-[#838383] rounded"
              id="Redirect URI"
              type="text"
            />
          </div>

          <div className="flex justify-between items-center opacity-60">
            <label htmlFor="Policy Version">Policy Version </label>
            <input
              {...register("policyVersion")}
              className="h-[36px]  w-[317px] border-[1px] border-[#838383] rounded"
              id="Policy Version"
              type="text"
            />
          </div>

          <div className="flex justify-between items-center opacity-60">
            <label htmlFor="Purpose">Purpose</label>
            <input
              {...register("purpose")}
              className="h-[36px] w-[317px] border-[1px] border-[#838383] rounded"
              id="Purpose"
              type="text"
            />
          </div>

          <div className="flex justify-between items-center opacity-60">
            <label htmlFor="Scope">Scope</label>
            <input
              {...register("scope")}
              className="h-[36px] w-[317px] border-[1px] border-[#838383] rounded"
              id="Scope"
              type="text"
            />
          </div>

          <div
            className={`flex justify-center items-center border-[1px] text-white border-[#838383] rounded ${
              color ? "bg-[#554EF1]" : "bg-[#554EF133]"
            } border-none`}
          >
            <button className="h-[36px] w-[100%]" type="submit">
              Request Consent
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Body;

"use client";

import CardLogo from "@/assets/img/card-logo.svg";
import Image from "next/image";
import "./style.css"
import { useEffect, useState, useCallback } from "react";
import { useMediaQuery } from "react-responsive";

const HomeDesktop = () => {
  const isLargeScreen = useMediaQuery({
    query: "(min-width:750px)",
  });

  if (!isLargeScreen) {
    return null;
  }


  
  const EsqSection = () => {
    
    const [localCardHolderName, setLocalCardHolderName] = useState("");
    const [localCardNumber, setLocalCardNumber] = useState("");
    const [localCardDateMm, setLocalCardDateMm] = useState("");
    const [localCardDateYy, setLocalCardDateYy] = useState("");
    const [localCardCVC, setLocalCardCVC] = useState("");
    
    const formatCardNumber = (inputValue: string) => {
      const formattedValue = inputValue.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
      return formattedValue;
    };

    return (
      <div key="esqSection" className='bg-desktop h-screen bg-no-repeat relative overflow-hidden flex'>

        <div>
          <div className="bg-frontCard w-[448px] h-[246px] bg-no-repeat relative left-28 top-[150px]">
            <Image src={CardLogo} alt="logo Cartão" className="ml-10 absolute top-8"/>

            <p className="font-bold text-lighgray font-space text-[30px] absolute top-[140px] left-10 tracking-wider paragrafoNumberCard">{localCardNumber ? localCardNumber : "0000 0000 0000 0000" }</p>
            <p className="uppercase font-bold text-lighgray font-space text-[15px] absolute top-[210px] left-[40px] paragrafoNameCard">{localCardHolderName ? localCardHolderName : "Miguel Arcanjo"}</p>
            <p className="font-bold text-lighgray font-space text-[15px] absolute top-[210px] left-[370px]">
              {localCardDateMm ? localCardDateMm : "00"}/{localCardDateYy ? localCardDateYy : "00"}
            </p>

          </div>

          <div className="bg-backCard w-screen h-screen bg-no-repeat relative left-52 top-[170px] z-0">
            <p className="ml-[350px] absolute top-[110px]  font-space font-bold text-lighgray">
              {localCardCVC ? localCardCVC : "000"}
            </p>
          </div>
        </div>


        <div>
          <form className="flex flex-col gap-5 relative right-[600px] top-1/3">
            <div className="flex flex-col">
              <label className="font-space text-darkviolet font-bold text-[13px]">CARDHOLDER NAME</label>
              <input 
                type="text" 
                id="nameCard" 
                placeholder="e.g Miguel Arcanjo" 
                className={`font-space border-darkgray border-solid border-[1px] rounded-md outline-0 p-1`}
                value={localCardHolderName}
                onChange={(e) => {
                  setLocalCardHolderName(e.target.value)
                }}
                
                />
                
            </div>

            <div className="flex flex-col">
              <label className="font-space text-darkviolet font-bold text-[13px]">CARD NUMBER</label>
              <input 
                type="text" 
                id="numberCard"
                placeholder="e.g 1234 5678 9123 0000"
                className={`font-space border-darkgray border-solid border-[1px] rounded-md outline-0 p-1`}
                value={localCardNumber}
                onChange={(e) => {
                  const formattedValue = formatCardNumber(e.target.value);
                  setLocalCardNumber(formattedValue);
                }}
                maxLength={19}
                 />
            </div>

            <div className="flex">
              <div>
                <label className="font-space text-darkviolet font-bold text-[13px]">EXP. DATE (MM/YY)</label>
                <div className="flex">
                  <input 
                    type="text" 
                    id="mm" 
                    placeholder="MM" 
                    className="font-space border-darkgray border-solid border-[1px] rounded-md outline-0 p-1 w-[50px] text-center mr-2" 
                    value={localCardDateMm}
                    onChange={(e) => {
                      setLocalCardDateMm(e.target.value)
                    }}
                    maxLength={2}
                    />

                  <input 
                    type="text" 
                    id="yy" 
                    placeholder="YY" 
                    className="font-space border-darkgray border-solid border-[1px] rounded-md outline-0 p-1 w-[50px] text-center"
                    value={localCardDateYy}
                    onChange={(e) => {
                      setLocalCardDateYy(e.target.value)
                    }}
                    maxLength={2}
                    />
                </div>
              </div>

              <div className="flex flex-col mt-[5px] ml-[20px] "> 
                <label className="font-space text-darkviolet font-bold text-[13px]">CVC</label>
                <div>
                  <input 
                    type="text" 
                    id="cvc"
                    placeholder="e.g 123"
                    className="font-space border-darkgray border-solid border-[1px] rounded-md outline-0 p-1 w-[70px] text-center"
                    value={localCardCVC}
                    onChange={(e) => {
                      setLocalCardCVC(e.target.value)
                    }} 
                    maxLength={3}/>
                </div>
              </div>
              
            </div>

            <button type="submit" className="bg-darkviolet text-white rounded-lg p-4">Confirm</button>

          </form>
        </div>
      </div>
    )
  }

  // const DirSection = () => {

  //   const [localCardHolderName, setLocalCardHolderName] = useState("");



  //   return (
  //     <div key="dirSection" className="mr-[300px] flex items-center">
        
  //     </div>
  //   )

  // }

  return (
    <main className="flex justify-around">
      <EsqSection/>
      {/* <DirSection/> */}
    </main>
  );
};

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <>
      {" "}
      <HomeDesktop />
    </>
  ) : null;
}
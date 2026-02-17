// import React from 'react'
// import kaaba from "../../../public/images/kaaba.png";
// export default function ScreenSplach() {
//       const [showSplash, setShowSplash] = useState(true);
//       const [visibleLetters, setVisibleLetters] = useState(0);
    
//     useEffect(() => {
//       if (!showSplash) return;
    
//       const interval = setInterval(() => {
//         setVisibleLetters((prev) => prev + 1);
//       }, 120); // سرعة ظهور الحروف
    
//       return () => clearInterval(interval);
//     }, [showSplash]);
    
//       useEffect(() => {
//         const timer = setTimeout(() => {
//           setShowSplash(false);
//         }, 6000); // مدة الـ splash 3 ثواني
//         return () => clearTimeout(timer);
//       }, []);
    
      
//  if (showSplash) {
//     return (
//       <div className="  flex flex-col items-center justify-center min-h-screen bg-[#FEF9F5] animate-fadeIn  z-20">
//       <img
//   src={kaaba}
//   alt="Kaaba"
//   className="w-64 md:w-96 lg:w-[400px] object-contain animate-softBounce -translate-y-10 md:-translate-y-18 "
// />

//  <div className=" w-64 h-64 flex items-center justify-center  -translate-y-10 md:-translate-y-36">

//   {/* النص العربي في المنتصف */}
//   <h1 className="absolute text-3xl text-gray-800 font-qahiri text-center z-10 ">
//     معتمر الشام
//   </h1>

//   {/* النص الإنجليزي الدائري */}
//   <div className="relative w-full h-full text-gray-700 font-Federant">
//    {"MutamerAlsham".split("").map((char, i, arr) => {
//   const angle = (360 / arr.length) * i;
//   const isVisible = i < visibleLetters;

//   return (
//     <span
//       key={i}
//       className={`absolute left-1/2 top-1/2 font-Federant font-bold
//         transition-all duration-500
//         ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}
//       `}
//       style={{
//         transform: `
//           rotate(${angle}deg)
//           translate(110px)
//           rotate(-${angle}deg)
//         `,
//         transformOrigin: "center",
//       }}
//     >
//       {char}
//     </span>
//   );
// })}
//   </div>

// </div>  </div>
//     );
//   }
// }
import { useState, useEffect } from "react";
import kaaba from "../../../public/images/kaaba.png";

export default function ScreenSplach({ onFinish }) {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prev) => prev + 1);
    }, 120);

    const timer = setTimeout(() => {
      onFinish(); // 🔥 خبر App إنو خلصنا
    }, 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FEF9F5]">

      <img
        src={kaaba}
        alt="Kaaba"
        className="w-64 object-contain animate-softBounce"
      />

      <div className="w-64 h-64 flex items-center justify-center">

        <h1 className="absolute text-3xl font-qahiri">
          معتمر الشام
        </h1>

        <div className="relative w-full h-full font-Federant">
          {"MutamerAlsham".split("").map((char, i, arr) => {
            const angle = (360 / arr.length) * i;
            const isVisible = i < visibleLetters;

            return (
              <span
                key={i}
                className={`absolute left-1/2 top-1/2 transition-all duration-500
                  ${isVisible ? "opacity-100" : "opacity-0"}
                `}
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translate(110px)
                    rotate(-${angle}deg)
                  `,
                }}
              >
                {char}
              </span>
            );
          })}
        </div>

      </div>
    </div>
  );
}
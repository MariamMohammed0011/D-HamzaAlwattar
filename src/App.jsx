import { useState, useEffect } from "react";
import kaaba from "../public/images/kaaba.png";
// import logo from "../../../public/images/8f811422-a2d4-491a-abbc-fe7e22c270c1.png"; // شعارك

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
const [visibleLetters, setVisibleLetters] = useState(0);

useEffect(() => {
  if (!showSplash) return;

  const interval = setInterval(() => {
    setVisibleLetters((prev) => prev + 1);
  }, 120); // سرعة ظهور الحروف

  return () => clearInterval(interval);
}, [showSplash]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000); // مدة الـ splash 3 ثواني
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="  flex flex-col items-center justify-center min-h-screen bg-[#FEF9F5] animate-fadeIn  z-20">
      <img
  src={kaaba}
  alt="Kaaba"
  className="w-64 md:w-96 lg:w-[400px] object-contain animate-softBounce -translate-y-10 md:-translate-y-18 "
/>

 <div className=" w-64 h-64 flex items-center justify-center  -translate-y-10 md:-translate-y-36">

  {/* النص العربي في المنتصف */}
  <h1 className="absolute text-3xl text-gray-800 font-qahiri text-center z-10 ">
    معتمر الشام
  </h1>

  {/* النص الإنجليزي الدائري */}
  <div className="relative w-full h-full text-gray-700 font-Federant">
   {"MutamerAlsham".split("").map((char, i, arr) => {
  const angle = (360 / arr.length) * i;
  const isVisible = i < visibleLetters;

  return (
    <span
      key={i}
      className={`absolute left-1/2 top-1/2 font-Federant font-bold
        transition-all duration-500
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}
      `}
      style={{
        transform: `
          rotate(${angle}deg)
          translate(110px)
          rotate(-${angle}deg)
        `,
        transformOrigin: "center",
      }}
    >
      {char}
    </span>
  );
})}
  </div>

</div>  </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">

      {/* الصورة مع Animation */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-white/30 backdrop-blur-md">
        <img
  src={kaaba}
  alt="Kaaba"
  className="w-64 md:w-96 lg:w-[420px] object-contain animate-float"
/>

      </div>

      {/* الفورم */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6">
        <div className="bg-white/95 backdrop-blur-md p-10 md:p-12 rounded-3xl shadow-2xl w-full max-w-md animate-slideUp">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
            تسجيل الدخول
          </h1>

          <div className="space-y-5">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
            <input
              type="password"
              placeholder="كلمة المرور"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
            <button className="w-full bg-orange-400 text-white p-3 rounded-xl hover:bg-orange-500 hover:scale-105 transition duration-300 shadow-lg">
              دخول
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

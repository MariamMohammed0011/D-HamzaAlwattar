import kaaba from "../../../public/images/kaaba.png";
import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true); // toggle بين Login و Register

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">

      {/* الصورة مع Animation */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-white/30 backdrop-blur-md">
        <img
          src={kaaba}
          alt="Kaaba"
          className="w-[420px] object-contain animate-float"
        />
      </div>

      {/* الفورم */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6">
        <div className="bg-white/95 backdrop-blur-md p-10 md:p-12 rounded-3xl shadow-2xl w-full max-w-md animate-slideUp">

          {/* العنوان + toggle */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              {isLogin ? "تسجيل الدخول" : "إنشاء حساب"}
            </h1>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-orange-500 font-medium hover:underline transition"
            >
              {isLogin ? "إنشاء حساب" : "تسجيل الدخول"}
            </button>
          </div>

          <div className="space-y-5">
            {!isLogin && (
              <input
                type="text"
                placeholder="الاسم الكامل"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            )}

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

            {!isLogin && (
              <input
                type="password"
                placeholder="تأكيد كلمة المرور"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            )}

            <button className="w-full bg-orange-400 text-white p-3 rounded-xl hover:bg-orange-500 hover:scale-105 transition duration-300 shadow-lg">
              {isLogin ? "دخول" : "تسجيل"}
            </button>
          </div>

          {/* خيارات مساعدة */}
          {isLogin && (
            <div className="text-center mt-5">
              <a href="#" className="text-sm text-gray-500 hover:text-orange-400 transition">
                نسيت كلمة المرور؟
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

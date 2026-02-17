import { useState } from "react";
import kaaba from "../../../public/images/image.png"
export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#FEF9F5]"
      style={{
    backgroundImage: `url(${kaaba})`,
  }}
      dir="rtl"
    >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      {/* خلفية زخرفية خفيفة */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute w-72 h-72 bg-orange-200 rounded-full blur-3xl top-10 right-10" />
        <div className="absolute w-72 h-72 bg-amber-100 rounded-full blur-3xl bottom-10 left-10" />
      </div>

      {/* كارد تسجيل الدخول */}
      <div className="relative bg-[#FEF9F5] w-full max-w-md p-10 rounded-3xl rounded-t-full shadow-2xl animate-slideUp">

        {/* شعار بسيط */}
       {/* شعار بسيط */}
<div className="flex items-center justify-center gap-3 mb-8">

  <img
    src={kaaba}
    alt="logo"
    className="w-20 h-20 rounded-full object-cover top-[-15px] right-15 absolute border-2 border-[#CA905D] shadow-sm"
  />

  <div className="text-right">
    <h1 className="text-4xl font-[500]  text-[#CA905D] font-qahiri">
      معتمر الشام
    </h1>
   
  </div>

</div>

        {/* عنوان */}
        {/* <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
          {isLogin ? "تسجيل الدخول" : "إنشاء حساب جديد"}
        </h2> */}

        {/* الفورم */}
      <div className="space-y-4 flex flex-col justify-center">
  {!isLogin && (
    <input
      type="text"
      placeholder="الاسم الكامل"
      className="w-[70%] mx-auto p-3 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
    />
  )}

  <input
    type="email"
    placeholder="البريد الإلكتروني"
    className="w-[70%] mx-auto p-3 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
  />

  <input
    type="password"
    placeholder="كلمة المرور"
    className="w-[70%] mx-auto p-3 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
  />

  {!isLogin && (
    <input
      type="password"
      placeholder="تأكيد كلمة المرور"
      className="w-[70%] mx-auto p-3 border rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
    />
  )}

  <button className="w-[70%] mx-auto bg-[#CA905D] text-white p-3 rounded-xl font-medium hover:bg-orange-500 transition">
    {isLogin ? "دخول" : "تسجيل"}
  </button>
</div>

        {/* toggle */}
        <div className="text-center mt-6 text-sm">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#CA905D] hover:underline"
          >
            {isLogin
              ? "ما عندك حساب؟ إنشاء حساب"
              : "عندك حساب؟ تسجيل الدخول"}
          </button>
        </div>

      </div>
    </div>
  );
}
import kaaba from "../../public/images/kaaba.png";
import { TbHomeFilled } from "react-icons/tb";
import { RiQuoteText } from "react-icons/ri";
import { SiApachedolphinscheduler } from "react-icons/si";
import { colors } from "../theme/colors";
export default function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen p-6 flex flex-col gap-6 ">

      {/* الصورة */}
      <div className="flex justify-center ">
       <img
  src={kaaba}
  alt="Kaaba"
  className="w-[250px] h-[200px] scale-[2]  object-contain transition-transform duration-300 hover:scale-125 "
/>
      </div>

      <h1 className="text-sm font-bold text-right  "   style={{ color: colors.secondary }}> القائمة الرئيسية</h1>

      <nav className="flex flex-col gap-3">
       <button className="p-3  rounded-lg flex items-center gap-2" style={{ background: colors.circle }}>
 
            <TbHomeFilled className="w-5 h-5" />
          الواجهة الأساسية
        </button>
       <button className="p-3 hover:bg-gray-200 rounded-lg flex items-center gap-3">
 
            <RiQuoteText className="w-6 h-6 " style={{ color: colors.xxxxxx }} />
            <p className="text-xl">المكاتب</p>
          
        </button>
       <button className="p-3 hover:bg-gray-200 rounded-lg flex items-center gap-3">
  <SiApachedolphinscheduler className="w-6 h-6 " style={{ color: colors.xxxxxx }} />
  <p className="text-xl">الإحصائيات</p>
           
</button>

      </nav>
    </div>
  );
}
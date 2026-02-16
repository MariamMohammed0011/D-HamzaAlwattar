import kaaba from "../../public/images/kaaba.png";
import { TbHomeFilled } from "react-icons/tb";
import { RiQuoteText } from "react-icons/ri";
import { SiApachedolphinscheduler } from "react-icons/si";
import { colors } from "../theme/colors";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
export default function Sidebar() {
  const [active, setActive] = useState("home");
  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    { id: "home", label: "الواجهة الأساسية", icon: TbHomeFilled },
    { id: "offices", label: "المكاتب", icon: RiQuoteText },
    { id: "stats", label: "الإحصائيات", icon: SiApachedolphinscheduler },
  ];

  return (
    <motion.div
      animate={{ width: collapsed ? 90 : 260 }}
      transition={{ duration: 0.35 }}
      className="bg-white h-screen p-4 flex flex-col gap-6 shadow-xl relative overflow-hidden"
    >
      {/* Collapse Button */}
    <button
  onClick={() => {
    setCollapsed(!collapsed);
    console.log("collapsed:", !collapsed);
  }}
  className="absolute  top-4 left-4  px-2 py-1 rounded text-2xl  transition z-50"
  style={{ color: colors.secondary }}
>
  {collapsed ? <HiArrowLeftStartOnRectangle/> : <HiArrowRightEndOnRectangle/>}
</button>  

      <motion.div
        layout
        className="flex justify-center mt-6 "
      >
        <img
          src={kaaba}
          alt="Kaaba"
          className="w-[250px] h-[200px] scale-[2] object-contain transition-transform duration-300 hover:scale-110"
        />
      </motion.div>

      {!collapsed && (
        <h1
          className="text-sm font-bold text-right"
          style={{ color: colors.secondary }}
        >
          القائمة الرئيسية
        </h1>
      )}

      {/* Menu */}
      <nav className="flex flex-col gap-3 relative">

        {/* Sliding indicator */}
        <motion.div
          layoutId="active-pill"
          className="absolute inset-x-0 h-12 rounded-lg z-0"
          style={{ background: colors.circle }}
          animate={{
            top: menu.findIndex((m) => m.id === active) * 60,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => setActive(item.id)}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 p-3 rounded-lg flex items-center gap-3 hover:bg-gray-100 transition overflow-hidden"
            >
              {/* Ripple effect */}
              <motion.span
                className="absolute inset-0 rounded-lg opacity-0 bg-white"
                whileTap={{
                  opacity: 0.3,
                  scale: 1.5,
                }}
                transition={{ duration: 0.3 }}
              />

              <Icon
                className={`w-6 h-6 ${
                  isActive ? "text-black" : "text-gray-600"
                }`}
              />

              {!collapsed && (
                <span className="text-lg font-medium">
                  {item.label}
                </span>
              )}
            </motion.button>
          );
        })}
      </nav>
    </motion.div>
  );
}
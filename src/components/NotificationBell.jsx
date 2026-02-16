import { IoNotifications } from "react-icons/io5";

export default function NotificationBell() {
  return (
    <div className="relative w-fit">
      
      {/* الجرس */}
      <IoNotifications className="text-3xl cursor-pointer" />

      {/* دائرة الرقم */}
      <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        3
      </span>

    </div>
  );
}
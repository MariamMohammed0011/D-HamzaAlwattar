import NotificationBell from "../components/NotificationBell";
import Sidebar from "../components/SideBar";
import StatsCard from "../components/StatsCard";
import Table from "../components/Table";
import { colors } from "../theme/colors";
export default function Dashboard() {
  return (
    <div className="flex bg-[#FEF9F5] min-h-screen" dir="rtl">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="flex justify-end items-start mb-2 ">  <NotificationBell />
        </div>
        <div className="grid grid-cols-3 gap-8  p-4  rounded-xl bg-white shadow-lg ">
          <StatsCard
            title="تصفح المكاتب"
            value="+100"
             color={colors.cardOrange}
             display="عرض"
          />
          <StatsCard
            title="العروض الحالية"
            value="+3"
           color={colors.cardGreen}
           display="انشاء عرض "
          />
          <StatsCard
            title="المكاتب الموصى بها"
            value="+7"
            color={colors.cardOrange}
            display="عرض"
          />
        </div>

        <Table />
      </main>
    </div>
  );
}
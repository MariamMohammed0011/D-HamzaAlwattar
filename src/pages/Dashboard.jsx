import NotificationBell from "../components/NotificationBell";
import Sidebar from "../components/SideBar";
import StatsCard from "../components/StatsCard";
import Table from "../components/Table";
import { colors } from "../theme/colors";
export default function Dashboard() {
  return (
    <div className="flex bg-gray-50 min-h-screen" dir="rtl">
      <Sidebar />

      <main className="flex-1 p-8">
        {/* <NotificationBell/> */}
        <div className="grid grid-cols-3 gap-6  p-6  rounded-xl bg-white shadow-lg ">
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
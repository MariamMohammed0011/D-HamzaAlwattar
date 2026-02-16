import { BsPen } from "react-icons/bs";
export default function Table() {
  const data = [
    {
      id: 1,
      office: "الولاء",
      date: "2026/02/03",
      city: "المزة",
      phone: "09333333454",
      status: "active",
    },
    {
      id: 2,
      office: "الولاء",
      date: "2026/02/03",
      city: "المزة",
      phone: "09333333454",
      status: "inactive",
    },
    {
      id: 3,
      office: "الولاء",
      date: "2026/02/03",
      city: "المزة",
      phone: "09333333454",
      status: "inactive",
    },
  ];

  return (
    <div className="bg-white mt-6  rounded-4xl flex flex-col gap-0 ">
      {/* Tabs */}
      <div className="flex justify-start gap-5   p-4 text-sm font-medium bg-[#EBEBEB] rounded-t-4xl">
        
        <button className="bg-[#FEF9F5] text-[#CA905D] px-5 py-2  border-b-2 border-[#CA905D] rounded-t-md ">
          كل المكاتب (100)
        </button>
        <button className="bg-white text-[#85C6BA] px-5 py-2 rounded-t-md border-b-2">
          المفعلة (80)
        </button>
        <button className="bg-white text-[#CF7E8E] px-5 py-2 rounded-t-md border-b-2 ">
          الغير مفعلة (20)
        </button>
      </div>

      {/* Table */}
      <div className="bg-red  overflow-hidden  ">
        <table className="w-full text-right  ">
          <thead className="bg-[#F7F8FA] text-[#000] text-sm  border-none ">
            <tr >
              <th className="p-3">المكتب</th>
              <th className="p-3">تاريخ الطلب</th>
              <th className="p-3">الموقع</th>
              <th className="p-3">رقم الهاتف</th>
              <th className="p-3">الوثائق</th>
              <th className="p-3">الحالة</th>
            </tr>
          </thead>

          <tbody   >
            {data.map((row) => (
            <tr key={row.id}>
                <td className="p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#D9D9D9] rounded-full" />
                  {row.office}
                </td>
                <td className="p-4 text-[#767676]">{row.date}</td>
                <td className="p-4 text-[#767676]">{row.city}</td>
                <td className="p-4 text-[#767676]">{row.phone}</td>

                
                <td className="p-4">
                  <button className="bg-[#FEF7D5] text-[#9F9A63] w-20 py-1 rounded-lg border-2 border-[#C8EC13] text-sm flex justify-center shadow-xl font-bold">
  تصفح
</button>
                </td>

{/*                
                <td className="p-4">
  {row.status === "active" ? (
    <span className="bg-[#D6F2F1] text-[#639F97] w-20 py-1 rounded-lg text-sm flex justify-center border-2 border-[#639F97] shadow-xl font-bold">
      مفعل
    </span>
  ) : (
    <span className="bg-[#ECD5DA] text-[#CF7E8E] w-20 py-1 rounded-lg text-sm flex justify-center border-2 border-[#CF7E8E]  shadow-xl font-bold">
      غير مفعل
    </span>
  )}
</td> */}
<td className="p-4">
  {row.status === "active" ? (
    <div className="relative w-20">
      <span className="bg-[#D6F2F1] text-[#639F97] w-full py-1 rounded-lg text-sm flex justify-center border-2 border-[#639F97] shadow-xl font-bold">
        مفعل
      </span>

      <div className="absolute -bottom-3 -right-3 w-7 h-7 bg-[#D6F2F1] border-2 border-[#639F97] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition cursor-pointer">
        <BsPen size={12} className="text-[#639F97]" />
      </div>
    </div>
  ) : (
    <div className="relative w-20">
      <span className="bg-[#ECD5DA] text-[#CF7E8E] w-full py-1 rounded-lg text-sm flex justify-center border-2 border-[#CF7E8E] shadow-xl font-bold">
        غير مفعل
      </span>

      <div className="absolute -bottom-3 -right-3 w-7 h-7 bg-[#ECD5DA] border-2 border-[#CF7E8E] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition cursor-pointer">
        <BsPen size={12} className="text-[#CF7E8E]" />
      </div>
    </div>
  )}
</td>
                </tr>
             
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

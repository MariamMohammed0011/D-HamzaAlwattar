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
    <div className="bg-white mt-6 border border-red-500 rounded-4xl">
      {/* Tabs */}
      <div className="flex justify-start gap-5 mb-4  p-3 text-sm font-medium bg-[#EBEBEB] rounded-t-4xl">
        
        <button className="bg-[#FEF9F5] text-[#CA905D] px-4 py-2 rounded-lg">
          كل المكاتب (100)
        </button>
        <button className="bg-white text-[#85C6BA] px-4 py-2 rounded-lg">
          المفعلة (80)
        </button>
        <button className="bg-white text-[#CF7E8E] px-4 py-2 rounded-lg">
          الغير مفعلة (20)
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl overflow-hidden">
        <table className="w-full text-right">
          <thead className="bg-[#F7F8FA] text-gray-600 text-sm">
            <tr>
              <th className="p-4">المكتب</th>
              <th className="p-4">تاريخ الطلب</th>
              <th className="p-4">الموقع</th>
              <th className="p-4">رقم الهاتف</th>
              <th className="p-4">الوثائق</th>
              <th className="p-4">الحالة</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-t">
                <td className="p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full" />
                  {row.office}
                </td>
                <td className="p-4">{row.date}</td>
                <td className="p-4">{row.city}</td>
                <td className="p-4">{row.phone}</td>

                {/* Documents button */}
                <td className="p-4">
                  <button className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-lg border border-yellow-300">
                    تصفح
                  </button>
                </td>

                {/* Status */}
                <td className="p-4">
                  {row.status === "active" ? (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm">
                      مفعل
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm">
                      غير مفعل
                    </span>
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

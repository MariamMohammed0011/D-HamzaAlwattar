export default function StatsCard({ title, value, color, display }) {
  return (
    <div
      className="p-4 rounded-xl shadow-md flex flex-col justify-between h-40"
      style={{ backgroundColor: color }}
    >
      {/* العنوان + القيمة */}
      <div className="flex justify-between gap-5">
        <p className="text-lg font-medium line-clamp-2 w-2/3">
          {title}
        </p>

        <h2 className="text-3xl font-bold w-1/3 text-right">
          {value}
        </h2>
      </div>

      {/* الزر */}
      <button className="bg-white px-4 py-1 text-xs rounded-full shadow-md self-end">
        {display}
      </button>
    </div>
  );
}

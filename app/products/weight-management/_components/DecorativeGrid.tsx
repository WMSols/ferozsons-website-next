const tiles = [
  "bg-[#B23A9A]",
  "bg-[#E9E9EE]",
  "bg-[#2E6FB0]",
  "bg-[#E9E9EE]",
  "bg-[#E9E9EE]",
  "bg-[#B23A9A]",
  "bg-[#E9E9EE]",
  "bg-[#2E6FB0]",
];

export default function DecorativeGrid() {
  return (
    <div className="relative">
      <style>{`
        @keyframes floatDown {
          0% { transform: translateY(-15px); }
          100% { transform: translateY(15px); }
        }
        @keyframes floatUp {
          0% { transform: translateY(15px); }
          100% { transform: translateY(-15px); }
        }
        .animate-float-down {
          animation: floatDown 4s ease-in-out infinite alternate;
        }
        .animate-float-up {
          animation: floatUp 4s ease-in-out infinite alternate;
        }
      `}</style>

      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        {tiles.map((c, i) => {
          const isFirstColumn = i % 2 === 0;

          return (
            <div
              key={i}
              className={`h-[78px] w-[78px] rounded-2xl ${c} sm:h-[92px] sm:w-[92px] lg:h-[100px] lg:w-[100px] ${
                isFirstColumn ? "animate-float-down" : "animate-float-up"
              }`}
              aria-hidden
            />
          );
        })}
      </div>
    </div>
  );
}

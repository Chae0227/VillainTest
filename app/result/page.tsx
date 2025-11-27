"use client";
export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
import { results } from "../data/results";

export default function ResultPage() {
  const search = useSearchParams();
  const type = (search.get("type") || "000") as keyof typeof results;
  const name = search.get("name") || "당신";
  const data = results[type];

  const perc = {
    I: type[0] === "1" ? 75 : 25,
    E: type[1] === "1" ? 75 : 25,
    X: type[2] === "1" ? 75 : 25,
  };

  const themeStyles = {
    yellow: {
      bg: "from-[#fff7d9] to-[#fff0bd]",
      border: "border-[#e1c885]",
      accent: "text-[#c89c0a]",
      bar: "bg-[#e6c24b]",
    },
    mint: {
      bg: "from-[#d9fff7] to-[#bdfff0]",
      border: "border-[#85e1c8]",
      accent: "text-[#0aa88f]",
      bar: "bg-[#4bd8c2]",
    },
    purple: {
      bg: "from-[#ece6ff] to-[#ddd7ff]",
      border: "border-[#b1a5e6]",
      accent: "text-[#7260d6]",
      bar: "bg-[#9a8df7]",
    },
  } as const;

  const theme = themeStyles[data.theme];

  return (
    <main className="min-h-screen flex items-center justify-center p-6 
                     bg-gradient-to-b from-[#dee7ff] to-[#eef1ff]">
      <div
        className={`w-full max-w-md shadow-[4px_4px_0_#b0a6eb] rounded-[4px] border-2 px-6 py-6 text-center 
        bg-gradient-to-b ${theme.bg} ${theme.border}`}
      >
        <div className="text-3xl font-bold mb-4 select-none">
          {data.icon}
        </div>

        <h1 className="text-xs text-gray-700 mb-1">{name}님의 빌런 유형은</h1>
        <h2 className={`text-2xl font-extrabold mb-4 ${theme.accent}`}>
          {data.label}
        </h2>

        <div className="space-y-4 mb-6">
          {(["I", "E", "X"] as const).map((k) => (
            <div key={k} className="text-left text-sm">
              <div className="flex justify-between mb-1">
                <span className="font-semibold">
                  {k === "I" ? "I (주도성)" : ""}
                  {k === "E" ? "E (참여도)" : ""}
                  {k === "X" ? "X (표현방식)" : ""}
                </span>
                <span>{perc[k]}%</span>
              </div>

              <div className="w-full h-3 bg-white/70 rounded-[2px] border border-white/50">
                <div
                  className={`h-full ${theme.bar} rounded-none`}
                  style={{ width: `${perc[k]}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-700 mb-6">{data.desc}</p>

        <button
          onClick={() => (window.location.href = "/")}
          className="w-full py-3 bg-white/90 hover:bg-white border-2 border-gray-300 
                     rounded-[4px] shadow-[3px_3px_0_#b0a6eb] mb-2 font-semibold"
        >
          다시 테스트하기
        </button>
      </div>
    </main>
  );
}

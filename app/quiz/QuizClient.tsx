"use client";
export const dynamic = "force-dynamic";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { questions, Axis } from "../data/questions";

type Score = Record<Axis, number>;

export default function QuizPage() {
  const router = useRouter();
  const search = useSearchParams();
  const name = search.get("name") || "사용자";

  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState<Score>({ L: 0, E: 0, X: 0 });

  const handleAnswer = (axis: Axis, point: number) => {
    // 1) 점수 먼저 계산
    const next = { ...score, [axis]: score[axis] + point };
    setScore(next);

    // 2) idx 업데이트는 score 업데이트 후에 따로!
    if (idx + 1 === questions.length) {
        const L = next.L >= 3 ? "1" : "0";
        const E = next.E >= 3 ? "1" : "0";
        const X = next.X >= 3 ? "1" : "0";

        router.push(`/result?type=${L}${E}${X}&name=${encodeURIComponent(name)}`);
        return;
    }

    // 여기서 단 한번만 증가!
    setIdx(idx + 1);
  };

  const q = questions[idx];
  const progress = Math.round(((idx + 1) / questions.length) * 100);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-[#e3eaff] to-[#f0f4ff]">
      <div className="bg-white border-2 border-[#beb7ff] rounded-xl w-full max-w-md p-6 shadow-[4px_4px_0_#afa8f3]">
        <p className="text-xs text-[#867af0] font-semibold mb-2">
          질문 {idx + 1} / {questions.length}
        </p>

        <div className="w-full h-2 bg-gray-200 rounded-full mb-5">
          <div
            className="h-full bg-[#a99bff] rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-base font-semibold mb-6 text-gray-700">{q.text}</p>

        <div className="space-y-3">
          {q.options.map((o, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(q.axis, o.score)}
              className="w-full bg-[#f7f5ff] hover:bg-[#ebe7ff] border-2 border-[#c9c2ff] 
                         text-left py-3 px-4 rounded-lg text-sm transition shadow-[2px_2px_0_#b1a8f1]"
            >
              {o.text}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

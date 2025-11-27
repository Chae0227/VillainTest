export const dynamic = "force-dynamic";
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

  const startQuiz = () => {
    if (!name.trim()) return alert("이름을 입력해주세요!");
    router.push(`/quiz?name=${encodeURIComponent(name)}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#dfeaff] to-[#eef4ff] flex justify-center items-center p-6">
      <div className="bg-white border-2 border-[#c7c0ff] rounded-xl max-w-sm w-full p-8 shadow-[4px_4px_0_#b8b0f5]">
        <h1 className="text-2xl font-extrabold text-[#7c6de8] mb-2 text-center">
          빌런 유형 테스트
        </h1>
        <p className="text-sm text-center text-gray-600 mb-6">
          누구나 빌런이 될 수 있다<br/>당신의 숨은 ‘빌런 기질’을 확인해보세요.
        </p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력해주세요"
          className="w-full border-2 border-[#c7c0ff] rounded-md px-4 py-3 mb-4 bg-[#fafaff]
                     focus:outline-none focus:ring-2 focus:ring-[#bdb4ff]"
        />

        <button
          onClick={startQuiz}
          className="w-full bg-[#b9aaff] hover:bg-[#a394f9] text-white font-bold py-3 rounded-md
                     shadow-[3px_3px_0_#8a7ae0] border border-[#7f70db] transition"
        >
          테스트 시작하기
        </button>
      </div>
    </main>
  );
}

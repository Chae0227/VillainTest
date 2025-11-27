// app/quiz/page.tsx
import { Suspense } from "react";
import QuizClient from "./QuizClient";

export const dynamic = "force-dynamic";

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#e3f2ff] to-[#f5e9ff]">
          <p className="text-sm text-gray-600">테스트 불러오는 중...</p>
        </main>
      }
    >
      <QuizClient />
    </Suspense>
  );
}

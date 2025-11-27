// app/result/page.tsx
import { Suspense } from "react";
import ResultClient from "./ResultClient";

export const dynamic = "force-dynamic";

export default function ResultPageWrapper() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center bg-[#e5eaff]">
          <p className="text-sm text-gray-600">결과 불러오는 중...</p>
        </main>
      }
    >
      <ResultClient />
    </Suspense>
  );
}

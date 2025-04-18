"use client";
import { Suspense } from "react";
import HomePage from "@/Context/HomePage";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>Loading search params...</p>}>
        <HomePage />
      </Suspense>
    </div>
  );
}

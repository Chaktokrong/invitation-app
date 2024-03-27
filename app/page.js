import Image from "next/image";
import WelomePage from "@/Components/WelomePage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {[1, 2, 3, 4, 3, 2, 3, 4, 3, 2, 3, 4, 44, 4].map((row, index) => {
        return (
          <div key={index}>
            <WelomePage />
          </div>
        );
      })}
    </main>
  );
}

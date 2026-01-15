
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/chat");
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Image
        src="/assets/bg_img.png"
        alt="Agentic IT Service Desk background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40" />


      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4">
            Welcome to the Agentic IT Service Desk
          </h1>
          <p className="text-sm md:text-lg text-gray-200 mb-8 max-w-xl mx-auto">
            Your AI-powered assistant for resolving IT issues autonomously.
          </p>
          <button
            onClick={handleStart}
            className="px-8 py-3 rounded-full bg-[#445a78] text-white text-base md:text-lg shadow-[0_6px_0_0_rgba(0,0,0,0.35)] hover:bg-[#516a8e] transition"
          >
            Start Conversation
          </button>
        </div>
      </div>
    </div>
  );
}

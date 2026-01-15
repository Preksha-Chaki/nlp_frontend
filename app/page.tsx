"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();

  const placeholderEmail = "admin@gmail.com";
  const placeholderPassword = "admin";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    if (email === placeholderEmail && password === placeholderPassword) {
      router.push("/welcome_page");
    } else {
      alert("Invalid demo credentials.");
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">

      <Image
        src="/assets/bg_img.png"
        alt="Login background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/50" />


      <div className="relative h-full w-full flex">
        <div className="h-full w-1/2 bg-[#020617]/80 backdrop-blur-md text-white flex shadow-2xl">
          <div className="w-full max-w-md px-16 py-12 flex flex-col justify-center space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-semibold">Login</h1>
              <p className="text-sm text-gray-300">
                Access your Agentic IT Service Desk dashboard.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase tracking-wide text-gray-200">
                  Email / ID
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="admin@gmail.com"
                  className="w-full rounded-xl bg-[#e5f3ff] text-black px-4 py-3 shadow-[0_6px_0_0_rgba(0,0,0,0.35)] border-transparent focus-visible:ring-0 focus-visible:border-[#93c5fd]"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-xs uppercase tracking-wide text-gray-200"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl bg-[#e5f3ff] text-black px-4 py-3 shadow-[0_6px_0_0_rgba(0,0,0,0.35)] border-transparent focus-visible:ring-0 focus-visible:border-[#93c5fd]"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-gray-300">
                
                <button
                  type="button"
                  className="hover:text-gray-100 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="mt-2 w-full h-12 rounded-full bg-[#445a78] hover:bg-[#516a8e] transition-colors shadow-[0_6px_0_0_rgba(0,0,0,0.35)] text-base font-medium"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

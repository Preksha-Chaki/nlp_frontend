
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Panel = "none" | "tickets" | "actions";

export default function ChatPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [activePanel, setActivePanel] = useState<Panel>("none");

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


      <div className="relative z-10 flex h-full w-full text-white">
        {/* Sidebar */}
        <aside
          className={`h-full bg-[#0b1523]/80 flex flex-col justify-between py-[4vh] transition-all duration-300 ${
            collapsed ? "w-[6vw] min-w-[70px]" : "w-[20vw] min-w-[200px] px-[2vw]"
          }`}
        >
          <div className="space-y-[3vh]">

            <div className="flex items-center justify-between px-2">
              <button
                className="text-xl"
                onClick={() => setCollapsed((prev) => !prev)}
                aria-label="Toggle sidebar"
              >
                {collapsed ? "›" : "‹"}
              </button>
            </div>

  
            <nav
              className={`text-sm tracking-wide ${
                collapsed ? "space-y-[2.5vh] text-center" : "space-y-[2.5vh]"
              }`}
            >

              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className={`block w-full py-1 border-b border-gray-500/50 ${
                      collapsed ? "text-xs" : "text-left"
                    }`}
                  >
                    +New Request
                  </button>
                </DialogTrigger>

                <DialogContent className="bg-[#0b1523] text-white border border-gray-700">
                  <DialogHeader>
                    <DialogTitle>Create a new IT request</DialogTitle>
                    <DialogDescription className="text-gray-300">
                      Provide details about the issue or request you want the assistant
                      to handle.
                    </DialogDescription>
                  </DialogHeader>

                  <form
                    className="mt-4 space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      // later: send to backend / agent
                      console.log("Mock submit new request");
                    }}
                  >
                    <div className="space-y-1">
                      <Label htmlFor="request-title">Title</Label>
                      <Input
                        id="request-title"
                        name="title"
                        placeholder="e.g. VPN not working after update"
                        className="bg-[#111827] border-gray-600 text-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="request-category">Category</Label>
                      <Input
                        id="request-category"
                        name="category"
                        placeholder="e.g. Network / VPN"
                        className="bg-[#111827] border-gray-600 text-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="request-details">Details</Label>
                      <textarea
                        id="request-details"
                        name="details"
                        rows={4}
                        placeholder="Describe the issue and any steps you've already tried…"
                        className="w-full rounded-md border border-gray-600 bg-[#111827] px-3 py-2 text-sm text-white outline-none"
                      />
                    </div>

                    <DialogFooter className="mt-2">
                      <Button
                        type="submit"
                        className="bg-[#445a78] hover:bg-[#516a8e]"
                      >
                        Submit Request
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>

              {/* My Tickets */}
              <button
                onClick={() =>
                  setActivePanel((cur) => (cur === "tickets" ? "none" : "tickets"))
                }
                className={`block w-full py-1 border-b border-gray-500/50 transition ${
                  collapsed ? "text-xs" : "text-left"
                } ${activePanel === "tickets" ? "text-[#9fb7ff]" : ""}`}
              >
                {collapsed ? "T" : "My Tickets"}
              </button>

              {/* Executed Actions */}
              <button
                onClick={() =>
                  setActivePanel((cur) => (cur === "actions" ? "none" : "actions"))
                }
                className={`block w-full py-1 border-b border-gray-500/50 transition ${
                  collapsed ? "text-xs" : "text-left"
                } ${activePanel === "actions" ? "text-[#9fb7ff]" : ""}`}
              >
                {collapsed ? "A" : "Executed Actions"}
              </button>
            </nav>

            {/* Sidebar detail area */}
            {!collapsed && activePanel !== "none" && (
              <div className="mt-[2vh] text-xs bg-[#111827]/80 rounded-2xl px-3 py-3 space-y-2">
                {activePanel === "tickets" && (
                  <>
                    <h2 className="text-sm font-semibold mb-1">My Tickets</h2>
                    <p className="text-gray-300">
                      Recent tickets and their current status.
                    </p>
                    <ul className="mt-2 space-y-2">
                      <li className="bg-[#1b2636] rounded-xl px-3 py-2">
                        VPN not working after update – In Progress
                      </li>
                      <li className="bg-[#1b2636] rounded-xl px-3 py-2">
                        Laptop running slow – Resolved
                      </li>
                    </ul>
                  </>
                )}

                {activePanel === "actions" && (
                  <>
                    <h2 className="text-sm font-semibold mb-1">Executed Actions</h2>
                    <ul className="mt-2 space-y-2">
                      <li className="bg-[#1b2636] rounded-xl px-3 py-2">
                        Filed ticket for VPN issue
                      </li>
                      <li className="bg-[#1b2636] rounded-xl px-3 py-2">
                        Meeting with IT Support
                      </li>
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>
        </aside>

        {/* chat area */}
        <main className="flex-1 h-full px-[4vw] py-[4vh] flex flex-col">
          <header className="flex items-center justify-between mb-[4vh]">
            <h1 className="text-2xl font-semibold">Agentic IT Service Desk</h1>
            <div className="flex items-center gap-4 text-sm">
              {/* change bell later */}
              <button className="text-xl">🔔</button>
              <span>User name</span>
            </div>
          </header>

          <section className="flex-1 flex flex-col gap-[3vh]">
            <div className="space-y-[2vh] max-w-[60vw]">
              <div className="inline-block bg-gray-200 text-black rounded-3xl px-4 py-2">
                Hello {"<name>"}, how can I help you today?
              </div>
              <div className="flex justify-end">
                <div className="inline-block bg-[#445a78] rounded-3xl px-4 py-2">
                  My VPN is not working after update
                </div>
              </div>
            </div>

            <div className="mt-[2vh] max-w-[45vw] bg-gray-200/95 text-black rounded-3xl px-6 py-4">
              <p>- Checking VPN policy</p>
              <p>- Analyzing recent IT logs</p>
              <p>- Suggesting fix</p>
              <p className="mt-[2vh]">[ Action Suggestions Appear Here ]</p>
            </div>

            <div className="flex-1" />
          </section>

          <form className="mt-[3vh] flex items-center gap-2">
            <div className="flex-1 bg-gray-200/95 text-black rounded-full px-6 py-3">
              <input
                type="text"
                placeholder="Enter your message here...."
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
            <button
              type="submit"
              className="h-[6vh] aspect-square rounded-full bg-[#445a78] flex items-center justify-center text-sm shadow-[0_4px_0_rgba(0,0,0,0.35)]"
            >
              send
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

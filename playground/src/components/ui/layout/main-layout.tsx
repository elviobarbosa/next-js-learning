"use client";
import { SidebarInset, SidebarProvider } from "../sidebar";
import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar variant="inset" />
        <SidebarInset>
          <AppHeader />
          <main className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col gap-2 px-4 py-4 md:px-8 md:py-6">
              {children}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

"use client";
import { SidebarInset, SidebarProvider } from "../sidebar";
import { AppHeader } from "./app-header";
import "nprogress/nprogress.css";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import NProgress from "nprogress";
import "@/styles/progress-bar.css";
import { useNProgressNavigation } from "@/hooks/use-progress-bar";
import dynamic from "next/dynamic";

const AppSidebar = dynamic(() => import("./app-sidebar"), {
  ssr: false,
  loading: () => <div className="w-64 bg-black" />,
});

function RouteProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPath = useRef(pathname + searchParams.toString());

  useEffect(() => {
    const currentPath = pathname + searchParams.toString();
    if (previousPath.current !== currentPath) {
      NProgress.start();
      const timeout = setTimeout(() => NProgress.done(), 300);
      previousPath.current = currentPath;
      return () => clearTimeout(timeout);
    }
  }, [pathname, searchParams]);

  return null;
}

export function MainLayout({ children }: { children: React.ReactNode }) {
  useNProgressNavigation();

  return (
    <Suspense fallback={null}>
      <RouteProgressBar />
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <AppHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2 px-8">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                {children}
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </Suspense>
  );
}

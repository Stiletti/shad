import { Outlet } from "react-router";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { Lightmode } from "./LightMode/Lightmode";

export function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <main className="flex flex-col items-center justify-center w-full border-4 rounded-2xl m-4">
        <Outlet />
      </main>
      <Lightmode />
    </SidebarProvider>
  );
}

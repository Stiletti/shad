import { Outlet } from "react-router";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

export function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <main className="w-full h-full border-4 rounded-2xl m-4">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

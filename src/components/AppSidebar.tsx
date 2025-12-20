import { Menu, MessageCircle, TestTubes } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

const homeCategories = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Menu,
  },
  {
    title: "TestComp",
    url: "/testcomp",
    icon: TestTubes
  },
  {
    title: 'sChat',
    url: '/schat',
    icon: MessageCircle
  }
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Home</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {homeCategories.map((cat) => (
                <SidebarMenuItem key={cat.title}>
                  <SidebarMenuButton asChild>
                    <a href={cat.url}>
                      <cat.icon />
                      <span>{cat.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

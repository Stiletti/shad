import { Menu, MessageCircle, ScrollText } from "lucide-react";
import { AvatarComp } from "./SidebarFooter/AvatarComp";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

export function AppSidebar() {
  const homeCategories = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Menu,
    },
  ];

  const chatCategories = [
    {
      title: "sChat",
      url: "/schat",
      icon: MessageCircle,
    },
    {
      title: "Logs",
      url: "/logs",
      icon: ScrollText,
    },
  ];

  return (
    <Sidebar collapsible="icon">
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
        <SidebarGroup>
          <SidebarGroupLabel>sChat</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chatCategories.map((cat) => (
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
      <SidebarFooter>
        <AvatarComp username="max mustermann" size="32" />
      </SidebarFooter>
    </Sidebar>
  );
}

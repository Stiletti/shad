import { Menu, MessageCircle, TestTubes } from "lucide-react";
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
  SidebarMenuItem
} from "./ui/sidebar";

export function AppSidebar() {

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
      </SidebarContent>
      <SidebarFooter>
          <AvatarComp username="lol" size="150" />
      </SidebarFooter>
    </Sidebar>
  );
}

/*
className={`transition-all duration-300 ${
            open ? "bg-white/10 p-2 rounded-md" : ""
          }`}
*/
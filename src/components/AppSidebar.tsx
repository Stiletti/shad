import { Menu, MessageCircle, Moon, Sun, TestTubes } from "lucide-react";
import { useTheme, type Theme } from "./ThemeProvider";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "./ui/sidebar";

export function AppSidebar() {
  const { setTheme } = useTheme()

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

  const modeToggle: { title: string; theme: Theme; icon: React.ComponentType }[] = [
    {
      title: "Light Mode",
      theme: "light",
      icon: Sun,
    },
    {
      title: "Dark Mode",
      theme: "dark",
      icon: Moon,
    },
  ]

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
          <SidebarGroupLabel>Mode</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {modeToggle.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton onClick={() => {
                    setTheme(item.theme)
                  }}>
                    <item.icon />
                    <span>{item.title}</span>
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

"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";
import { createIconImport } from "@/lib/icons.util";

const items = [
  { title: "About", url: "/", icon: createIconImport("Code") },
  { title: "Usuários", url: "/usuarios", icon: createIconImport("Users") },
  {
    title: "Documentos",
    url: "/documentos",
    icon: createIconImport("FileText"),
  },
  {
    title: "Configurações",
    url: "/configuracoes",
    icon: createIconImport("Settings"),
  },
];

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <div className="flex items-center">
          {React.createElement(createIconImport("CodeXml"))}
          <h1 className="text-base font-semibold">ELVIO BARBOSA</h1>
        </div>
        <h2 className="text-sm">Senior Frontend Dev.</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="data-[slot=sidebar-menu-button]:!p-1.5"
                  >
                    <Link href={item.url}>
                      {React.createElement(item.icon)}
                      <span>{item.title}</span>
                    </Link>
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

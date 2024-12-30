import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Collapsible } from "@/components/ui/collapsible"

import { useAllGenres } from "components/functions/getGames"

// Menu items.
const items = [
  {
    title: "Explore",
    url: "/",
    icon: Home,
  },
  {
    title: "Newly added",
    url: "/newlyadded",
    icon: Inbox,
  }
]

export async function Menu() {
  const {results: genres} = await useAllGenres();
  console.log(genres);
  
  return (
    <Sidebar collapsible="none" className="w-auto">
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader >
            <h1>Gameflix</h1>
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item,index) => (
                <SidebarMenuItem key={`${item.title}-${index}`}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel>Genres</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible defaultOpen className="group/collapsible">
              {genres.map((genre: {name: string, id: number, slug: string} ,index: number ) => (
                <SidebarMenuItem key={`${genre.id}-${index}`}>
                  <SidebarMenuButton asChild>
                    <a href={`/ganre/${genre.slug}`}>
                      <span>{genre.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

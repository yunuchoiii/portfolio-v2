import { Code, FolderKanban, Home, LucideIcon, Mail, User } from "lucide-react";

export enum Menu {
    Home = "Home",
    AboutMe = "About Me",
    Skills = "Skills",
    Projects = "Projects",
    Contact = "Contact",
}

export interface MenuItem {
    label: Menu;
    href: string;
    icon: LucideIcon;
}

export const menuList: MenuItem[] = [
    {
        label: Menu.Home,
        href: "#home",
        icon: Home,
    },
    {
        label: Menu.AboutMe,
        href: "#about",
        icon: User,
    },
    {
        label: Menu.Skills,
        href: "#skills",
        icon: Code,
    },
    {
        label: Menu.Projects,
        href: "#projects",
        icon: FolderKanban,
    },
    {
        label: Menu.Contact,
        href: "#contact",
        icon: Mail,
    },
];

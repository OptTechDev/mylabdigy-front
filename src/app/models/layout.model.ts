export interface SidebarItem {
    label: string;
    icon: string;
    routerLink: string;
    roles: number[];
    items?: SidebarItem[];
}
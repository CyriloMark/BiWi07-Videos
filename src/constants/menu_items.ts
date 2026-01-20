type MenuItem = {
    id: number;
    title: string;
    href: string;
};

export const menu_items = {
    HOME: {
        id: 0,
        title: "Lernvideos",
        href: "#learn",
    },
    EXAM: {
        id: 1,
        title: "Prüfungsanforderungen",
        href: "#exam",
    },
    TRANSCRIPT: {
        id: 2,
        title: "Transkript",
        href: "#transcript",
    },
} as const satisfies Record<string, MenuItem>;

export type MenuKey = keyof typeof menu_items;
export type MenuItemType = (typeof menu_items)[MenuKey];

// function navigateTo(menu: MenuKey) {
//     const item = menu_items[menu];
//     console.log(item.href);
// }

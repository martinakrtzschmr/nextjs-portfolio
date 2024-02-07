export const NAVBAR_LINKS = [
    {
        label: "Admin",
        value: "/admin" as const,
        featured: [
            {
                name: "Users",
                href: "/admin/users",
                iconSrc: "#"
                // imageSrc: "/nav/ui-kits/mixed.jpg"
            }
        ]
    },
    {
        label: "About",
        value: "/about"
    },
    {
        label: "Blog",
        value: "/blog",
        featured: [
            {
                name: "Add new post",
                href: "/blog/new",
                iconSrc: "#"
                // imageSrc: "/nav/icons/picks.jpg"
            }
        ]
    },
    {
        label: "Contact me",
        value: "/contact"
    }
] 
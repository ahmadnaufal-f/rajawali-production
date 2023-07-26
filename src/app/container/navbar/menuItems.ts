export interface submenuItem {
    name: string;
    submenupath: string;
}

export interface menuItem {
    id: string;
    name: string;
    path: string | null;
    submenus: submenuItem[];
}

export const menuItems = [
    {
        id: 'home',
        name: 'About Us',
        path: null,
        submenus: [
            // {
            //     name: 'Who We Are',
            //     submenupath: '/#who-we-are',
            // },
            // {
            //     name: 'Product Overview',
            //     submenupath: '/#product-overview',
            // },
            // {
            //     name: 'Our Advantages',
            //     submenupath: '/#our-advantages',
            // },
            // {
            //     name: 'Testimonies',
            //     submenupath: '/#testimonies',
            // }
        ]
    },
    {
        id: 'portfolio',
        name: 'Our Portfolio',
        path: null,
        submenus: [
            {
                name: 'Highlight Gallery',
                submenupath: '/portfolio/gallery',
            },
            {
                name: 'Clients & Projects',
                submenupath: '/portfolio/projects',
            }
        ]
    },
    {
        id: 'product-services',
        name: 'Product & Services',
        path: null,
        submenus: [
            {
                name: 'Rigging Aluminium Rental',
                submenupath: '/product-services/rigging-aluminium',
            },
            {
                name: 'Stage Aluminium',
                submenupath: '/product-services/stage-aluminium',
            },
            {
                name: 'Backdrop',
                submenupath: '/product-services/backdrop',
            },
            {
                name: 'Sound System',
                submenupath: '/product-services/sound-system',
            },
            {
                name: 'Lighting System',
                submenupath: '/product-services/lighting-system',
            },
            {
                name: 'Event Equipments',
                submenupath: '/product-services/event-equipments',
            }
        ]
    },
    {
        id: 'contact',
        name: 'Contact',
        path: '/contact',
        submenus: []
    }
];

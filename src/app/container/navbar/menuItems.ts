import { Language, useLanguage } from '../../languages/language-context'

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

export function getMenuItems(lang: Language) {
    const { getString } = useLanguage()
    return ([
    {
        id: 'home',
        name: getString('about-us'),
        path: null,
        submenus: []
    },
    {
        id: 'portfolio',
        name: getString('our-portfolio'),
        path: null,
        submenus: [
            {
                name: getString('highlight-gallery'),
                submenupath: '/portfolio/gallery',
            },
            {
                name: getString('clients-projects'),
                submenupath: '/portfolio/projects',
            }
        ]
    },
    {
        id: 'product-services',
        name: getString('product-services'),
        path: null,
        submenus: [
            {
                name: getString('rigging-aluminium-rental'),
                submenupath: '/product-services/rigging-aluminium',
            },
            {
                name: getString('stage-aluminium'),
                submenupath: '/product-services/stage-aluminium',
            },
            {
                name: getString('backdrop'),
                submenupath: '/product-services/backdrop',
            },
            {
                name: getString('sound-system'),
                submenupath: '/product-services/sound-system',
            },
            {
                name: getString('lighting'),
                submenupath: '/product-services/lighting',
            },
            {
                name: getString('event-equipments'),
                submenupath: '/product-services/event-equipments',
            }
        ]
    },
    {
        id: 'contact',
        name: getString('contact'),
        path: '/contact',
        submenus: []
    }
])
}

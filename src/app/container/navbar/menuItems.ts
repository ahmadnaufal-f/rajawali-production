import { Language, useLanguage } from '../../languages/language-context'

export interface submenuItem {
    id: string;
    name: string;
    submenupath: string;
}

export interface menuItem {
    id: string;
    name: string;
    path: string | null;
    submenus: submenuItem[];
}

export function getMenuItems(lang: Language): menuItem[] {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { getString } = useLanguage()
    return ([
        {
            id: 'home',
            name: getString('about-us'),
            path: '/#who-we-are',
            submenus: []
        },
        {
            id: 'portfolio',
            name: getString('our-portfolio'),
            path: null,
            submenus: [
                {
                    id: 'highlight-gallery',
                    name: getString('highlight-gallery'),
                    submenupath: '/portfolio/gallery',
                },
                {
                    id: 'clients-projects',
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
                    id: 'rigging-aluminium-rental',
                    name: getString('rigging-aluminium-rental'),
                    submenupath: '/product-services/#rigging-aluminium',
                },
                {
                    id: 'stage-aluminium',
                    name: getString('stage-aluminium'),
                    submenupath: '/product-services/#stage-aluminium',
                },
                {
                    id: 'backdrop',
                    name: getString('backdrop'),
                    submenupath: '/product-services/#backdrop',
                },
                {
                    id: 'sound-system',
                    name: getString('sound-system'),
                    submenupath: '/product-services/#sound-system',
                },
                {
                    id: 'lighting',
                    name: getString('lighting'),
                    submenupath: '/product-services/#lighting',
                },
                {
                    id: 'event-equipments',
                    name: getString('event-equipments'),
                    submenupath: '/product-services/#event-equipments',
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

const menus = [

    {
        id: 2,
        name: 'Presales',
        namesub: [
            {
                id: 1,
                sub: 'Create presale',

                links: '/create-presale'
            },
            {
                id: 2,
                sub: 'Browse presales',
                // links: '/explore-02'
                links: '/explore-01'
            },


        ],
    },
    {
        id: 3,
        name: 'Airdrop',
        namesub: [
            {
                id: 1,
                sub: 'Create airdrop',
                links: '/create-airdrop'
            },

        ],
    },
    {
        id: 4,
        name: 'Liquidity lockup',
        namesub: [
            {
                id: 1,
                sub: 'Create lock',
                links: '/create-lock'
            },
            {
                id: 2,
                sub: 'View locks',
                // links: '/view-locks',
                submenu: [
                    {
                        id: 3,
                        sub: 'Presale Locks',
                        links: '/view-locks/presale'
                    },
                    {
                        id: 4,
                        sub: 'Custom Locks',
                        links: '/view-locks/custom'
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: 'KYC & Audit',
        namesub: [
            {
                id: 1,
                sub: 'Request KYC',
                links: '/request-kyc'
            },
            {
                id: 2,
                sub: 'Request audit',
                links: '/request-audit'
            },
        ],
    },
    {
        id: 6,
        name: 'Alerts',
        namesub: [
            {
                id: 1,
                sub: 'View alerts',
                links: '/alerts/'
            },
        ],
    },
    {
        id: 7,
        name: 'Your investments',
        namesub: [
            {
                id: 1,
                sub: 'View investments',
                links: '/explore-investments'
            },
        ],
    },
    {
        id: 8,
        name: 'Manage presales',
        namesub: [
            {
                id: 1,
                sub: 'View your presales',
                links: '/my/presales/'
            },
        ],
    },

]

export default menus;
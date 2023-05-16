const menus = [
  
    {
        id: 2,
        name: 'Presales',
        namesub: [
            {
                id: 1,
                sub: 'Edit presale',
                
                links: '/admin/edit-presale'
            },
            {
                id: 2,
                sub: 'Browse presales',
                // links: '/explore-02'
                links: '/admin/explore-all'
            },
        
            
        ],
    },
    // {
    //     id: 3,
    //     name: 'Airdrop',
    //     namesub: [
    //         {
    //             id: 1,
    //             sub: 'Create airdrop',
    //             links: '/create-airdrop'
    //         },
            
    //     ],
    // },
    {
        id: 4,
        name: 'Liquidity lockup',
        namesub: [
            // {
            //     id: 1,
            //     sub: 'Create lock',
            //     links: '/create-lock'
            // },
            {
                id: 2,
                sub: 'View locks',
                // links: '/view-locks',
                submenu: [
                    {
                        id: 3,
                        sub: 'Presale Locks',
                        links: '/admin/view-locks/presale'
                    },
                    {
                        id: 4,
                        sub: 'Custom Locks',
                        links: '/admin/view-locks/custom'
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
                sub: 'View KYC',
                links: '/admin/view-kyc'
            },
            {
                id: 2,
                sub: 'View audit',
                links: '/admin/view-audit'
            },
        ],
    },
    // {
    //     id: 6,
    //     name: 'Alerts',
    //     namesub: [
    //         {
    //             id: 1,
    //             sub: 'View alerts',
    //             links: '/admin/alerts/'
    //         },
    //     ],
    // },
    // {
    //     id: 7,
    //     name: 'Your investments',
    //     namesub: [
    //         {
    //             id: 1,
    //             sub: 'View investments',
    //             links: '#'
    //         },
    //     ],
    // },
    // {
    //     id: 8,
    //     name: 'Manage presales',
    //     namesub: [
    //         {
    //             id: 1,
    //             sub: 'View your presales',
    //             links: '#'
    //         },
    //     ],
    // },
    
]

export default menus;
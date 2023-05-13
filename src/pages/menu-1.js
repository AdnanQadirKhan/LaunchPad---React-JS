const menus = [
  
    {
        id: 2,
        name: 'Presales',
        namesub: [
            {
                id: 1,
                sub: 'Edit presale',
                
                links: '/edit-presale'
            },
            {
                id: 2,
                sub: 'Browse presales',
                // links: '/explore-02'
                links: '/explore-all'
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
            {
                id: 1,
                sub: 'Edit lock',
                links: '/edit-lock'
            },
            {
                id: 2,
                sub: 'View locks',
                links: '/view-locks'
            },
            
        ],
    },
    {
        id: 5,
        name: 'KYC & Audit',
        namesub: [
            {
                id: 1,
                sub: 'View KYC',
                links: '/view-kyc'
            },
            {
                id: 2,
                sub: 'View audit',
                links: '/view-audit'
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
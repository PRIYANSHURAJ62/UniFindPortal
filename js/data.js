const colleges = [
    {
        id: 'harvard',
        name: 'Harvard University',
        location: 'Cambridge, MA',
        country: 'USA',
        fees: 55000,
        ranking: 1,
        scholarships: true,
        type: 'International',
        placements: {
            average: 150000,
            highest: 250000,
            lowest: 80000
        },
        reviews: [
            { user: 'John D.', rating: 5, comment: 'Amazing campus and faculty.' },
            { user: 'Sarah L.', rating: 4.5, comment: 'Tough curriculum but worth it.' }
        ],
        revenue: [50, 60, 55, 70, 80], // in millions
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png'
    },
    {
        id: 'mit',
        name: 'MIT',
        location: 'Cambridge, MA',
        country: 'USA',
        fees: 53000,
        ranking: 2,
        scholarships: true,
        type: 'International',
        placements: {
            average: 145000,
            highest: 260000,
            lowest: 85000
        },
        reviews: [
            { user: 'Mike R.', rating: 5, comment: 'Innovation hub.' }
        ],
        revenue: [45, 50, 52, 60, 65],
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png'
    },
    {
        id: 'oxford',
        name: 'University of Oxford',
        location: 'Oxford, UK',
        country: 'UK',
        fees: 12000, // converted roughly
        ranking: 5,
        scholarships: true,
        type: 'International',
        placements: {
            average: 90000,
            highest: 180000,
            lowest: 50000
        },
        reviews: [],
        revenue: [30, 32, 35, 38, 40],
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Oxford_University_Coat_Of_Arms.svg/1200px-Oxford_University_Coat_Of_Arms.svg.png'
    },
    {
        id: 'iit_bombay',
        name: 'IIT Bombay',
        location: 'Mumbai, India',
        country: 'India',
        fees: 3000, // cheap
        ranking: 149,
        scholarships: true,
        type: 'National',
        placements: {
            average: 25000,
            highest: 200000,
            lowest: 10000
        },
        reviews: [
            { user: 'Rahul K.', rating: 5, comment: 'Best in India.' }
        ],
        revenue: [10, 12, 15, 18, 20],
        logo: 'assets/campus1.png'
    },
    {
        id: 'jagannath_jaipur',
        name: 'Jagannath University Jaipur',
        location: 'Jaipur, India',
        country: 'India',
        fees: 2500,
        ranking: 350,
        scholarships: true,
        type: 'National',
        placements: {
            average: 15000,
            highest: 80000,
            lowest: 5000
        },
        reviews: [
            { user: 'Amit S.', rating: 4, comment: 'Great infrastructure and faculties.' },
            { user: 'Priya M.', rating: 4.5, comment: 'Good environment for learning.' }
        ],
        revenue: [5, 6, 7, 8, 9],
        logo: 'assets/jagannath.png'
    }
];

const featuredColleges = colleges.filter(c => c.ranking <= 5 || c.id === 'jagannath_jaipur');

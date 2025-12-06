function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function initCollegePage() {
    const collegeId = getQueryParam('id');
    if (!collegeId) return; // Not on college page

    const college = colleges.find(c => c.id === collegeId);
    if (!college) {
        document.body.innerHTML = '<h1>College not found</h1>';
        return;
    }

    // Populate Header
    document.getElementById('college-name').textContent = college.name;
    document.getElementById('college-location').textContent = college.location;
    document.getElementById('college-logo').src = college.logo;
    document.title = `${college.name} - Details`;

    // Populate Stats
    document.getElementById('rank-val').textContent = college.ranking;
    document.getElementById('fee-val').textContent = college.fees.toLocaleString();
    document.getElementById('type-val').textContent = college.type;
    document.getElementById('schol-val').textContent = college.scholarships ? 'Available' : 'None';

    // Placements
    document.getElementById('pkg-high').textContent = college.placements.highest.toLocaleString();
    document.getElementById('pkg-avg').textContent = college.placements.average.toLocaleString();

    // Render Charts
    renderCharts(college);

    // Reviews
    const reviewsList = document.getElementById('reviews-list');
    if (college.reviews.length > 0) {
        college.reviews.forEach(r => {
            const div = document.createElement('div');
            div.style.marginBottom = '15px';
            div.style.padding = '10px';
            div.style.background = 'rgba(0,0,0,0.03)';
            div.style.borderRadius = '8px';
            div.innerHTML = `<strong>${r.user}</strong> <span style="color: gold;">${'★'.repeat(Math.floor(r.rating))}</span><p>${r.comment}</p>`;
            reviewsList.appendChild(div);
        });
    } else {
        reviewsList.innerHTML = '<p>No reviews yet.</p>';
    }
}

function renderCharts(college) {
    // Placement Chart
    const ctxPlacement = document.getElementById('placementChart').getContext('2d');
    new Chart(ctxPlacement, {
        type: 'bar',
        data: {
            labels: ['Lowest', 'Average', 'Highest'],
            datasets: [{
                label: 'Salary ($)',
                data: [college.placements.lowest, college.placements.average, college.placements.highest],
                backgroundColor: ['#ff6384', '#36a2eb', '#4bc0c0']
            }]
        },
        options: { responsive: true }
    });

    // Revenue Chart
    const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctxRevenue, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Revenue ($ Million)',
                data: college.revenue,
                borderColor: '#9966ff',
                fill: false,
                tension: 0.1
            }]
        },
        options: { responsive: true }
    });
}

function switchTab(tabId) {
    document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Run if on college page
if (document.getElementById('college-name')) {
    initCollegePage();
}

// Populate Feature Section on Index if exists
if (document.getElementById('featured-colleges')) {
    const container = document.getElementById('featured-colleges');
    container.innerHTML = '';
    featuredColleges.forEach(c => {
        const card = document.createElement('div');
        card.className = 'glass college-card';
        card.innerHTML = `
             <div class="card-img" style="background-image: url('${c.logo}'); background-size: contain; background-repeat: no-repeat; background-position: center;"></div>
             <div class="card-content">
                 <div class="card-title">${c.name}</div>
                 <div class="card-info">${c.location} • $${c.fees.toLocaleString()}/yr</div>
                 <a href="college.html?id=${c.id}" class="card-link">View Details →</a>
             </div>
         `;
        container.appendChild(card);
    });
}

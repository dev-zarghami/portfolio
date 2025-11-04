const levelMap = {
    0: 'Learning',
    1: 'Trainee',
    2: 'Beginner',
    3: 'Junior',
    4: 'Junior+',
    5: 'Intermediate',
    6: 'Mid-Level',
    7: 'Mid+',
    8: 'Senior',
    9: 'Senior+',
    10: 'Expert'
};


const allSkills = {
    // Frontend
    'AstroJS': 3,
    'Svelte/SvelteKit': 9,
    'VueJS/NuxtJS': 7,
    'React/NextJS': 4,
    'RxJS': 7,
    'TailwindCSS': 8,
    'PWA/SPA': 8,
    'Bits-UI': 5,
    'Shadcn': 5,
    'Ant Design': 5,
    'PrimeVue': 5,

    // Backend
    'NodeJS': 8,
    'ExpressJS': 7,
    'NestJS': 5,
    'AdonisJS': 8,
    'SocketIO/Websocket': 9,
    'REST API': 9,
    'NATS': 7,
    'PostgreSQL': 3,
    'MongoDB': 5,
    'MySql': 5,
    'MariaDB': 5,
    'TimeSeries DB': 5,


    // DevOps
    'Docker': 4,
    'CI/CD': 4,
    'Git Flow': 7,
    'Performance Optimization': 7,
    'Microservices': 8
};

// Helper function to build a skill group
function makeSkillGroup(skillNames, projects) {
    return {
        labels: skillNames,
        data: skillNames.map(name => allSkills[name] ?? 0),
        projects
    };
}

const skillsData = {
    frontend: makeSkillGroup(
        ['Svelte/SvelteKit', 'VueJS/NuxtJS', 'React/NextJS', 'AstroJS', 'RxJS', 'PWA/SPA', 'TailwindCSS', 'Bits-UI', 'Shadcn', 'Ant Design', "PrimeVue"],
        'Kebrin Exchange, 724 Holding, Erythron Exchange, Oraclez DEX', "Toos Ravin Saze"
    ),
    backend: makeSkillGroup(
        ['NodeJS', 'NestJS', 'AdonisJS', 'REST API', 'NATS', 'MySql', 'MariaDB', 'PostgreSQL', 'MongoDB', 'Microservices', 'TimeSeries DB'],
        'HamtaPay Crypto Exchange, adonis5-nats-broker, Navosh'
    ),
    devops: makeSkillGroup(
        ['Docker', 'CI/CD', 'Git Flow', 'Performance Optimization', 'Microservices'],
        'HamtaPay Crypto Exchange, Kebrin Exchange, Xchanger Exchange'
    )
};

// Automatically build the "all" group from the others
const allSkillNames = [
    ...new Set(
        Object.values(skillsData).flatMap(group => group.labels)
    )
];

const allProjects = [
    ...new Set(
        Object.values(skillsData)
            .flatMap(group => group.projects.split(',').map(p => p.trim()))
    )
].join(', ');


skillsData.all = makeSkillGroup(allSkillNames, allProjects);


const packagesData = [
    {
        name: "adonis5-nats-broker",
        description:
            "Production-ready AdonisJS 5 package for building event-driven microservices with NATS message broker.",
        github: "https://github.com/dev-zarghami/adonis5-nats-broker",
        tech: ["AdonisJS", "NATS", "Microservices", "TypeScript", "Node.js"],
    },
    {
        name: "mini-pow-blockchain",
        description:
            "A simple and minimal blockchain implementation in Node.js — built for learning and educational purposes.",
        github: "https://github.com/dev-zarghami/mini-pow-blockchain",
        tech: ["Node.js", "Blockchain", "Proof of Work", "Crypto", "Educational"],
    },
    {
        name: "vite-plugin-robots-txt",
        description:
            "Generate robots.txt for Vite with environment-aware rules and instant dev preview support.",
        github: "https://github.com/dev-zarghami/vite-plugin-robots-txt",
        tech: ["Vite", "Plugin", "SEO", "robots.txt", "JavaScript"],
    },
    {
        name: "vite-plugin-app-version",
        description:
            "Vite plugin to generate an app version file (version.json) and optional virtual module with git/tag/build metadata.",
        github: "https://github.com/dev-zarghami/vite-plugin-app-version",
        tech: ["Vite", "Plugin", "Git", "Versioning", "Node.js"],
    },
    {
        name: "vite-plugin-pwa-manifest",
        description:
            "Vite plugin to generate a PWA web app manifest with env-aware metadata and a dev no-store preview route.",
        github: "https://github.com/dev-zarghami/vite-plugin-pwa-manifest",
        tech: ["Vite", "PWA", "Manifest", "Service Worker", "Plugin"],
    },
    {
        name: "vite-plugin-firebase-messaging-sw",
        description:
            "Vite plugin to generate a Firebase Cloud Messaging service worker with environment-aware configs and dev preview.",
        github: "https://github.com/dev-zarghami/vite-plugin-firebase-messaging-sw",
        tech: ["Vite", "Firebase", "FCM", "Service Worker", "Plugin"],
    },
    {
        name: "number-to-locale-text",
        description:
            "Lightweight TypeScript package that converts numbers to localized text in multiple languages, with lazy-loaded locales.",
        github: "https://github.com/dev-zarghami/number-to-locale-text",
        tech: ["TypeScript", "i18n", "Localization", "Utilities", "Node.js"],
    },
    {
        name: "crypto-wallet-address-validator",
        description:
            "Advanced wallet address validator supporting Bitcoin, Litecoin, Ethereum, and other altcoins in Node.js and browser.",
        github: "https://github.com/dev-zarghami/crypto-wallet-address-validator",
        tech: ["Node.js", "Crypto", "Wallets", "Validation", "Browser-Compatible"],
    },
];


const timelineData = [
    {
        role: 'Front-End Team Lead & Developer',
        company: 'Kebrin Exchange (formerly Erythron)',
        date: 'Nov 2023 – Present',
        details: [
            'Led the complete frontend redevelopment, re-branding (Erythron to Kebrin), and architectural migration of the crypto exchange platform.',
            'Engineered a new, performant frontend using SvelteKit, RxJS, and TailwindCSS, introducing a reactive state management and data feed pattern.',
            'Implemented and utilized TradingView Charting Library with the UDF data feed structure for advanced price history visualization.',
            'Reduced system complexity by 30% and improved performance by designing and implementing a modular, reusable component library.',
            'Designed and implemented a modular component library, reducing complexity and improving application performance for both desktop and mobile views.'
        ]
    },
    {
        role: 'Senior Full-Stack & Microservice Architect',
        company: 'HamtaPay Crypto Exchange',
        date: 'Mar 2020 – Sep 2023',
        details: [
            'Designed and led the development of a high-volume, microservice-based backend from the ground up using Node.js/AdonisJS and PostgreSQL.',
            'Engineered a core multi-blockchain deposit and withdrawal system, leveraging NATS Message Broker for asynchronous, reliable communication.',
            'Implemented core system architecture, including Kong API Gateway, robust caching, and time-series monitoring with InfluxDB/VictoriaMetrics.',
            'Gained extensive knowledge in Digital Wallet structures (HD, BIP44) and secured on-chain transaction processes, supporting thousands of concurrent users.',
            'Initially joined as a Front-End Developer, fully rewriting the legacy platform with Vue.js/Nuxt.js to improve scalability and mobile performance.'
        ]
    },
    {
        role: 'Senior Freelance Full-Stack Developer',
        company: 'Oraclez DEX Bridge & Others',
        date: 'Jun 2022 – Nov 2024 (Contract, Remote)',
        details: [
            'Developed complex DEX and bridge interfaces using React, Next.js, and Vue.js, enabling seamless cross-chain swaps.',
            'Integrated WalletConnect and MetaMask for DApp interaction and implemented RxJS for reactive, real-time blockchain communication.',
        ]
    },
    {
        role: 'Full-Stack Engineer',
        company: 'Xchanger Exchange & Atiex (Crypto Projects)',
        date: 'Oct 2022 – Apr 2023 (Contract, Remote)',
        details: [
            'Built and deployed a full-service crypto exchange platform (similar to Changelly) covering backend, frontend, DevOps, and blockchain integration.',
            'Developed the robust backend using Node.js/AdonisJS, integrating HD Wallets (BIP32) to manage multi-chain operations (BSC, TRX, BTC, ETH).'
        ]
    },
    {
        role: 'Front-End Developer',
        company: '724 Holding',
        date: 'Apr 2023 – Jun 2024 (Remote)',
        details: [
            'Developed gamified crypto trading platform features, integrating Reown AppKit for wallet connection and blockchain interactions.',
            'Optimized page load times and user experience using Svelte and RxJS.',
        ]
    },
    {
        role: 'Full-Stack Developer',
        company: 'Navosh',
        date: 'Mar 2019 – Jun 2020',
        details: [
            'Pioneered the company\'s transition to a modern frontend, leading the adoption and implementation of Vue.js and Nuxt.js for SSR projects.',
            'Built and maintained backend services with PHP (Yii2) and MySQL, mastering concepts like PWA, SPA, and SSR.',
        ]
    }
];

const portfolioProjects = [
    {
        title: 'Kebrin Exchange',
        role: 'Front-End Developer',
        date: 'Nov 2023 – Oct 2025',
        tech: ["SvelteJS", "SvelteKit", 'TailwindCss', 'Rxjs', 'Reactive Programming', "TradingView Charting Library", 'SSR', "CSR"],
        description: '',
        imageUrl: 'https://placehold.co/800x400/13c4c1/ffffff?text=Kebrin+Exchange&font=lora',
        websiteUrl: 'https://kebrin.ir',
        images: [
            './projects/kebrin-desktop/screenshot-01.png',
            './projects/kebrin-desktop/screenshot-02.png',
            './projects/kebrin-desktop/screenshot-03.png',
            './projects/kebrin-desktop/screenshot-04.png',
            './projects/kebrin-desktop/screenshot-05.png',
            './projects/kebrin-desktop/screenshot-06.png',
            './projects/kebrin-desktop/screenshot-07.png',
            './projects/kebrin-desktop/screenshot-08.png',
            './projects/kebrin-desktop/screenshot-09.png',
            './projects/kebrin-desktop/screenshot-10.png',
            './projects/kebrin-desktop/screenshot-11.png',
            './projects/kebrin-desktop/screenshot-12.png',
            './projects/kebrin-desktop/screenshot-13.png',
            './projects/kebrin-desktop/screenshot-14.png',
        ]
    },
    {
        title: 'Kebrin Exchange (Mobile WebApp)',
        role: 'Front-End Developer',
        date: 'Nov 2023 – Oct 2025',
        tech: ["SvelteJS", "SvelteKit", 'TailwindCss', 'Rxjs', 'Reactive Programming', "TradingView Charting Library", 'SSR', "CSR", "Hash History Strategy"],
        description: '',
        imageUrl: 'https://placehold.co/800x400/13c4c1/ffffff?text=Kebrin+Exchange&font=lora',
        websiteUrl: 'https://kebrin.ir',
        images: [
            './projects/kebrin-mobile/screenshot-01.png',
            './projects/kebrin-mobile/screenshot-02.png',
            './projects/kebrin-mobile/screenshot-03.png',
            './projects/kebrin-mobile/screenshot-04.png',
            './projects/kebrin-mobile/screenshot-05.png',
        ]
    },
    {
        title: 'Task 724',
        role: 'Front-End Developer',
        date: 'Apr 2025 – Jun 2025',
        tech: ['Svelte v5', 'SvelteKit', 'RxJS', 'Tailwind v4', 'Reown Appkit', 'Metamask', 'Trust Wallet', 'Gamification', 'Crypto', 'ethersJS', 'Vite', 'typescript', 'bits-ui'],
        description: 'Developed a gamified crypto trading platform feature set, integrating a reward system with gems and tokens, and connecting to various wallets using modern web3 libraries. The primary focus was creating an engaging and intuitive user experience using Svelte and RxJS.',
        imageUrl: 'https://placehold.co/800x400/3658a3/ffffff?text=Task+724&font=lora',
        websiteUrl: 'https://task724.com',
        images: [
            './projects/task724/screenshot-01.png',
            './projects/task724/screenshot-02.png',
            './projects/task724/screenshot-03.png',
            './projects/task724/screenshot-04.png',
            './projects/task724/screenshot-05.png',
            './projects/task724/screenshot-06.png',
            './projects/task724/screenshot-07.png',
            './projects/task724/screenshot-08.png',
            './projects/task724/screenshot-09.png',
            './projects/task724/screenshot-10.png',
            './projects/task724/screenshot-11.png',
            './projects/task724/screenshot-12.png',
            './projects/task724/screenshot-13.png',
            './projects/task724/screenshot-14.png',
            './projects/task724/screenshot-15.png',
            './projects/task724/screenshot-16.png',
            './projects/task724/screenshot-17.png',
            './projects/task724/screenshot-18.png',
        ]
    },
    {
        title: 'XChanger Exchange',
        role: 'Full-Stack Web Developer',
        date: 'Oct 2022 – Apr 2023',
        tech: ['Docker', 'Docker Compose', 'Redis', 'MariaDB', 'NodeJS', 'AdonisJS', 'VueJS', 'primeVue', "Redis", 'SumSub KYC', 'Modular finance Payment', 'Tron Network', 'Bsc Network', 'Ethereum Network', "Bitcoin Network"],
        description: 'Built a 24/7 crypto exchange, implementing KYC, multi-chain transactions, and real-time rate updates. The backend was built with NodeJS and Express, connected to a MariaDB database, while the frontend utilized VueJS for a reactive user interface.',
        imageUrl: 'https://placehold.co/800x400/03c693/ffffff?text=XChanger+Exchange&font=lora',
        websiteUrl: 'https://xchanger.uk',
        images: [
            './projects/xchanger/screenshot-01.png',
            './projects/xchanger/screenshot-02.png',
            './projects/xchanger/screenshot-03.png',
            './projects/xchanger/screenshot-04.png',
            './projects/xchanger/screenshot-05.png',
            './projects/xchanger/screenshot-06.png',
        ]
    },
    {
        title: 'Atiex Exchange',
        role: 'Full-Stack Web Developer',
        date: 'Jun 2022 – Nov 2024',
        tech: ['Docker', 'Docker Compose', 'Redis', 'MariaDB', 'NodeJS', 'ExpressJS', 'VueJS', 'Scss', 'Sass', "Lightweight Chart"],
        description: 'Built a 24/7 crypto exchange, implementing KYC, multi-chain transactions, and real-time rate updates. The backend was built with NodeJS and Express, connected to a PostgreSQL database, while the frontend utilized VueJS for a reactive user interface.',
        imageUrl: 'https://placehold.co/800x400/3ab795/ffffff?text=Atiex+Exchange&font=lora',
        websiteUrl: 'https://atiex.uk',
        images: [
            './projects/atiex/screenshot-01.png',
            './projects/atiex/screenshot-02.png',
            './projects/atiex/screenshot-03.png',
        ]
    },
    {
        title: 'Hamtapay Exchange',
        role: 'Front-End Developer',
        date: 'Jun 2022 – Nov 2024',
        tech: ['NodeJS', 'ExpressJS', 'VueJS', 'NuxtJS', 'Scss', 'Sass'],
        description: '',
        imageUrl: 'https://placehold.co/800x400/508bff/ffffff?text=Hamtapay+Exchange&font=lora',
        websiteUrl: 'https://hamtapay.net',
        images: [
            './projects/hamtapay-website/screenshot-01.png',
            './projects/hamtapay-website/screenshot-02.png',
            './projects/hamtapay-website/screenshot-03.png',
            './projects/hamtapay-website/screenshot-04.png',
            './projects/hamtapay-website/screenshot-05.png',
        ]
    },
    {
        "title": "Toos Ravin Saze",
        "role": "Front-End Developer",
        "date": "Apr 2020 – May 2020",
        "tech": ["VueJS", "NuxtJS", "SCSS", "Sass"],
        "description": "Worked on the website of Toos Ravin Saze, a consulting engineering firm established in 2004 focusing on structural and architectural design. Developed the front-end using VueJS and NuxtJS for a reactive, component-based interface. Collaborated with the design and architecture teams to integrate project galleries and team profiles. Also implemented responsive layouts, SCSS/Sass modular styles, and optimized the site for performance and accessibility.",
        "imageUrl": "https://placehold.co/800x400/e20a17/ffffff?text=Toos+Ravin+Saze&font=lora",
        "websiteUrl": "https://trs-cec.com",
        "images": [
            "./projects/toos-ravin-saze/screenshot-01.png",
            "./projects/toos-ravin-saze/screenshot-02.png",
            "./projects/toos-ravin-saze/screenshot-03.png"
        ]
    }
];

let skillsChart;
let currentImageIndex = 0;
let projectImages = [];


function populatePackages() {
    const grid = document.getElementById("packages-grid");
    grid.innerHTML = packagesData
        .map(
            (pkg) => `
      <div class="bg-[var(--card)] rounded-[var(--radius)] shadow-lg border border-[var(--border)] p-6 hover:shadow-2xl transition-all duration-300">
        <h3 class="text-xl font-bold text-[var(--foreground)] font-mono">${pkg.name}</h3>
        <p class="mt-2 text-[var(--muted-foreground)] text-sm">${pkg.description}</p>
        <a href="${pkg.github}" target="_blank" class="inline-block mt-3 text-[var(--primary)] text-sm font-semibold hover:underline">
          View on GitHub →
        </a>
        <div class="mt-4 flex flex-wrap gap-2">
          ${pkg.tech
                    .map(
                        (t) =>
                            `<span class="text-xs font-semibold py-1 px-2.5 rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)]">${t}</span>`
                    )
                    .join("")}
        </div>
      </div>`
        )
        .join("");
}


// --- Chart Functions ---
const createOrUpdateChart = (filter = 'all') => {
    const chartData = skillsData[filter];

    const ctx = document.getElementById('skillsChart').getContext('2d');

    // Get Oklch Primary color dynamically from CSS root variables
    const rootStyle = getComputedStyle(document.documentElement);
    const accentColor = rootStyle.getPropertyValue('--primary').trim();
    const headingColor = rootStyle.getPropertyValue('--foreground').trim();
    const borderColor = rootStyle.getPropertyValue('--border').trim();

    const chartConfig = {
        type: 'bar',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: 'Proficiency (1-10)',
                data: chartData.data,
                backgroundColor: accentColor,
                borderColor: accentColor,
                borderWidth: 1,
                borderRadius: 6,
            }]
        },
        options: {
            indexAxis: 'x',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 50,
                    ticks: { color: headingColor },
                    grid: { color: borderColor }
                },
                y: {
                    ticks: {
                        color: headingColor,
                        callback: function (value) {
                            return levelMap[value] || value;
                        }
                    },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        title: (tooltipItems) => tooltipItems[0].label,
                        label: (context) => {
                            const score = context.raw;
                            const label = levelMap[Math.round(score)] || 'Unknown';
                            return ` Level: ${label}`;
                        }
                    }
                }

            }
        }
    };

    if (skillsChart) {
        skillsChart.data.labels = chartData.labels;
        skillsChart.data.datasets[0].data = chartData.data;
        skillsChart.data.datasets[0].backgroundColor = accentColor;
        skillsChart.data.datasets[0].borderColor = accentColor;
        skillsChart.options.scales.x.ticks.color = headingColor;
        skillsChart.options.scales.y.ticks.color = headingColor;
        skillsChart.options.scales.x.grid.color = borderColor;
        skillsChart.update();
    } else {
        skillsChart = new Chart(ctx, chartConfig);
    }
    document.getElementById('project-text').textContent = chartData.projects;
};

// --- Population Functions ---
const populateTimeline = () => {
    const timelineContainer = document.querySelector('#career-journey .relative');
    let timelineHTML = '';
    timelineData.forEach(item => {
        timelineHTML += `
                    <div class="relative pl-12">
                        <!-- Timeline Dot -->
                        <div class="absolute left-6 top-2.5 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--card)] border-[3px] border-[var(--primary)]"></div>
                        <div class="bg-[var(--card)] rounded-[var(--radius)] shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-[var(--border)]">
                            <p class="font-mono text-sm text-[var(--muted-foreground)]">${item.date}</p>
                            <h3 class="text-xl font-bold mt-1 text-[var(--foreground)]">${item.role}</h3>
                            <p class="font-semibold text-[var(--foreground)]">${item.company}</p>
                            <ul class="mt-4 space-y-2 text-sm list-disc pl-5 text-[var(--foreground)]">
                                ${item.details.map(d => `<li>${d}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
    });
    timelineContainer.innerHTML = timelineHTML;
};

const populatePortfolio = () => {
    const gridContainer = document.getElementById('projects-grid');
    gridContainer.innerHTML = portfolioProjects.map((project, index) => `
                <div class="project-card bg-[var(--card)] rounded-[var(--radius)] shadow-lg border border-[var(--border)] hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer" data-project-index="${index}">
                    <img src="${project.imageUrl}" alt="${project.title} project cover" class="w-full h-52 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found';">
                    <div class="p-5 flex flex-col flex-grow">
                        <p class="font-mono text-xs text-[var(--muted-foreground)]">${project.date}</p>
                        <h3 class="text-lg font-bold mt-1 text-[var(--foreground)]">${project.title}</h3>
                        <p class="font-semibold text-sm text-[var(--foreground)]">${project.role}</p>
                        <a class="font-light text-sm text-[var(--muted-foreground)]" target="_blank" href="${project.websiteUrl}">${project.websiteUrl}</a>
                        <p class="mt-3 text-sm text-[var(--muted-foreground)] flex-grow">${project.description.substring(0, 100)}...</p>
                        <div class="mt-4 flex flex-wrap gap-2">
                            ${project.tech.map(t => `<span class="text-xs font-semibold py-1 px-2.5 rounded-full text-[var(--secondary-foreground)] bg-[var(--secondary)]">${t}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
};

// --- Modal & Slider Functions ---
const modal = document.getElementById('project-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalPanel = document.getElementById('modal-panel');
const modalSliderContent = document.getElementById('modal-slider-content');

const openModal = (projectIndex) => {
    const project = portfolioProjects[projectIndex];
    if (!project) return;

    document.body.classList.add('modal-open');
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-role').textContent = project.role;
    document.getElementById('modal-date').textContent = project.date;
    document.getElementById('modal-description').textContent = project.description;

    projectImages = project.images || [];
    modalSliderContent.innerHTML = projectImages.map(imgUrl =>
        `<img src="${imgUrl}" class="w-full h-auto flex-shrink-0 object-contain" style="flex-basis: 100%;" onerror="this.style.display='none'">`
    ).join('');

    currentImageIndex = 0;
    updateSlider();

    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        modalBackdrop.classList.remove('opacity-0');
        modalPanel.classList.remove('opacity-0', 'scale-95');
    });
};

const closeModal = () => {
    modalBackdrop.classList.add('opacity-0');
    modalPanel.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }, 300); // Match transition duration
};

const updateSlider = () => {
    modalSliderContent.style.transform = `translateX(-${currentImageIndex * 100}%)`;
    document.getElementById('slider-prev-btn').style.display = currentImageIndex === 0 ? 'none' : 'block';
    document.getElementById('slider-next-btn').style.display = currentImageIndex === projectImages.length - 1 ? 'none' : 'block';
};

// --- Theme Functions ---
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const root = document.querySelector(':root');

const setColor = (theme) => {
    const lightColors = ["oklch(63.7% 0.237 25.331)", "oklch(69.6% 0.17 162.48)", "oklch(62.3% 0.214 259.815)", "oklch(60.6% 0.25 292.717)", "oklch(76.9% 0.188 70.08)", "oklch(64.5% 0.246 16.439)", "oklch(55.4% 0.046 257.417)", "oklch(55.2% 0.016 285.938)", "oklch(76.8% 0.233 130.85)", "oklch(62.7% 0.265 303.9)"]
    const darkColors = ["oklch(57.7% 0.245 27.325)", "oklch(59.6% 0.145 163.225)", "oklch(54.6% 0.245 262.881)", "oklch(54.1% 0.281 293.009)", "oklch(66.6% 0.179 58.318)", "oklch(58.6% 0.253 17.585)", "oklch(44.6% 0.043 257.281)", "oklch(44.2% 0.017 285.786)", "oklch(64.8% 0.2 131.684)", "oklch(55.8% 0.288 302.321)"]
    const randomIndex = Math.floor(Math.random() * lightColors.length);
    if (theme === 'dark') {
        root.style.setProperty('--primary', darkColors[randomIndex]);
    } else {
        root.style.setProperty('--primary', lightColors[randomIndex]);
    }
}

const setTheme = (theme) => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        localStorage.setItem('theme', 'light');
    }
    // Re-render chart to update colors
    if (skillsChart) {
        const activeButton = document.querySelector('.filter-btn.bg-\\[var\\(--primary\\)\\]');
        let currentFilter = 'all';
        if (activeButton) {
            currentFilter = activeButton.id.replace('filter-', '') || 'all';
        }
        createOrUpdateChart(currentFilter);
    }
};

const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
};

// --- Toast Notification ---
const showToast = (message) => {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    // Using Tailwind's predefined green classes for success message
    toast.className = 'p-3 bg-green-600 text-white rounded-lg shadow-xl flex items-center space-x-2 transition-all duration-500 opacity-0 transform translate-y-full';
    toast.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span>${message}</span>`;

    container.appendChild(toast);

    // Show animation
    setTimeout(() => {
        toast.classList.remove('opacity-0', 'translate-y-full');
        toast.classList.add('opacity-100', 'translate-y-0');
    }, 10);

    // Hide animation and removal
    setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-full');
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 3000);
};

// --- Chatbot Functionality Script: Auto-Image Generation ---

// DOM Elements
const chatMessages = document.getElementById('chat-messages');
const chatCard = document.getElementById('chat-card');
const chatContainer = document.getElementById('chatbot-container');
const chatCloseBtn = document.getElementById('chat-close-btn');
const chatOpenBtn = document.getElementById('chat-open-btn');

const IMAGE_URL = "https://image-gen-ai.dev-zarghami.workers.dev?prompt=cyberpunk-web-developer-boy";

/**
 * Creates and appends a new text message bubble to the chat window.
 * @param {string} message - The text content of the message.
 * @returns {HTMLElement} The created message bubble element.
 */
function createTextMessage(message) {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'flex justify-start';

    const messageBubble = document.createElement('div');
    messageBubble.className = 'max-w-[80%] p-3 rounded-xl rounded-tl-sm bg-[var(--secondary)] text-sm text-[var(--secondary-foreground)] shadow';
    messageBubble.textContent = message;

    messageContainer.appendChild(messageBubble);
    chatMessages.appendChild(messageContainer);

    // Auto-scroll to the bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageContainer;
}

/**
 * Creates and appends a "typing" or "loading" bubble.
 * @returns {HTMLElement} The loading bubble container for later removal.
 */
function createLoadingMessage() {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'flex justify-start';

    const messageBubble = document.createElement('div');
    // Simple loading indicator using Tailwind's animate-pulse utility
    messageBubble.className = 'max-w-[80%] p-3 rounded-xl rounded-tl-sm bg-[var(--secondary)] text-sm text-[var(--secondary-foreground)] shadow';
    messageBubble.innerHTML = '<span class="animate-pulse">Generating image...</span>';

    messageContainer.appendChild(messageBubble);
    chatMessages.appendChild(messageContainer);

    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageContainer; // Return the container so we can easily remove the whole bubble later
}


/**
 * Creates and appends a dynamic image message bubble to the chat window.
 * This function now handles the image loading process and removes the loading indicator.
 * @param {string} imageUrl - The URL for the AI-generated image.
 * @param {HTMLElement} [loadingElement] - The loading message container to remove.
 */
function createImageMessage(imageUrl, loadingElement) {
    // Use the Image constructor to track loading state
    const tempImg = new Image();
    tempImg.alt = "AI-Generated Cyberpunk Web Developer";

    tempImg.onload = () => {
        // 1. Image loaded successfully, remove the loading state
        if (loadingElement) {
            loadingElement.remove();
        }

        // 2. Create and append the final image bubble
        const messageContainer = document.createElement('div');
        messageContainer.className = 'flex justify-start';

        const messageBubble = document.createElement('div');
        messageBubble.className = 'max-w-[80%] p-2 rounded-xl rounded-tl-sm bg-[var(--secondary)] shadow';

        // Use the fully loaded image element (tempImg is now fully loaded)
        tempImg.className = 'w-full h-auto rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity';

        // --- MODIFIED: Change click behavior to trigger a download ---
        tempImg.onclick = () => {
            const a = document.createElement('a');
            a.href = imageUrl; // The source URL of the image
            a.download = 'ai-generated-image.png'; // Set the default filename
            // We must append and then remove the element for the download to work reliably across browsers
            document.body.appendChild(a);
            a.click(); // Programmatically trigger the download
            document.body.removeChild(a);
        };
        // -----------------------------------------------------------

        messageBubble.appendChild(tempImg);
        messageContainer.appendChild(messageBubble);
        chatMessages.appendChild(messageContainer);

        // 3. Scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    tempImg.onerror = () => {
        // 1. Remove the loading state on error
        if (loadingElement) {
            loadingElement.remove();
        }
        // 2. Show an error message
        createTextMessage("Sorry, the image generator failed to load the image. Please try again later.");
    };

    // Start the image load
    tempImg.src = imageUrl;
}


/**
 * Initiates the message sequence when the page loads.
 */
function startChatSequence() {
    // 1. First Message: Introduction and prompt
    createTextMessage("Hello! I’m an AI Assistant. I'm generating a unique 'cyberpunk web developer boy' image for you.");

    // 2. Second Action: Start loading animation and image generation after a brief pause
    setTimeout(() => {
        // Start the loading animation
        const loadingElement = createLoadingMessage();

        // Trigger image load immediately. The result (success/fail) will remove the loadingElement.
        createImageMessage(IMAGE_URL, loadingElement);
    }, 1500); // Wait 1.5s for the initial message to be read
}

// --- Event Listeners ---

// Close button functionality: Hides the card and shows the open button
chatCloseBtn.addEventListener('click', () => {
    chatCard.classList.add('scale-0', 'opacity-0');
    setTimeout(() => {
        chatContainer.classList.add('hidden');
        chatOpenBtn.classList.remove('hidden');
    }, 300);
});

// Open button functionality: Shows the card and hides the open button
chatOpenBtn.addEventListener('click', () => {
    chatContainer.classList.remove('hidden');
    chatCard.classList.remove('scale-0', 'opacity-0');
    chatOpenBtn.classList.add('hidden');
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
});

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Theme
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme) {
        setTheme(storedTheme);
        setColor(storedTheme)
    } else if (systemPrefersDark) {
        setTheme('dark');
        setColor('dark')
    } else {
        setTheme('light');
        setColor('light')
    }

    // 2. Populate Content
    populatePackages();
    populateTimeline();
    populatePortfolio();
    // Initial chart render (must happen after theme is set so colors are correct)
    createOrUpdateChart('all');
    startChatSequence();

    // 3. Setup Listeners
    themeToggle.addEventListener('click', toggleTheme);

    // Download button (simulated download)
    document.getElementById('download-button').addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = './files/hasan-zarghami-resume.pdf';
        a.download = 'hasan-zarghami-resume.pdf';
        a.target = '_blank';
        a.click();
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.id.replace('filter-', '');
            createOrUpdateChart(filter);

            filterButtons.forEach(btn => {
                // Reset all buttons to default state
                btn.classList.remove('bg-[var(--primary)]', 'text-[var(--primary-foreground)]');
                btn.classList.add('bg-[var(--card)]', 'text-[var(--foreground)]', 'border', 'border-[var(--border)]', 'hover:bg-[var(--secondary)]');
            });

            // Set active button state
            button.classList.remove('bg-[var(--card)]', 'text-[var(--foreground)]', 'border', 'border-[var(--border)]', 'hover:bg-[var(--secondary)]');
            button.classList.add('bg-[var(--primary)]', 'text-[var(--primary-foreground)]');
        });
    });

    // Modal & Project Card Listeners
    document.getElementById('projects-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.project-card');
        if (card) {
            openModal(card.dataset.projectIndex);
        }
    });

    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Slider Listeners
    document.getElementById('slider-prev-btn').addEventListener('click', () => {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateSlider();
        }
    });
    document.getElementById('slider-next-btn').addEventListener('click', () => {
        if (currentImageIndex < projectImages.length - 1) {
            currentImageIndex++;
            updateSlider();
        }
    });
});
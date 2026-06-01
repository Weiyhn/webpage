/* ============================================================
   shared.js — Injects consistent navbar & footer on every page,
   then activates copy protection from protect.js
   ============================================================ */

/* Scripts at end of <body> — DOM is already fully parsed */
(function () {
    const page = location.pathname.split('/').pop() || 'index.html';

    const navLinks = [
        { label: 'HOME',      href: 'main.html',             active: 'main.html' },
        { label: 'ABOUT',     href: 'base.html#about',       active: 'base.html' },
        { label: 'INTERESTS', href: 'interest.html#interests',active: 'interest.html' },
        { label: 'FAVORITE',  href: 'favorite.html#favorite', active: 'favorite.html' },
        { label: 'PROJECTS',  href: 'projects.html#projects', active: 'projects.html' },
        { label: 'CONTACT',   href: '#contact-footer',        active: null },
    ];

    const navHTML = `
    <header class="header_navbar">
        <nav id="navbar" class="hn_wrap">
            <a href="main.html" class="hn_logo"><h1>&lt;WinPage&gt;</h1></a>
            <button class="hamburger" id="hamburger" aria-label="Toggle menu">
                <span></span><span></span><span></span>
            </button>
            <div class="nav_menu" id="navMenu">
                <ul>
                    ${navLinks.map(l => `
                    <li><a href="${l.href}" class="hnLink${l.active === page ? ' nav-active' : ''}">${l.label}</a></li>
                    `).join('')}
                </ul>
            </div>
        </nav>
    </header>`;

    const footerHTML = `
    <footer id="contact-footer">
        <div class="contact-content">
            <h2 class="sectionTitle">Contact Me</h2>
            <p>Let's connect! Feel free to reach out for collaborations or project inquiries.</p>
            <div class="contact-links">
                <a href="mailto:winstido@gmail.com" title="Email">
                    <i class='bx bx-envelope'></i>winstido@gmail.com
                </a>
                <a href="tel:+639876543210" title="Phone">
                    <i class='bx bx-phone'></i>0987654321
                </a>
                <a href="https://github.com/win-stdio" target="_blank" rel="noopener" title="GitHub">
                    <i class='bx bxl-github'></i>@win.stdio
                </a>
            </div>
            <p class="copyright">&copy; 2025 WinPage. All rights reserved.</p>
        </div>
    </footer>`;

    /* ---- Inject nav before <main> (skip if already exists or welcome screen) ---- */
    const main = document.querySelector('main');

    if (main && !document.body.classList.contains('welcome-only-body') && !document.querySelector('.header_navbar')) {
        main.insertAdjacentHTML('beforebegin', navHTML);
    }

    /* ---- Inject footer after <main> (skip if already exists) ---- */
    if (main && !document.body.classList.contains('welcome-only-body') && !document.getElementById('contact-footer')) {
        main.insertAdjacentHTML('afterend', footerHTML);
    }

    /* ---- Hamburger toggle ---- */
    document.addEventListener('click', e => {
        const btn = document.getElementById('hamburger');
        const menu = document.getElementById('navMenu');
        if (!btn || !menu) return;
        if (btn.contains(e.target)) {
            btn.classList.toggle('open');
            menu.classList.toggle('open');
        } else if (!menu.contains(e.target)) {
            btn.classList.remove('open');
            menu.classList.remove('open');
        }
    });

    /* ---- Nav active highlight style ---- */
    const style = document.createElement('style');
    style.textContent = `.nav-active { border-bottom: 2px solid var(--clr-accent); color: var(--clr-accent) !important; font-weight: 700; }`;
    document.head.appendChild(style);

})();
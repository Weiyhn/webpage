/* ============================================================
   protect.js — WinPage Copy Protection & Shared UI Injector
   ============================================================ */

/* ---------- 1. COPY PROTECTION ---------- */

// Disable right-click context menu
document.addEventListener('contextmenu', e => e.preventDefault());

// Disable text selection via keyboard shortcuts & drag
document.addEventListener('selectstart', e => e.preventDefault());
document.addEventListener('dragstart', e => e.preventDefault());

// Block common "view source / save / devtools" key combos
document.addEventListener('keydown', e => {
    const key = e.key.toUpperCase();
    const ctrl = e.ctrlKey || e.metaKey;

    if (
        (ctrl && ['U', 'S', 'A', 'C', 'P'].includes(key)) || // Ctrl+U/S/A/C/P
        e.key === 'F12' ||                                     // DevTools
        (ctrl && e.shiftKey && ['I', 'J', 'C'].includes(key)) // Chrome DevTools
    ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
});

// Disable image dragging
document.querySelectorAll('img, video').forEach(el => {
    el.setAttribute('draggable', 'false');
    el.style.pointerEvents = 'none'; // prevents right-click save on images
    // Re-enable pointer events on videos so controls still work
    if (el.tagName === 'VIDEO') el.style.pointerEvents = 'auto';
});

/* ---------- 2. WATERMARK ---------- */
const wm = document.createElement('div');
wm.id = 'wm-overlay';
wm.setAttribute('aria-hidden', 'true');
wm.innerHTML = Array(40).fill('<span>© WinPage by Herwin D.</span>').join(' ');
document.body.appendChild(wm);
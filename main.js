// Optimized 12-Hour Clock with Full Date
function updateClock() {
    const now = new Date();
    const tz = { timeZone: 'America/New_York' };
    const timeStr = new Intl.DateTimeFormat('en-US', { ...tz, hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true }).format(now);
    const dateStr = new Intl.DateTimeFormat('en-US', { ...tz, weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(now);
    
    document.getElementById('live-clock').textContent = `${timeStr} ET`;
    document.getElementById('live-date').textContent = dateStr;
}
setInterval(updateClock, 1000);
updateClock();

// Professional Typewriter phrases
const phrases = ['Dylan Grow', 'IT Specialist', 'Network Pro', 'Problem Solver'];
let pi = 0, ci = 0, deleting = false;
const twEl = document.getElementById('typewriter');

function typeLoop() {
    const full = phrases[pi % phrases.length];
    twEl.textContent = full.slice(0, ci);
    if (!deleting && ci < full.length) { ci++; setTimeout(typeLoop, 80); }
    else if (!deleting && ci === full.length) { deleting = true; setTimeout(typeLoop, 3000); }
    else if (deleting && ci > 0) { ci--; setTimeout(typeLoop, 40); }
    else { deleting = false; pi++; setTimeout(typeLoop, 300); }
}
typeLoop();

// Availability logic for 8am-6pm ET
function checkAvailability() {
    const et = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const day = et.getDay();
    const hour = et.getHours();
    const isOpen = day >= 1 && day <= 5 && hour >= 8 && hour < 18;
    const txt = document.getElementById('status-text');
    txt.textContent = isOpen ? 'Available' : 'After Hours';
    txt.style.color = isOpen ? '#22c55e' : 'var(--text-d)';
}
checkAvailability();

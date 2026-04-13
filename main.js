// Ensure DOM is fully loaded before executing
document.addEventListener('DOMContentLoaded', () => {
    // Duck.ai search - retains query in box after search
    const duckInput = document.getElementById('duck-ai-q');
    if (duckInput) {
        const form = duckInput.closest('form');
        form.addEventListener('submit', () => {
            const val = duckInput.value;
            setTimeout(() => { 
                duckInput.value = val; 
                duckInput.focus(); 
            }, 50);
        });
    }

    // Initialize all site functions
    updateClock();
    setInterval(updateClock, 1000);
    typeLoop();
    checkAvailability();
    setInterval(checkAvailability, 60000);
    initTheme();
});

// Blog content data
const blogPosts = [
    {
        tag: 'Security',
        title: 'Why Your Business Wi-Fi Should Have a Guest Network',
        body: `<p style="color:var(--text-d);line-height:1.8;font-size:15px">When a customer or vendor connects to your main Wi-Fi, they're on the same network as your business devices. Isolation is key.</p>`
    },
    {
        tag: 'Backup & Recovery',
        title: 'The 3-2-1 Backup Rule',
        body: `<p style="color:var(--text-d);line-height:1.8;font-size:15px">Keep 3 copies of data, on 2 different media types, with 1 copy offsite.</p>`
    },
    {
        tag: 'Performance',
        title: 'Is Your PC Actually Slow?',
        body: `<p style="color:var(--text-d);line-height:1.8;font-size:15px">A $150 tune-up often makes a 5-year-old PC feel new.</p>`
    },
    {
        tag: 'Phishing',
        title: 'How to Spot a Phishing Email',
        body: `<p style="color:var(--text-d);line-height:1.8;font-size:15px">Check the sender domain mismatch and urgency pressure.</p>`
    },
    {
        tag: 'Remote Work',
        title: 'Setting Up Secure Remote Access',
        body: `<p style="color:var(--text-d);line-height:1.8;font-size:15px">VPNs and Zero Trust solutions for secure team collaboration.</p>`
    },
    {
        tag: 'Maintenance',
        title: 'Monthly IT Checklist',
        body: `<p style="color:var(--text-d);line-height:1.8;font-size:15px">Run through updates, backups, and security scans monthly.</p>`
    }
];

function openBlog(i) {
    const p = blogPosts[i];
    document.getElementById('blog-modal-content').innerHTML = `
        <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--green)">${p.tag}</span>
        <h2 style="font-size:22px;font-weight:800;margin:8px 0 20px;line-height:1.3">${p.title}</h2>
        ${p.body}`;
    document.getElementById('blog-overlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeBlog() {
    document.getElementById('blog-overlay').classList.add('hidden');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeBlog(); });

// Clock Function: 12-hour format with full date
function updateClock() {
    const now = new Date();
    const tz = { timeZone: 'America/New_York' };
    const timeStr = new Intl.DateTimeFormat('en-US', { ...tz, hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true }).format(now);
    const dateStr = new Intl.DateTimeFormat('en-US', { ...tz, weekday: 'short', month: 'short', day: 'numeric' }).format(now);
    
    document.getElementById('live-clock').textContent = `${timeStr} ET`;
    document.getElementById('live-date').textContent = dateStr;
    document.getElementById('year').textContent = now.getFullYear();
}

// Typewriter Function: Professional Branding
const twEl = document.getElementById('typewriter');
const phrases = ['Dylan Grow', 'IT Specialist', 'Network Pro', 'Problem Solver'];
let pi = 0, ci = 0, deleting = false;

function typeLoop() {
    const full = phrases[pi % phrases.length];
    twEl.textContent = full.slice(0, ci);
    if (!deleting && ci < full.length) {
        ci++;
        setTimeout(typeLoop, 85);        
    } else if (!deleting && ci === full.length) {
        twEl.classList.add('pop');
        setTimeout(() => twEl.classList.remove('pop'), 400);
        deleting = true;
        setTimeout(typeLoop, 4500);      
    } else if (deleting && ci > 0) {
        ci--;
        setTimeout(typeLoop, 45);        
    } else {
        deleting = false;
        pi++;
        setTimeout(typeLoop, 400);       
    }
}

// Navigation Tabs Logic
const tabBtns = document.querySelectorAll('.tab-btn, .mob-tab-btn');
const panes = document.querySelectorAll('.tab-pane');

function setActive(name) {
    panes.forEach(p => p.classList.toggle('hidden', p.id !== name));
    tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === name));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', '#' + name);
}

tabBtns.forEach(b => b.addEventListener('click', () => setActive(b.dataset.tab)));

// Theme Toggle Logic
const htmlEl = document.documentElement;
function initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    htmlEl.classList.toggle('light', saved === 'light');
    htmlEl.classList.toggle('dark', saved === 'dark');
}

document.getElementById('theme-toggle').addEventListener('click', () => {
    const isDark = htmlEl.classList.contains('dark');
    htmlEl.classList.toggle('dark', !isDark);
    htmlEl.classList.toggle('light', isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Availability Badge Logic (8am-6pm ET)
function checkAvailability() {
    const et = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const day = et.getDay();
    const hour = et.getHours();
    const isOpen = day >= 1 && day <= 5 && hour >= 8 && hour < 18;
    const txt = document.getElementById('status-text');
    const dot = document.getElementById('status-dot');
    
    if (txt && dot) {
        txt.textContent = isOpen ? 'Available' : 'After Hours';
        dot.style.background = isOpen ? '#22c55e' : '#71717a';
        txt.style.color = isOpen ? '#22c55e' : '#71717a';
    }
}

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async e => {
        e.preventDefault();
        const status = document.getElementById('form-status');
        status.textContent = 'Sending...';
        try {
            // Simulated success for demonstration
            status.textContent = "✅ Message sent! I'll reply within 1 business hour.";
            contactForm.reset();
        } catch {
            status.textContent = '⚠️ Error — email me directly: DylanGrow@gmail.com';
        }
    });
}

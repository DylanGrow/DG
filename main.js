const duckInput = document.getElementById('duck-ai-q');
if (duckInput) {
  const form = duckInput.closest('form');
  if (form) {
    form.addEventListener('submit', () => {
      const val = duckInput.value;
      setTimeout(() => { duckInput.value = val; duckInput.focus(); }, 50);
    });
  }
}

const blogPosts = [
{
tag: 'Security',
title: 'Why Your Business Wi-Fi Should Have a Guest Network',
body: `
<p style="color:var(--text-d);line-height:1.8;font-size:15px">When a customer or vendor connects to your main Wi-Fi, they're on the same network as your computers, printers, servers, and POS systems. One infected personal device can spread to everything.</p>
<h4 style="margin-top:20px;font-weight:700">What a guest network does</h4>
<p style="color:var(--text-d);line-height:1.8;margin-top:8px;font-size:15px">A guest VLAN isolates visitors so they can reach the internet but can't touch your business devices. Modern routers (Ubiquiti, TP-Link Omada) make this a 10-minute setup.</p>
<ul style="color:var(--text-d);line-height:2;margin-top:8px;padding-left:20px;font-size:15px">
<li>Blocks malware spreading from guest devices</li>
<li>Protects POS and accounting systems</li>
<li>Required for PCI compliance if you take cards</li>
<li>Keeps your network fast (bandwidth separation)</li>
</ul>
<p style="margin-top:20px;padding:16px;background:var(--green-dim);border:1px solid var(--green-border);border-radius:12px;font-size:14px;color:var(--green)">💡 <strong>Bottom line:</strong> If you're not running a separate guest network, your business is one infected smartphone away from a serious problem. I can set this up in under an hour.</p>`
},
{
tag: 'Backup & Recovery',
title: 'The 3-2-1 Backup Rule: What It Is and Why You Need It',
body: `
<p style="color:var(--text-d);line-height:1.8;font-size:15px">The 3-2-1 rule: keep <strong>3 copies</strong> of your data, on <strong>2 different media types</strong>, with <strong>1 copy offsite</strong>.</p>
<ul style="color:var(--text-d);line-height:2;margin-top:16px;padding-left:20px;font-size:15px">
<li><strong>Copy 1:</strong> Your live working files (PC or server)</li>
<li><strong>Copy 2:</strong> A local external drive or NAS</li>
<li><strong>Copy 3:</strong> Cloud storage (Backblaze, OneDrive, or similar)</li>
</ul>
<p style="color:var(--text-d);line-height:1.8;margin-top:16px;font-size:15px">Ransomware attacks encrypt your local files AND connected drives simultaneously. The only thing that saves you is an offsite copy that wasn't connected when the attack hit.</p>
<p style="margin-top:20px;padding:16px;background:var(--green-dim);border:1px solid var(--green-border);border-radius:12px;font-size:14px;color:var(--green)">💡 <strong>Bottom line:</strong> I can set up automated 3-2-1 backups for your business in one visit — cloud + local, fully automated, tested monthly.</p>`
},
{
tag: 'Performance',
title: 'Is Your PC Actually Slow, or Just Needs a Tune-Up?',
body: `
<p style="color:var(--text-d);line-height:1.8;font-size:15px">Before you spend $800 on a new computer, run through this checklist. Nine times out of ten, slowness has a fixable cause.</p>
<ol style="color:var(--text-d);line-height:2.2;margin-top:16px;padding-left:20px;font-size:15px">
<li><strong>Storage:</strong> If your hard drive is over 85% full, everything slows to a crawl.</li>
<li><strong>RAM:</strong> 8GB is the minimum for Windows 11. Running Chrome + Office + Teams on 4GB is painful.</li>
<li><strong>Startup programs:</strong> Open Task Manager → Startup tab. Disable everything non-essential.</li>
<li><strong>Malware:</strong> Background adware silently eats CPU and RAM.</li>
<li><strong>Thermal throttling:</strong> Dust-clogged fans cause CPUs to slow to avoid overheating.</li>
</ol>
<p style="margin-top:20px;padding:16px;background:var(--green-dim);border:1px solid var(--green-border);border-radius:12px;font-size:14px;color:var(--green)">💡 <strong>Bottom line:</strong> A $150 tune-up often makes a 5-year-old PC feel new. Call me before you buy a replacement.</p>`
},
{
tag: 'Phishing',
title: 'How to Spot a Phishing Email Before It Costs You',
body: `
<p style="color:var(--text-d);line-height:1.8;font-size:15px">Phishing emails now look disturbingly legitimate. Here are the real red flags — beyond the obvious spelling errors.</p>
<ul style="color:var(--text-d);line-height:2.2;margin-top:16px;padding-left:20px;font-size:15px">
<li><strong>Sender domain mismatch:</strong> "support@micros0ft-help.com" vs "support@microsoft.com". Hover before you click.</li>
<li><strong>Urgency pressure:</strong> "Your account will be suspended in 24 hours." Legitimate services don't work like this.</li>
<li><strong>Unexpected attachments:</strong> An invoice you didn't request. A shipping notice for something you didn't order.</li>
<li><strong>Generic greetings:</strong> "Dear Customer" instead of your name — often a mass campaign.</li>
<li><strong>Mismatched links:</strong> Hover any link before clicking. The URL shown and actual destination rarely match in phishing.</li>
</ul>
<p style="margin-top:20px;padding:16px;background:var(--green-dim);border:1px solid var(--green-border);border-radius:12px;font-size:14px;color:var(--green)">💡 <strong>Bottom line:</strong> When in doubt, call the company directly using a number from their real website. I also offer staff phishing awareness training.</p>`
},
{
tag: 'Remote Work',
title: 'Setting Up Secure Remote Access for Your Team',
body: `
<p style="color:var(--text-d);line-height:1.8;font-size:15px">Remote access isn't one-size-fits-all. The right solution depends on what your team needs to access and how sensitive that data is.</p>
<ul style="color:var(--text-d);line-height:2.2;margin-top:16px;padding-left:20px;font-size:15px">
<li><strong>Business VPN:</strong> Best for teams needing access to shared drives, local servers, or office printers. Encrypted tunnel to your network.</li>
<li><strong>Remote Desktop (RDP):</strong> Best when employees need their full office PC from home.</li>
<li><strong>Cloud apps (M365, Google Workspace):</strong> Best for document collaboration with no on-premise infrastructure needed.</li>
<li><strong>Zero Trust / Cloudflare Access:</strong> Best for high-security environments — per-app access control, no VPN.</li>
</ul>
<p style="margin-top:20px;padding:16px;background:var(--green-dim);border:1px solid var(--green-border);border-radius:12px;font-size:14px;color:var(--green)">💡 <strong>Bottom line:</strong> I'll assess your setup and recommend the right option — then configure it securely. No "set it and forget it" security holes.</p>`
},
{
tag: 'Maintenance',
title: 'The Monthly IT Checklist Every Small Business Should Run',
body: `
<p style="color:var(--text-d);line-height:1.8;font-size:15px">Set a calendar reminder for the first Monday of each month and run through these 10 items.</p>
<ol style="color:var(--text-d);line-height:2.4;margin-top:16px;padding-left:20px;font-size:15px">
<li>✅ Check Windows/macOS updates — install any pending</li>
<li>✅ Verify backup ran last night (check the log or test a restore)</li>
<li>✅ Review user accounts — remove anyone who left the company</li>
<li>✅ Check disk space on servers and key machines (&lt;85% is healthy)</li>
<li>✅ Run antivirus scan on at least one machine</li>
<li>✅ Test UPS battery backup units (press test button)</li>
<li>✅ Review any failed login alerts or unusual activity</li>
<li>✅ Update router/firewall firmware if available</li>
<li>✅ Clear old temp files and browser caches on shared machines</li>
<li>✅ Confirm offsite backup is current and accessible</li>
</ol>
<p style="margin-top:20px;padding:16px;background:var(--green-dim);border:1px solid var(--green-border);border-radius:12px;font-size:14px;color:var(--green)">💡 <strong>Bottom line:</strong> If you'd rather have me handle this automatically every month, ask about my monthly managed IT plans. Flat rate — no surprise bills.</p>`
}
];

function openBlog(i) {
const p = blogPosts[i];
document.getElementById('blog-modal-content').innerHTML =
`<span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--green)">${p.tag}</span>
<h2 style="font-size:22px;font-weight:800;margin:8px 0 20px;letter-spacing:-.01em;line-height:1.3">${p.title}</h2>
${p.body}`;
document.getElementById('blog-overlay').classList.remove('hidden');
document.body.style.overflow = 'hidden';
}

function closeBlog() {
document.getElementById('blog-overlay').classList.add('hidden');
document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeBlog(); });

const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

const htmlEl      = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

(function initTheme() {
const saved = localStorage.getItem('theme');
if (saved === 'light') {
htmlEl.classList.remove('dark');
htmlEl.classList.add('light');
} else {
htmlEl.classList.add('dark');
htmlEl.classList.remove('light');
}
})();

if(themeToggle) {
  themeToggle.addEventListener('click', () => {
  const isDark = htmlEl.classList.contains('dark');
  htmlEl.classList.toggle('dark', !isDark);
  htmlEl.classList.toggle('light', isDark);
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });
}

function updateClock() {
const now = new Date();
const tz  = { timeZone: 'America/New_York' };
const clockEl = document.getElementById('live-clock');
const dateEl = document.getElementById('live-date');
if(clockEl) clockEl.textContent = new Intl.DateTimeFormat('en-US', { ...tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).format(now) + ' ET';
if(dateEl) dateEl.textContent = new Intl.DateTimeFormat('en-US', { ...tz, weekday: 'short', month: 'short', day: 'numeric' }).format(now);
}
updateClock();
setInterval(updateClock, 1000);

const twEl    = document.getElementById('typewriter');
const phrases = ['Dylan Grow', 'IT Specialist', 'Network Pro', 'Problem Solver'];
let pi = 0, ci = 0, deleting = false;

function typeLoop() {
  if(!twEl) return;
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
typeLoop();

const tabBtns = document.querySelectorAll('.tab-btn');
const mobBtns = document.querySelectorAll('.mob-tab-btn');
const panes   = document.querySelectorAll('.tab-pane');

function setActive(name) {
panes.forEach(p   => p.classList.toggle('hidden', p.id !== name));
tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === name));
mobBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === name));
window.scrollTo({ top: 0, behavior: 'smooth' });
history.replaceState(null, '', '#' + name);
}

tabBtns.forEach(b => b.addEventListener('click', () => setActive(b.dataset.tab)));
mobBtns.forEach(b => b.addEventListener('click', () => setActive(b.dataset.tab)));
document.querySelectorAll('[data-tab-target]').forEach(b =>
b.addEventListener('click', () => setActive(b.dataset.tabTarget))
);

const validTabs = ['home', 'about', 'work', 'booking'];
const initTab   = validTabs.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'home';
setActive(initTab);

function checkAvailability() {
const et   = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
const day  = et.getDay();
const hour = et.getHours() + et.getMinutes() / 60;
const open = day >= 1 && day <= 5 && hour >= 8 && hour < 18;
const badge = document.getElementById('avail-badge');
const dot   = document.getElementById('status-dot');
const txt   = document.getElementById('status-text');

if (badge && dot && txt) {
  if (open) {
  badge.style.cssText = 'background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.2)';
  dot.style.background = '#22c55e';
  txt.style.color = '#22c55e';
  txt.textContent = 'Available';
  } else {
  badge.style.cssText = 'background:var(--bg-card2);border:1px solid var(--border)';
  dot.style.background = 'var(--text-d)';
  txt.style.color = 'var(--text-d)';
  txt.textContent = 'After Hours';
  }
}
}
checkAvailability();
setInterval(checkAvailability, 60000);

const vcardBtn = document.getElementById('vcard-btn');
if(vcardBtn) {
  vcardBtn.addEventListener('click', () => {
  const vcard = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'FN:Dylan Grow',
  'N:Grow;Dylan;;;',
  'TITLE:IT Support & Network Specialist',
  'ORG:Dylan Grow IT',
  'TEL;TYPE=WORK,VOICE:(252) 349-0830',
  'EMAIL;TYPE=PREF,INTERNET:DylanGrow@gmail.com',
  'URL:https://dylangrow.github.io',
  'ADR;TYPE=WORK:;;New Bern;NC;;USA',
  'NOTE:CompTIA A+ Certified | Google IT Support Certified | Emergency IT Services',
  'END:VCARD'
  ].join('\n');
  const a = Object.assign(document.createElement('a'), {
  href:     URL.createObjectURL(new Blob([vcard], { type: 'text/vcard' })),
  download: 'Dylan-Grow-IT.vcf'
  });
  document.body.appendChild(a);
  a.click();
  a.remove();
  });
}

const contactForm = document.getElementById('contact-form');
const formStatus  = document.getElementById('form-status');
if(contactForm && formStatus) {
  contactForm.addEventListener('submit', async e => {
  e.preventDefault();
  formStatus.textContent = 'Sending…';
  formStatus.style.color = 'var(--text-d)';
  const btn = contactForm.querySelector('button[type=submit]');
  btn.disabled = true;
  btn.style.opacity = '.6';
  try {
  await fetch(
  'https://formspree.io/f/YOUR_FORM_ID_HERE',
  { method: 'POST', mode: 'no-cors', body: new FormData(contactForm) }
  );
  formStatus.textContent = "✅ Message sent! I'll reply within 1 business hour.";
  formStatus.style.color = 'var(--green)';
  contactForm.reset();
  } catch {
  formStatus.textContent = '⚠️ Error — email me directly: DylanGrow@gmail.com';
  formStatus.style.color = '#f87171';
  } finally {
  btn.disabled = false;
  btn.style.opacity = '';
  setTimeout(() => { formStatus.textContent = ''; }, 9000);
  }
  });
}

(function calFallback() {
const iframe   = document.getElementById('cal-iframe');
const fallback = document.getElementById('cal-fallback');
if (!iframe || !fallback) return;
let loaded = false;
iframe.addEventListener('load', () => { loaded = true; });
iframe.addEventListener('error', () => {
iframe.style.display = 'none';
fallback.style.display = 'flex';
});
setTimeout(() => {
if (!loaded) {
iframe.style.display = 'none';
fallback.style.display = 'flex';
}
}, 5000);
})();

const weatherIconMap = {
0:'☀️', 1:'🌤️', 2:'⛅', 3:'☁️', 45:'🌫️', 48:'🌫️',
51:'🌦️', 53:'🌦️', 55:'🌧️', 61:'🌧️', 63:'🌧️', 65:'🌧️',
71:'❄️', 73:'❄️', 75:'❄️', 77:'🌨️', 80:'🌦️', 81:'🌧️', 82:'⛈️',
85:'🌨️', 86:'🌨️', 95:'⛈️', 96:'⛈️', 99:'⛈️'
};
const weatherDescMap = {
0:'Clear sky', 1:'Mostly clear', 2:'Partly cloudy', 3:'Overcast',
45:'Foggy', 48:'Icy fog', 51:'Light drizzle', 53:'Drizzle', 55:'Heavy drizzle',
61:'Light rain', 63:'Rain', 65:'Heavy rain', 71:'Light snow', 73:'Snow',
75:'Heavy snow', 77:'Snow grains', 80:'Showers', 81:'Rain showers', 82:'Violent showers',
85:'Snow showers', 86:'Heavy snow showers', 95:'Thunderstorm',
96:'Thunderstorm w/ hail', 99:'Heavy thunderstorm'
};

async function fetchWeather() {
const el = id => document.getElementById(id);
if(!el('weather-loading')) return;

el('weather-loading').style.display = 'flex';
el('weather-data').style.display    = 'none';
el('weather-error').style.display   = 'none';
try {
const url = `https://api.open-meteo.com/v1/forecast?latitude=35.1085&longitude=-77.0441&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph`;
const res = await fetch(url);
if (!res.ok) throw new Error('HTTP ' + res.status);
const data    = await res.json();
const current = data.current;
const code    = current.weather_code ?? current.weathercode ?? 0;
el('w-temp').textContent  = Math.round(current.temperature_2m);
el('w-feels').textContent = Math.round(current.apparent_temperature) + '°';
el('w-humid').textContent = Math.round(current.relative_humidity_2m) + '%';
el('w-wind').textContent  = Math.round(current.wind_speed_10m ?? 0) + ' mph';
el('w-desc').textContent  = weatherDescMap[code] || 'Unknown';
el('w-icon').textContent  = weatherIconMap[code] || '🌡️';
el('w-time').textContent  = new Intl.DateTimeFormat('en-US', {
hour: '2-digit', minute: '2-digit', timeZone: 'America/New_York'
}).format(new Date());
el('weather-loading').style.display = 'none';
el('weather-data').style.display    = 'block';
} catch (err) {
console.warn('Weather fetch failed:', err);
el('weather-loading').style.display = 'none';
el('weather-error').style.display   = 'block';
}
}
fetchWeather();
const wRetry = document.getElementById('weather-retry');
if(wRetry) wRetry.addEventListener('click', fetchWeather);
setInterval(fetchWeather, 10 * 60 * 1000);

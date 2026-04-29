// ============================================================
// SMOOTH SCROLL
// ============================================================
function smoothScrollTo(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
}

// ============================================================
// NAVBAR
// ============================================================
const navbar = document.getElementById('navbar');
const sections = ['about', 'research', 'teaching', 'cv'];

function updateNav() {
  // Scrolled class
  navbar.classList.toggle('scrolled', window.scrollY > 50);

  // Active section
  let current = 'about';
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 110) current = id;
  }
  document.querySelectorAll('.nav-item, .nav-mobile-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === current);
  });
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ============================================================
// MOBILE MENU
// ============================================================
let mobileOpen = false;

function toggleMobile() {
  mobileOpen = !mobileOpen;
  document.getElementById('mobile-menu').classList.toggle('open', mobileOpen);
  document.getElementById('icon-menu').style.display  = mobileOpen ? 'none'  : 'block';
  document.getElementById('icon-close').style.display = mobileOpen ? 'block' : 'none';
}

function closeMobile() {
  mobileOpen = false;
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('icon-menu').style.display  = 'block';
  document.getElementById('icon-close').style.display = 'none';
}

// ============================================================
// EMAIL BUTTON
// ============================================================
const EMAIL = 'alberto.paviasoto' + String.fromCharCode(64) + 'kuleuven.be';
let emailRevealed = false;

document.querySelectorAll('.email-inline').forEach(el => {
  const u = el.dataset.u, d = el.dataset.d;
  if (u && d) el.textContent = u + String.fromCharCode(64) + d;
});

function handleEmail() {
  if (!emailRevealed) {
    emailRevealed = true;
    document.getElementById('email-text').textContent = EMAIL;
    document.getElementById('email-arrow').style.display = 'none';
    document.getElementById('email-copy-btn').style.display = 'inline-flex';
    document.getElementById('email-note').style.display = 'block';
  } else {
    window.location.href = 'mailto:' + EMAIL;
  }
}

function copyEmail(e) {
  e.stopPropagation();
  navigator.clipboard.writeText(EMAIL).then(() => {
    document.getElementById('copy-icon').style.display  = 'none';
    document.getElementById('check-icon').style.display = 'block';
    setTimeout(() => {
      document.getElementById('copy-icon').style.display  = 'block';
      document.getElementById('check-icon').style.display = 'none';
    }, 2000);
  });
}

// ============================================================
// PRESENTATIONS TOGGLE
// ============================================================
let presOpen = false;

function togglePresentations() {
  presOpen = !presOpen;
  document.getElementById('presentations-content').classList.toggle('open', presOpen);
  document.getElementById('presentations-chevron').style.transform = presOpen ? 'rotate(180deg)' : 'rotate(0deg)';
}

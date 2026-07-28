/* Tlove Media Concept — shared site behaviour */
/* Mobile menu */
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', menu.classList.contains('open'));
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

/* Services accordion (home) */
document.querySelectorAll('.svc-head').forEach(h => {
  h.addEventListener('click', () => {
    const svc = h.parentElement, body = svc.querySelector('.svc-body'), open = svc.classList.contains('open');
    document.querySelectorAll('.svc').forEach(s => { s.classList.remove('open'); s.querySelector('.svc-body').style.maxHeight = null; });
    if (!open) { svc.classList.add('open'); body.style.maxHeight = body.scrollHeight + 'px'; }
  });
});
const firstSvc = document.querySelector('.svc.open .svc-body');
if (firstSvc) firstSvc.style.maxHeight = firstSvc.scrollHeight + 'px';

/* Contact form — validation + mailto fallback (replace with a real backend before launch) */
const form = document.querySelector('form[data-contact]');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const subject = encodeURIComponent(`[Tlove Media] ${d.get('service') || 'Quote request'} — ${d.get('name')}`);
    const body = encodeURIComponent(
      `Name: ${d.get('name')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone') || '—'}\nService: ${d.get('service')}\nEvent date: ${d.get('date') || '—'}\n\n${d.get('message')}\n\n— sent from tlovemediaconcept.topservice.ng`
    );
    window.location.href = `mailto:hello@tlovemediaconcept.com?subject=${subject}&body=${body}`;
    const ok = form.querySelector('.ok');
    if (ok) ok.classList.add('show');
  });
}

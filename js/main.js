// Accordion functionality (existierend)
document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', function() {
      // Close all other items
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active');
    });
  });

  // --- Burger / Mobile Nav ---
  var burger = document.getElementById('nav-burger');
  var nav = document.getElementById('main-nav');

  if (burger && nav) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.toggle('open');
      burger.classList.toggle('open');
      var expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!expanded));
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      var isClickInside = nav.contains(e.target) || burger.contains(e.target);
      if (!isClickInside && nav.classList.contains('open')) {
        nav.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });

    // Optional: close menu on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

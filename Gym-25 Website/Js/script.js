// navigation ber responcive
document.addEventListener('DOMContentLoaded', () => {
  function initMobileMenu() {
    const mobile_bars = document.querySelector('.mobile_ber'); // open button
    const navMenu = document.querySelector('.navgation_manu'); // menu
    const closeBtn = document.querySelector('.mobile_ber_close'); // close button

    if (!mobile_bars || !navMenu || !closeBtn) return;

    // Open menu
    mobile_bars.addEventListener('click', () => {
      navMenu.classList.add('open');
    });

    // Close menu
    closeBtn.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  }

  // ✅ ফাংশন কল
  initMobileMenu();
});

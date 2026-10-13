/**
 * HireRight UI Template - Interactive Scripts
 * Handles navigation, modals, country selector, and micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      siteHeader?.classList.toggle('mobile-open');
    });
  }

  // 3. Country Dropdown Selector
  const countryWrapper = document.querySelector('.country-dropdown-wrapper');
  const countryBtn = document.querySelector('.country-btn');
  const countryOptions = document.querySelectorAll('.country-option');
  const selectedCountryName = document.querySelector('.selected-country-name');
  const selectedCountryFlag = document.querySelector('.selected-country-flag');

  if (countryBtn && countryWrapper) {
    countryBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      countryWrapper.classList.toggle('open');
    });

    countryOptions.forEach((option) => {
      option.addEventListener('click', () => {
        const country = option.getAttribute('data-country');
        const flag = option.getAttribute('data-flag');
        if (selectedCountryName && country) selectedCountryName.textContent = country;
        if (selectedCountryFlag && flag) selectedCountryFlag.src = flag;
        countryWrapper.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!countryWrapper.contains(e.target)) {
        countryWrapper.classList.remove('open');
      }
    });
  }

  // 4. Modals (Login & Get Started)
  const loginModal = document.getElementById('loginModal');
  const howItWorksModal = document.getElementById('howItWorksModal');
  const loginButtons = document.querySelectorAll('[data-action="open-login"]');
  const howItWorksButtons = document.querySelectorAll('[data-action="open-how-it-works"]');
  const closeButtons = document.querySelectorAll('[data-action="close-modal"]');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  loginButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(loginModal);
    });
  });

  howItWorksButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(howItWorksModal);
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const modal = btn.closest('.modal-overlay');
      closeModal(modal);
    });
  });

  // Close modal when clicking outside card
  document.querySelectorAll('.modal-overlay').forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach((modal) => {
        closeModal(modal);
      });
    }
  });

  // 5. Interactive Form Submission Demonstration
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = loginForm.querySelector('.modal-submit-btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Verifying Account...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = '✓ Login Successful';
        submitBtn.style.backgroundColor = '#10b981';
        setTimeout(() => {
          closeModal(loginModal);
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.backgroundColor = '';
          loginForm.reset();
        }, 1000);
      }, 900);
    });
  }

  // 6. Interactive Step Highlight
  const stepItems = document.querySelectorAll('.step-item');
  stepItems.forEach((step, idx) => {
    step.addEventListener('mouseenter', () => {
      step.style.transform = 'translateY(-4px)';
    });
    step.addEventListener('mouseleave', () => {
      step.style.transform = '';
    });
  });
});

  (function () {
    const banner = document.getElementById('cookie-banner');
    const confirmation = document.getElementById('cookie-confirmation');

    function setConsent(value) {
      // Replace with real consent logic if needed
      document.cookie = `analytics_consent=${value}; path=/; max-age=31536000`;

      banner.classList.add('is-hidden');
      confirmation.classList.remove('is-hidden');
    }

    document.querySelectorAll('[data-consent]').forEach(button => {
      button.addEventListener('click', () => {
        setConsent(button.dataset.consent);
      });
    });
  })();
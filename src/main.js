document.addEventListener('DOMContentLoaded', function () {
  const scrollUpButton = document.querySelector('.scroll-up');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 600) {
      scrollUpButton.classList.add('show');
      // scrollUpButton.classList.add('border');
    } else {
      scrollUpButton.classList.remove('show');
      // scrollUpButton.classList.remove('border');
    }
  });

  scrollUpButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // scrollUpButton.classList.remove('.scroll-up.border');
  });
});
// document.addEventListener('DOMContentLoaded', function () {
//   showLoader();

//   hideLoader();
// });

// export function showLoader() {
//   const loader = document.querySelector('.loader-container');
//   const scrollUpButton = document.querySelector('.scroll-up');

//   loader.classList.remove('is-hidden-loader');
//   scrollUpButton.classList.remove('show');
// }

// export function hideLoader() {
//   const loader = document.querySelector('.loader-container');
//   loader.classList.add('is-hidden-loader');
// }

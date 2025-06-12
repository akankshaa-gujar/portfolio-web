// function toggleMenu() {
//   const menu = document.querySelector('.menu-links');
//   const icon = document.querySelector('.hamburger-icon');

//   menu.classList.toggle('open');
//   icon.classList.toggle('open');
// }


  function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    menu.classList.toggle('active');
  }



  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch(form.action, {
      method: "POST",
      headers: {
        'Accept': 'application/json'
      },
      body: new FormData(form)
    }).then(response => {
      if (response.ok) {
        form.reset();
        successMessage.style.display = 'block';
      } else {
        alert("Oops! Something went wrong.");
      }
    });
  });

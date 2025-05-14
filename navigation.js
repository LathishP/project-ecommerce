export function setupNavigation() {
  const homeTab = document.getElementById('home-tab');
  const productsTab = document.getElementById('products-tab');
  const aboutTab = document.getElementById('about-tab');
  const contactTab = document.getElementById('contact-tab');

  const homeSection = document.getElementById('home-section');
  const productsSection = document.getElementById('products-section');
  const aboutSection = document.getElementById('about-section');
  const contactSection = document.getElementById('contact-section');
  const loginSection = document.getElementById('login-section');
  const registerSection = document.getElementById('register-section');
  const cartSection = document.getElementById('cart-section');

  function showOnly(sectionToShow) {
    [homeSection, productsSection, aboutSection, contactSection, loginSection, registerSection, cartSection]
      .forEach(sec => {
        sec.style.display = sec === sectionToShow ? 'block' : 'none';
      });
  }

  function showHome() {
    homeSection.style.display = 'block';
    productsSection.style.display = 'block';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    loginSection.style.display = 'none';
    registerSection.style.display = 'none';
    cartSection.style.display = 'none';
  }

  homeTab.addEventListener('click', showHome);
  productsTab.addEventListener('click', () => showOnly(productsSection));
  aboutTab.addEventListener('click', () => showOnly(aboutSection));
  contactTab.addEventListener('click', () => showOnly(contactSection));

  window.showOnly = showOnly; 
}




document.querySelectorAll('.buttons .btn').forEach(button => {
  button.addEventListener('click', function() {
    document.querySelectorAll('.buttons .btn').forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

document.querySelectorAll('.nav-links a, .buttons .btn').forEach(element => {
  element.addEventListener('click', function() {
    document.querySelectorAll('.nav-links a, .buttons .btn').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
  });
});


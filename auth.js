export function setupAuthNavigation() {
  const registerBtn = document.getElementById('register-btn');
  const loginBtn = document.getElementById('login-btn');
  const registerLink = document.querySelector('#login-section .register-link a');
  const backToLoginLink = document.getElementById('back-to-login');

  const loginSection = document.getElementById('login-section');
  const registerSection = document.getElementById('register-section');

  registerLink.addEventListener('click', e => {
    e.preventDefault();
    window.showOnly(registerSection);
  });

  backToLoginLink.addEventListener('click', e => {
    e.preventDefault();
    window.showOnly(loginSection);
  });

  registerBtn.addEventListener('click', () => window.showOnly(registerSection));
  loginBtn.addEventListener('click', () => window.showOnly(loginSection));
}

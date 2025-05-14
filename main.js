import { setupNavigation } from './navigation.js';
import { fetchAndDisplayProducts, setupCategoryFilter } from './products.js';
import { setupCartButton } from './cart.js';
import { setupAuthNavigation } from './auth.js';
import { setupContactForm } from './contact.js';

window.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupCategoryFilter();
  setupCartButton();
  setupAuthNavigation();
  setupContactForm();
  fetchAndDisplayProducts();
});

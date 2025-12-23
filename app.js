/**
 * Theme and Logo Text Toggle Functionality with Web Component
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get button elements
  const themeToggle = document.getElementById('themeToggle');
  const textToggle = document.getElementById('textToggle');
  const sizeSelect = document.getElementById('sizeSelect');
  const logo = document.getElementById('logo');

  // Theme toggle handler
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
    
    // Optional: Save preference to localStorage
    const isDark = document.body.classList.contains('theme-dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Logo text toggle handler
  textToggle.addEventListener('click', () => {
    // Toggle the show-text attribute on the web component
    logo.showText = !logo.showText;
    
    // Optional: Save preference to localStorage
    localStorage.setItem('showLogoText', logo.showText);
  });

  // Logo size change handler
  sizeSelect.addEventListener('change', (e) => {
    logo.size = e.target.value;
    
    // Optional: Save preference to localStorage
    localStorage.setItem('logoSize', e.target.value);
  });

  // Load saved preferences on page load
  loadPreferences();
});

/**
 * Load user preferences from localStorage
 */
function loadPreferences() {
  // Load theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('theme-dark');
  }

  // Load logo text preference
  const savedShowText = localStorage.getItem('showLogoText');
  if (savedShowText !== null) {
    const logo = document.getElementById('logo');
    logo.showText = savedShowText === 'true';
  }

  // Load logo size preference
  const savedSize = localStorage.getItem('logoSize');
  if (savedSize) {
    const logo = document.getElementById('logo');
    const sizeSelect = document.getElementById('sizeSelect');
    logo.size = savedSize;
    sizeSelect.value = savedSize;
  }
}

/**
 * Example functions to demonstrate web component API
 */

// Change logo size programmatically
function setLogoSize(size) {
  const logo = document.getElementById('logo');
  logo.size = size; // Can be: 'small', 'medium', 'large', 'xlarge' or custom like '10rem', '150px'
}

// Toggle text visibility programmatically
function toggleLogoText() {
  const logo = document.getElementById('logo');
  logo.showText = !logo.showText;
}


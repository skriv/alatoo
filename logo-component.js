/**
 * Alatoo Logo Web Component
 * Custom element with configurable size and text visibility
 */

class AlatooLogo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  // Observed attributes - triggers attributeChangedCallback when these change
  static get observedAttributes() {
    return ['size', 'show-text'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  // Getters and setters for properties
  get size() {
    return this.getAttribute('size') || 'medium';
  }

  set size(value) {
    this.setAttribute('size', value);
  }

  get showText() {
    return this.hasAttribute('show-text');
  }

  set showText(value) {
    if (value) {
      this.setAttribute('show-text', '');
    } else {
      this.removeAttribute('show-text');
    }
  }

  // Get size value - use CSS variables or custom value
  getSizeValue() {
    // If custom size (e.g., "10rem", "150px"), use it directly
    if (this.size.match(/^\d+(\.\d+)?(rem|px|em|vw|vh|%)$/)) {
      return this.size;
    }
    
    // Map preset names to CSS variables
    const sizeMap = {
      'small': 'var(--logo-size-small, 4rem)',
      'medium': 'var(--logo-size-medium, 8rem)',
      'large': 'var(--logo-size-large, 12rem)',
      'xlarge': 'var(--logo-size-xlarge, 16rem)'
    };
    
    // Return CSS variable or default to medium
    return sizeMap[this.size] || sizeMap['medium'];
  }

  render() {
    const showText = this.showText;
    const sizeValue = this.getSizeValue();

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          --logo-size: ${sizeValue};
        }

        .logo {
          display: inline-flex;
          align-items: center;
          gap: 0.1em;
          font-size: var(--logo-size);
        }

        .logo-icon,
        .logo-text {
          height: 1em;
          width: auto;
        }

        .logo-icon {
          color: var(--logo-icon-color, #CB9483);
          transition: color 0.3s ease, opacity 0.3s ease;
        }

        .text-1 {
          color: var(--logo-text-1-color, #1F3B3E);
          transition: color 0.3s ease, opacity 0.3s ease;
        }

        .text-2 {
          color: var(--logo-text-2-color, #CB9483);
          transition: color 0.3s ease, opacity 0.3s ease;
        }

        .logo-text {
          display: ${showText ? 'block' : 'none'};
          opacity: ${showText ? '1' : '0'};
          transition: opacity 0.3s ease;
        }
      </style>

      <div class="logo">
        <!-- icon svg -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.4 117.4" aria-label="Logo icon" class="logo-icon">
          <g>
            <path fill="currentColor"
              d="M26.74,64.57l14.85,14.85,38.57-38.57,34.77,34.77c1.61-5.36,2.49-11.04,2.49-16.92C117.4,26.28,91.12,0,58.7,0S0,26.28,0,58.7c0,9.48,2.26,18.43,6.25,26.36l20.48-20.48Z" />
            <path fill="currentColor"
              d="M80.15,53.84l-38.57,38.57-14.85-14.85-15.57,15.57c10.67,14.71,27.98,24.28,47.54,24.28,23,0,42.89-13.23,52.52-32.49l-31.07-31.07Z" />
          </g>
        </svg>

        <!-- text svg -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="130 0 238.08 117.4" aria-label="Logo text" class="logo-text">
          <!-- text-2 -->
          <g class="text-2">
            <path fill="currentColor"
              d="M271.78,85.62h-1.8l-3.3-4.18v4.18h-1.52v-4.18l-3.3,4.18h-1.78l3.68-4.55-3.51-4.27h1.78l3.12,3.9v-3.9h1.52v3.9l3.12-3.9h1.8l-3.53,4.27,3.7,4.55Z" />
            <path fill="currentColor"
              d="M284.05,76.81h1.23v8.81h-1.52v-6.19l-4.88,6.19h-1.23v-8.81h1.52v6.19l4.88-6.19Z" />
            <path fill="currentColor"
              d="M299.37,76.81v8.81h-1.53v-7.33h-3.47v3.6c0,2.89-1.22,3.93-3.33,3.74v-1.45c1.2.16,1.8-.44,1.8-2.33v-5.04h6.54Z" />
            <path fill="currentColor"
              d="M310.24,85.85c-1.29,0-2.4-.44-3.3-1.34-.9-.9-1.34-1.99-1.34-3.3s.44-2.4,1.34-3.3c.9-.9,2.01-1.34,3.3-1.34s2.4.44,3.3,1.34c.9.9,1.36,1.99,1.36,3.3s-.46,2.4-1.36,3.3c-.9.9-2.01,1.34-3.3,1.34ZM312.46,83.45c.6-.6.9-1.34.9-2.24s-.3-1.64-.9-2.24-1.34-.9-2.22-.9-1.6.3-2.2.9-.9,1.34-.9,2.24.3,1.64.9,2.24,1.34.9,2.2.9,1.62-.3,2.22-.9Z" />
            <path fill="currentColor"
              d="M327.51,76.81h1.23v8.81h-1.52v-6.19l-4.88,6.19h-1.23v-8.81h1.52v6.19l4.88-6.19ZM322.56,75.48v-1.34h4.76v1.34h-4.76Z" />
            <path fill="currentColor"
              d="M268.4,103.83h-1.9l-4.02-4.18v4.18h-1.53v-8.81h1.53v3.9l3.81-3.9h1.97l-4.21,4.27,4.35,4.55Z" />
            <path fill="currentColor"
              d="M277.56,104.06c-1.29,0-2.4-.44-3.3-1.34-.9-.9-1.34-1.99-1.34-3.3s.44-2.4,1.34-3.3c.9-.9,2.01-1.34,3.3-1.34s2.4.44,3.3,1.34c.9.9,1.36,1.99,1.36,3.3s-.46,2.4-1.36,3.3c-.9.9-2.01,1.34-3.3,1.34ZM279.78,101.66c.6-.6.9-1.34.9-2.24s-.3-1.64-.9-2.24-1.34-.9-2.22-.9-1.6.3-2.2.9-.9,1.34-.9,2.24.3,1.64.9,2.24,1.34.9,2.2.9,1.62-.3,2.22-.9Z" />
            <path fill="currentColor"
              d="M297.25,95.02v8.81h-1.5v-6.4l-2.8,4.51h-.19l-2.8-4.51v6.4h-1.52v-8.81h1.64l2.77,4.46,2.77-4.46h1.64Z" />
            <path fill="currentColor" d="M311.63,95.02v8.81h-1.53v-7.35h-4.57v7.35h-1.53v-8.81h7.63Z" />
            <path fill="currentColor"
              d="M325.71,95.02v8.81h-1.53v-7.33h-3.47v3.6c0,2.89-1.22,3.93-3.33,3.74v-1.45c1.2.16,1.8-.44,1.8-2.33v-5.04h6.54Z" />
            <path fill="currentColor"
              d="M333.52,100.13c.3,1.57,1.52,2.49,3.19,2.49,1.16,0,2.01-.42,2.54-1.29l1.3.74c-.86,1.32-2.15,1.99-3.88,1.99-1.39,0-2.54-.44-3.42-1.3-.86-.88-1.3-1.99-1.3-3.33s.42-2.43,1.29-3.31,1.97-1.32,3.33-1.32c1.29,0,2.34.46,3.16,1.38.83.9,1.23,1.99,1.23,3.28,0,.23-.02.46-.05.69h-7.39ZM333.52,98.79h5.89c-.26-1.67-1.43-2.56-2.84-2.56-1.64,0-2.79,1-3.05,2.56Z" />
            <path fill="currentColor"
              d="M354.58,103.83h-1.9l-4.02-4.18v4.18h-1.53v-8.81h1.53v3.9l3.81-3.9h1.97l-4.21,4.27,4.35,4.55Z" />
            <path fill="currentColor"
              d="M360.43,102.74c-.88-.9-1.32-1.99-1.32-3.31s.44-2.42,1.32-3.3c.88-.9,1.99-1.34,3.31-1.34,1.75,0,3.21.9,3.9,2.31l-1.29.74c-.44-.93-1.43-1.55-2.61-1.55-.88,0-1.62.3-2.22.9-.58.6-.88,1.34-.88,2.24s.3,1.62.88,2.22c.6.6,1.34.9,2.22.9,1.18,0,2.17-.6,2.66-1.53l1.3.76c-.76,1.39-2.26,2.29-3.97,2.29-1.32,0-2.43-.44-3.31-1.32Z" />
          </g>

          <!-- text-1 -->
          <g class="text-1">
            <polygon fill="currentColor"
              points="224.33 65.39 223.29 65.39 223.29 68.02 225.77 68.02 225.77 103.86 230.51 103.86 230.51 82.81 230.51 65.39 224.33 65.39" />
            <polygon fill="currentColor"
              points="250.75 65.39 245.04 65.39 245.23 67.42 230.51 82.81 247.94 103.86 254.19 103.86 235.33 81.52 250.75 65.39" />
            <path fill="currentColor"
              d="M146.88,65.39h-15.94v2.58h2.47v35.89h4.75v-19.23c7.94,0,10.79-1.51,11.23-1.68,10.33-3.99,7.3-17.55-2.51-17.55ZM138.16,82.05v-14.08h6.17c8.56,0,12.56,14.08-6.17,14.08Z" />
            <path fill="currentColor"
              d="M212,82.95c10.33-3.99,7.3-17.55-2.51-17.55h-15.94v2.58h2.47v35.89h4.75v-35.89h6.17c8.65,0,11.71,13.7-3.78,13.7l1.43,2.73v.09h.05s10.14,19.37,10.14,19.37h6.25l-10.9-20.25c1.12-.32,1.69-.6,1.86-.67Z" />
            <path fill="currentColor"
              d="M171.19,65.39h-3.69v2.58h2.32l-15.27,35.85,2.74.04,4.09-9.59h20.4l4.26,9.59h5.26l-17.12-38.47h-2.99ZM162.51,91.64l8.87-20.82,9.24,20.82h-18.11Z" />
            <path fill="currentColor"
              d="M174.71,51.85h22.56l-1.96-3.42c-4.44.53-9.92.84-15.86.84V13.39h-7.22v2.58h2.47v35.89Z" />
            <path fill="currentColor"
              d="M302.98,12.56c-11.08,0-20.06,8.98-20.06,20.06s8.98,20.06,20.06,20.06,20.06-8.98,20.06-20.06-8.98-20.06-20.06-20.06ZM312.49,47.47c-7.12,4.56-17.15,1.61-22.4-6.59-5.25-8.2-3.74-18.55,3.38-23.11,7.12-4.56,17.15-1.61,22.4,6.59,5.25,8.2,3.74,18.54-3.38,23.11Z" />
            <path fill="currentColor"
              d="M348.03,12.56c-11.08,0-20.06,8.98-20.06,20.06s8.98,20.06,20.06,20.06,20.06-8.98,20.06-20.06-8.98-20.06-20.06-20.06ZM357.54,47.47c-7.12,4.56-17.15,1.61-22.4-6.59-5.25-8.2-3.74-18.55,3.38-23.11,7.12-4.56,17.15-1.61,22.4,6.59,5.25,8.2,3.74,18.54-3.38,23.11Z" />
            <path fill="currentColor"
              d="M266.49,13.39h-11.24l1.96,3.42c4.44-.53,3.34-.84,9.28-.84v35.89h4.75V15.96c5.93,0,4.83.31,9.28.84l1.96-3.42h-15.98Z" />
            <path fill="currentColor"
              d="M133.69,51.85l4.09-9.59h20.4l4.26,9.59h5.26l-17.12-38.47h-6.68v2.58h2.32l-15.27,35.85,2.74.04ZM147.76,18.81l9.24,20.82h-18.11l8.87-20.82Z" />
            <path fill="currentColor"
              d="M204.56,51.85l4.09-9.59h20.4l4.26,9.59h5.26l-17.12-38.47h-6.68v2.58h2.32l-15.27,35.85,2.74.04ZM218.63,18.81l9.24,20.82h-18.11l8.87-20.82Z" />
            <rect fill="currentColor" x="242.18" y="31.3" width="13.08" height="2.63" />
          </g>
        </svg>
      </div>
    `;
  }
}

// Register the custom element
customElements.define('alatoo-logo', AlatooLogo);


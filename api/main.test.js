import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';

document.body.innerHTML = `
  <div id="nav-bar">
    <div id="hover-indicator"></div>
    <button class="button-box"></button>
    <button class="button-box"></button>
  </div>
`;

import { setupButtonHoverEffect } from './main.js';

describe('Button hover effect', () => {
});

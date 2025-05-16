
import { css } from 'lit';

export const styles = css`

* {
  margin: 0;
  padding: 0;
}

button {
  padding: 16px 24px;
  border-radius: 24px;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
  font-family: var(--spartan-font);
  background-color: var(--primary-color);
  color: var(--button-text-color);
}

button:hover {
  background-color: var(--primary-color-light);
  transition: all 0.3s ease-in-out;
}

fontawesome-icon {
  --icon-size: 3.2rem;
}

button[variant=icon] {
  padding: 8px;
  padding-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

button[variant=icon] fontawesome-icon {
  --icon-color: var(--button-text-color);
}
`;

export default styles;

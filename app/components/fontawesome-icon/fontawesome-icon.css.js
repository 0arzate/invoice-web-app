
import { css } from 'lit';

export const styles = css`

* {
  margin: 0;
  padding: 0;
}

:host {
  --icon-size: 3.5rem;
  --icon-color: var(--text-color);
}

svg {
  width: var(--icon-size);
  color: var(--icon-color);
}
`;

export default styles;

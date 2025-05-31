
import { css } from 'lit';

export const styles = css`

* {
  margin: 0;
  padding: 0;
}

button {
  color: var(--primary-color);
}

.title {
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 3.6rem;
  letter-spacing: -0.1rem;
}

main {
  display: grid;
  grid-template-columns: min-content 1fr;
}
`;

export default styles;

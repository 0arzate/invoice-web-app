import { css } from 'lit'

export const styles = css`

* {
  margin: 0;
  padding: 0;
}

:host {
  --notification-text-color: #ffffff;
}

main {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--error-color);
  padding: 15px 10px;
}

main p {
  font-size: 1.7rem;
  font-weight: 400;
  color: var(--notification-text-color);
}

@media (max-width: 768px) {
  main {
    padding: 10px;
  }
  main p {
    font-size: 1.4rem;
  }
}
`

export default styles

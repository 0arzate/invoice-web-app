import { css } from 'lit'

export const styles = css`

* {
  margin: 0;
  padding: 0;
}

main {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100dvw;
  height: 100dvh;
  display: grid;
  place-content: center;
  background-color: var(--loader-bg-color);
}

main section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

main section fontawesome-icon {
  --icon-size: 4.5rem;
  --icon-color: var(--loader-text-color);
  will-change: transform;
  animation: rotate 1.6s linear infinite;
  margin-bottom: 20px;
}

main section h2 {
  color: var(--loader-text-color);
  text-align: center;
  font-size: 1.9rem;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`

export default styles

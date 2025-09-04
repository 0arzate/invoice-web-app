import { css } from 'lit'

export const styles = css`

* {
  margin: 0;
  padding: 0;
}

main {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: calc(50% - 103px);
  right: 0;
  bottom: 0;
}

section {
  position: absolute;
  left: calc(-50% + 206px);
  background-color: var(--bg-color);
  width: calc(50% - 103px);
  height: 100vh;
  overflow-y: auto;
}

button {
  background-color: transparent;
  width: calc(50% + 103px);
  height: 100vh;
}
`

export default styles

import { css } from 'lit'

export const styles = css`

* {
  margin: 0;
  padding: 0;
}

* {
  margin: 0px;
  padding: 0px;
}

main {
  width: 100dvw;
}

slot[name=header] {
  position: fixed;
  width: 100%;
}

section {
  padding-left: 103px;
  max-height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
}

@media (max-width: 768px) {
  section {
    padding-left: 0;
  }
}
`

export default styles

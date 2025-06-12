import { css } from 'lit'

export const styles = css`

* {
  margin: 0;
  padding: 0;
}

:host {
  --bg-color: #373B53;
  --icon-buttom-bg-color: #9277FF;
  --icon-top-bg-color: #7C5DFA;
  --icon-theme-color: #DFE3FA;
}

header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100dvh;
  background-color: var(--bg-color);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.header__logo {
  position: relative;
  background-color: var(--icon-top-bg-color);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.header__logo fontawesome-icon {
  position: absolute;
  margin: 32px;
  top: -5px;
  right: 5px;
  --icon-color: #fff;
  --icon-size: 3rem;
}

.header__logo span:nth-child(1) {
  display: block;
  width: 103px;
  background-color: var(--icon-top-bg-color);
  height: 50px;
  border-top-right-radius: 20px;
}

.header__logo span:nth-child(3) {
  display: block;
  width: 103px;
  background-color: var(--icon-buttom-bg-color);
  height: 50px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.header__theme {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
}

.header__theme fontawesome-icon {
  padding-bottom: 32px;
  --icon-size: 2rem;
  --icon-color: var(--icon-theme-color);
  margin: 0px auto;
}
`

export default styles

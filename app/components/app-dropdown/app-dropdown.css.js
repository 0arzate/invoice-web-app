import { css } from 'lit'

export const styles = css`

* {
  margin: 0;
  padding: 0;
}

main {
  display: flex;
  justify-content: center;
  gap: 16px;
  position: relative;
}

main p {
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
}

fontawesome-icon {
  --icon-size: .9rem;
  --icon-color: var(--primary-color);
}

fontawesome-icon:hover {
  cursor: pointer;
  transform: scale(1.3);
  will-change: auto;
}

ul {
  margin-bottom: 16px;
  font-size: 1.2rem;
  font-weight: bold;
  list-style: none;
  padding: 24px;
  padding-bottom: 8px;
  width: max-content;
  background-color: var(--dropdown-bg-color);
  border-radius: 8px;
  position: absolute;
  top: calc(100% + 23px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
}

li {
  display: flex;
  gap: 13px;
  margin-bottom: 16px;
}

li input {
  accent-color: var(--primary-color);
}
`

export default styles

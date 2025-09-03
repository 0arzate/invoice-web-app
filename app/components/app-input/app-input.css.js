import { css } from 'lit'

export const styles = css`

* {
  margin: 0;
  padding: 0;
}

label {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--secondary-color);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
}

label input {
  color: var(--text-color);
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
  padding: 17px 20px 16px 20px;
  font-weight: bold;
  background-color: var(--input-background-color);
  border: var(--input-border-color) 1px solid;
  border-radius: 4px;
}
`

export default styles

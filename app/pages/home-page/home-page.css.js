import { css } from 'lit'

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
  max-height: 100vh;
  overflow-x: hidden;
}

app-header {
  max-height: 100vh;
}

section {
  padding-top: 72px;
  width: 100%;
  max-width: 730px;
  margin: 0px auto;
  max-height: fit-content;
}

.invoices-header {
  height: min-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.invoices-header h1 {
  font-weight: bold;
  font-size: 3.2rem;
  letter-spacing: -0.1rem;
}

.invoices-header h2 {
  margin-top: 8px;
  font-weight: medium;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: 0.25rem;
  color: var(--text-color-light);
}

ul {
  margin: 65px 0px;
}

.invoices-empty {
  margin-top: 121px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.invoices-empty img {
  width: 100%;
  max-width: 250px;
  margin-bottom: 64px;
}

.invoices-empty h3 {
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: -0.063rem;
  margin-bottom: 24px;
}

.invoices-empty p {
  width: 220px;
  font-weight: 400;
  font-size: 1.2rem;
  letter-spacing: 0.025rem;
  color: var(--text-color-light);
}
`

export default styles

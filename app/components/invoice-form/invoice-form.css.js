import { css } from 'lit'

export const styles = css`

* {
  margin: 0;
  padding: 0;
}

form {
  padding: 56px 57px;
}

form h2 {
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 3.2rem;
  letter-spacing: -0.05rem;
  margin-bottom: 48px;
}

form h3 {
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
  margin-bottom: 24px;
  color: var(--primary-color);
}

.three-columns {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 24px;
}

.two-columns {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: 24px;
}

.bill-to {
  margin-top: 48px;
}

.bill-to app-input {
  display: block;
  margin-bottom: 24px;
}

h4 {
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 3.2rem;
  letter-spacing: -0.038rem;
  margin-bottom: 16px;
  color: #777F98;
}

.item-list {
  display: grid;
  grid-template-columns: 214px 46px 100px 40px 20px;
}

p {
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
  color: var(--text-color-light);
}

button-default[variant=full-icon] {
  display: block;
  margin-top: 18px;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 39px;
  padding: 56px 57px;
  padding-top: 0px;
}

.actions button-default[variant=dark] {
  display: inline-block;
  margin-right: 8px;
}

@media (max-width: 510px) {
  form {
    padding: 32px 24px;
  }
  .three-columns {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
  .item-list {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }
  .actions {
    background-color: var(--invoice-card-bg-color);
    padding: 21px 24px;
    display: flex;
  }
  .actions div {
    display: flex;
  }
}
`

export default styles

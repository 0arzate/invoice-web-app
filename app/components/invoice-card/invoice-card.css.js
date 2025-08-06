import { css } from 'lit'

export const styles = css`

* {
  margin: 0;
  padding: 0;
}

article {
  font-size: 1.2rem;
  padding: 16px 32px;
  padding-right: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  background-color: var(--invoice-card-bg-color);
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
}

article h2 {
  grid-area: id;
  font-size: 1.2rem;
  font-weight: 500;
}

h2 span {
  color: var(--secondary-color);
}

.light-text {
  color: var(--secondary-color);
}

.invoice-receiver {
  grid-area: name;
}

article fontawesome-icon {
  cursor: pointer;
  --icon-size: 8px;
  --icon-color: var(--primary-color);
}

.status {
  grid-area: status;
  padding: 12px 0px;
  min-width: 104px;
  text-align: center;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.invoice-amount {
  grid-area: amount;
  font-weight: 500;
  font-size: 1.6rem;
  color: var(--text-color);
}

.status-success {
  background-color: var(--success-bg-color);
  color: var(--success-color);
}

.status-success fontawesome-icon {
  --icon-color: var(--success-color);
}

.status-warning {
  background-color: var(--warning-bg-color);
  color: var(--warning-color);
}

.status-warning fontawesome-icon {
  --icon-color: var(--warning-color);
}

.status-draft {
  background-color: var(--draft-bg-color);
  color: var(--draft-color);
}

.status-draft fontawesome-icon {
  --icon-color: var(--draft-color);
}

.status p {
  margin-top: 2px;
}

@media (max-width: 510px) {
  article {
    max-height: 134px;
    padding: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: "id name" "date status" "amount status";
  }
  article fontawesome-icon {
    display: none;
  }
  h2 {
    margin-bottom: 24px;
  }
  .invoice-date {
    margin-top: auto;
  }
  .invoice-receiver {
    margin-left: auto;
    margin-bottom: auto;
  }
  .invoice-amount {
    margin-top: auto;
  }
  .status {
    margin-left: auto;
    margin-top: 27px;
    max-width: 104px;
  }
}
`

export default styles

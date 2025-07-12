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
}

article h2 {
  font-size: 1.2rem;
  font-weight: 500;
}

h2 span {
  color: var(--secondary-color);
}

.light-text {
  color: var(--secondary-color);
}

article fontawesome-icon {
  --icon-size: 8px;
  --icon-color: var(--primary-color);
}

.status {
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
`

export default styles

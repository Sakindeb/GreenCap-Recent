import React, { useEffect, useState } from "react";
import styles from "../styles/Client.module.css";

export default function Data() {
  const [data, setData] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('/api/greencap/2')
      .then(response => response.json())
      .then(data => setData(data));

    fetch('/api/transaction/')
      .then(response => response.json())
      .then(data => {
        const userTransactions = data.filter(transaction => transaction.user === 2);
        setTransactions(userTransactions);
      });
  }, []);

  return (
    <div>
      <div className={styles.data}>
        <div className={styles.creditscontainer}>
          <div className={styles.creditssection}>
            <h2>Available Credits</h2>
            <p>{data.account_balance}</p>
          </div>
          <div className={styles.creditssection}>
            <h2>Purchased Credits</h2>
            <p>{data.account_balance}</p>
          </div>
          <div className={styles.creditssection}>
            <h2>Projects Involved</h2>
            <p>{data.projects_involved}</p>
          </div>
        </div>
      </div>

      <div className={styles.transactions}>
        <h2>Recent Transactions</h2>
        <table className={styles.transactionTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Project</th>
              <th>Credits Purchased</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{new Date(transaction.timestamp).toDateString()}</td>
                <td>{`Project ${transaction.project}`}</td>
                <td>{transaction.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

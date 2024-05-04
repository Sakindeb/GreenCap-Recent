import React, { useEffect, useState } from "react";
import styles from "../styles/Client.module.css";

export default function Orders() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    

    fetch('/api/transaction/')
      .then(response => response.json())
      .then(data => {
        const userTransactions = data.filter(transaction => transaction.user === 2);
        setTransactions(userTransactions);
      });
  }, []);

  return (
    <div>
      

      <div className={styles.transaction}>
        <h2>My Transactions</h2>
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

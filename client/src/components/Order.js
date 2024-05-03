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
        <h2>Recent Transactions</h2>
        <p>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              Project Name: {transaction.project}, Credits Purchased: {transaction.quantity}
            </li>
            
          ))}
        </ul>
        </p>
      </div>
    </div>
  )
}

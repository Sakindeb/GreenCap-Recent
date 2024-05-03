import React, { useEffect, useState } from "react";
import styles from "../styles/Client.module.css";

export default function Greet() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/greencap/2')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);



  return (
    <div>
      <div className={styles.greet}>
        <h1><strong>Welcome to GreenCap:  {data.username} :)</strong> </h1>
      </div>
    </div>
  )
}

"use client";

import Link from "next/link";
// Unicode for gear icon
export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Tarteela</h2>

      <div style={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/surahs">Surahs</Link>
        <Link href="/duas">Duas</Link>
        <Link href="/favorites">Favorites</Link>
        <p style = {styles.p}>&#x26ED;</p>
        <p style = {styles.p}>&#128100;</p>
        
      
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    backgroundColor: "#AF8D11",
    color: "#2D5A27",
  },
  logo: {
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
     alignItems: "center",
  },
  p: {
    color: "#2D5A27",
  }
};
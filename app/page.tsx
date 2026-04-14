
export default function Home() {
  return (
    <main style={ styles.main}>
      <h1 style = {styles.h1}>Tarteela App</h1>
      <p style = {styles.p}>Quran Tilawat & Duas</p>
    </main>
  );
}


const styles = {
  main: {
    padding: "50px",
    backgroundColor: "#AF8D11",
  },
  p:{
    fontSize: 18,
    color: "#2D5A27",
  },
  h1: {
    fontSize: 32,
    color: "#2D5A27",
  }
};
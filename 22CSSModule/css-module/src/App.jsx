import styles from "./App.module.css"

function App() {
  return (
    <>
      <h2 className={styles["e-heading"] } >List</h2>
      <ul>
        <li>item-1</li>
        <li>item-2</li>
        <li>item-3</li>
      </ul>
    </>
  )
}

export default App

import Container from "./components/Container"
import ItemInput from "./components/ItemInput";
import List from "./components/List"
import styles from "./App.module.css"

function App() {

  var itemList = ['Pen', 'Notebook', 'Pencil', 'Eraser', 'Sharpener', 'Ruler'];

  const HandleOnChange = (event) =>
  {
      console.log(event); 
      console.log(event.target.value);
  }

  return (
    <>
      <Container>
        
        <h2 className={styles.Heading} >Grocery Items</h2>
        <ItemInput HandleOnChange = {HandleOnChange} />
        <ul >
          {itemList.map((item) => <List itemname={item} key={item}/>)}
        </ul>
      </Container>
    </>
  )
}

export default App

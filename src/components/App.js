import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Createnewproduct from "./CreateNewProduct/Createnewproduct";
import Savedproducts from "./Savedproducts";
import Favorites from "./Favorites";
import MyCompanyProducts from "./MyCompanyProducts";

function App() {

  const [makeupList, setMakeupList] = useState([])
  const [displayedList, setDisplayedList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const baseUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json?'


  const fetchMaybellineList = async () => {
    const response = await fetch(`${baseUrl}brand=maybelline`)
    const maybellineListArray = await response.json();
    setIsLoading(false)
    setMakeupList(maybellineListArray)
    setDisplayedList(maybellineListArray.filter(makeup => {
      return parseFloat(makeup.price) != "0.0" 
    }))

  }
  const fetchMakeupList = async () => {
    const response = await fetch(`${baseUrl}`)
    const makeupListArray = await response.json();
    setIsLoading(false)
    setMakeupList(makeupListArray)
    setDisplayedList(makeupListArray.filter(makeup => {
      return parseFloat(makeup.price) != "0.0" 
    }))
  }

  // function to create new array when a new make-up is added
  const handleMakeUpSubmit = (newMakeUp) => {
    const updatedMakeUpArray = [...makeupList , newMakeUp]
    setMakeupList(updatedMakeUpArray)
  }

  useEffect(() => {
    fetchMaybellineList()
    fetchMakeupList()
  }, [])

  
function ifImageError(id) {
  console.log('removing image')
  setDisplayedList(displayedList.filter(makeup => {
    return makeup.id !== id
  }))
}




  console.log('makeupList', makeupList)
  console.log('displayedMakeupList', displayedList)
  // console.log('newdisplayedMakeupList', newdisplayedMakeupList)
  
  return (
  <div>
    <NavBar />
    <Switch>
      <Route path='/favorites'>
        <Favorites />
      </Route>
      <Route path='/savedproducts/'>
        <Savedproducts />
      </Route>
      <Route path='/mycompanyproducts'>
        <MyCompanyProducts />
      </Route>
      <Route path='/createnewproduct'>
        <Createnewproduct onAddMakeUp={handleMakeUpSubmit} />
      </Route>

      <Route path='/'>
        {isLoading? <h1>Loading..</h1>: <Home ifImageError={ifImageError} makeupList={displayedList}/>}
      </Route>
    </Switch>
  </div>
  )
}

export default App;

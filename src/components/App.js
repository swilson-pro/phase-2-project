import React, {useState, useEffect} from "react";

import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Createnewproduct from "./Createnewproduct";
import Savedproducts from "./Savedproducts";
import Favorites from "./Favorites";
import MyCompanyProducts from "./MyCompanyProducts";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

function App() {

  const [makeupList, setMakeupList] = useState([])
  const [displayedList, setDisplayedList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [newProductArray , setNewProductArray]=useState([])

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

  const fetchNewArray = async () => {
    const res = await fetch('http://localhost:3000/products')
    const newMakeUpArrayFetch = await res.json();
    setNewProductArray(newMakeUpArrayFetch)
  }

  // function to create new array when a new make-up is added
  const handleMakeUpSubmit = (newMakeUp) => {
    const updatedMakeUpArray = [...makeupList , newMakeUp]
    setMakeupList(updatedMakeUpArray)
  }

  useEffect(() => {
    fetchMaybellineList()
    fetchMakeupList()
    fetchNewArray()
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
        <Createnewproduct className="create-new-product" onAddMakeUp={handleMakeUpSubmit} newProductArray={newProductArray} setNewProductArray={setNewProductArray}/>
      </Route>

      <Route path='/'>
        {isLoading? <h1>Loading..</h1>: <Home ifImageError={ifImageError} makeupList={displayedList}/>}
      </Route>
    </Switch>
  </div>
  )
}

export default App;

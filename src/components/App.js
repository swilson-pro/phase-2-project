import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Createnewproduct from "./Createnewproduct";
import Savedproducts from "./Savedproducts";
import Favorites from "./Favorites";
import MyCompanyProducts from "./MyCompanyProducts";
import Search from './Search'

function App() {

  const [makeupList, setMakeupList] = useState([])
  const [displayedList, setDisplayedList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [brand, setBrand] = useState('revlon')
  const [url, setUrl] = useState(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)


  const baseUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json?'


  // const fetchMaybellineList = async () => {
  //   const response = await fetch(`${baseUrl}brand=maybelline`)
  //   const maybellineListArray = await response.json();
  //   setIsLoading(false)
  //   setMakeupList(maybellineListArray)
  //   setDisplayedList(maybellineListArray.filter(makeup => {
  //     return parseFloat(makeup.price) != "0.0" 
  //   }))

  // }
  const fetchMakeupList = async () => {
    const response = await fetch(url)
    const makeupListArray = await response.json();
    setIsLoading(false)
    setMakeupList(makeupListArray)
    setDisplayedList(makeupListArray.filter(makeup => {
      return parseFloat(makeup.price) != "0.0" 
    }))
  }

  useEffect(() => {
    //fetchMaybellineList()
    fetchMakeupList()
  }, [url])

  
function ifImageError(id) {
  console.log('removing image')
  setDisplayedList(displayedList.filter(makeup => {
    return makeup.id !== id
  }))
}

const newDisplayedList = displayedList.filter(makeup => {
  return makeup.name.toLowerCase().includes(searchTerm.toLowerCase());
});

function updateBrand(e) {
  // setBrand(e.target.value)
  // console.log('${baseUrl}brand=${brand}', `${baseUrl}brand=${e.target.value}`)
  setUrl(`${baseUrl}brand=${e.target.value}`)
console.log('url', url)
}

console.log('brand', brand)
  console.log('makeupList', makeupList)
  console.log('displayedList', displayedList)
  console.log('newDisplayedList', newDisplayedList)
  
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
        <Createnewproduct />
      </Route>
      <Route path='/'>
        {isLoading? <h1>Loading..</h1>: <Home updateBrand={updateBrand} brand={brand} setSearchTerm={setSearchTerm} searchTerm={searchTerm} ifImageError={ifImageError} makeupList={newDisplayedList}/>}
      </Route>
    </Switch>
  </div>
  )
}

export default App;

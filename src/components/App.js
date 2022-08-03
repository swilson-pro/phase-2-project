import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import NewProductForm from "./NewProductForm";
import Savedproducts from "./Savedproducts";
import Favorites from "./Favorites";
import MyProducts from "./MyProducts";
import Search from './Search'

function App() {

  const [makeupList, setMakeupList] = useState([])
  const [displayedList, setDisplayedList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [isBrandSelected, setIsBrandSelected] = useState(true)
  const [brand, setBrand] = useState('maybelline')
  const [prodType, setProdType] = useState('blush')
  let [url, setUrl] = useState(`https://makeup-api.herokuapp.com/api/v1/products.json?`)
  const [favoritesArray, setFavoritesArray] = useState([])

  const baseUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json?'

//console.log('brand', brand)
  
  const fetchMakeupList = async (fetchwhat) => {
    const response = await fetch(fetchwhat)
    const makeupListArray = await response.json();
    setIsLoading(false)
    setMakeupList(makeupListArray)
    setDisplayedList(makeupListArray.filter(makeup => {
      return parseFloat(makeup.price) != "0.0" 
    }))
  }

  const fetchFavoritesList = async () => {
    const response = await fetch('http://localhost:3000/favorites')
    const favoritesListArray = await response.json()
    setFavoritesArray(favoritesListArray)
  }

  useEffect(() => {
    
    console.log('does brand exist?', brand ? 'brand exists': 'brand does not exist')
    console.log('does prod type exist?', prodType ? 'prodType exists' : 'prodType does not exist')

    if (brand && prodType) { fetchMakeupList(`${url}brand=${brand}&product_type=${prodType}`) } 
    else if (brand) { fetchMakeupList(`${url}brand=${brand}`) }
    else if (prodType) { fetchMakeupList(`${url}product_type=${prodType}`) }
    else { fetchMakeupList(`${url}`) }
    fetchFavoritesList()

    // brand ? fetchMakeupList(`${url}brand=${brand}`) : fetchMakeupList(`${url}`)

  }, [prodType, brand, url] )
  
const handleAddProduct = (newproduct) => {
  setMakeupList([...makeupList, newproduct])
}

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
//  e.target.value == 'all' ? setUrl(baseUrl) :
console.log('e.target.value', e.target.value)
  setBrand(e.target.value)
  
 // setUrl(`${baseUrl}brand=${e.target.value}`)
}

function updateProdType(e) {
  setProdType(e.target.value)
}

// console.log('brand', brand)
//   console.log('makeupList', makeupList)
//   console.log('displayedList', displayedList)


  
  const newFavorite = (newFav) => {
    const updatedFavoritesArray = [...favoritesArray, newFav]
    setFavoritesArray(updatedFavoritesArray)
  }

  const removeFavorite = (id) => {
    console.log('remove from favorites:', id)
    const newlyUpdatedFavoritesArray = favoritesArray.filter((item) => item.id !== id);
    setFavoritesArray(newlyUpdatedFavoritesArray)
} 

console.log('favoritesArray', favoritesArray)

  return (
  <div>
    <NavBar />
    <Switch>
      <Route path='/favorites'>
        <Favorites makeupList={favoritesArray} removeFavorite={removeFavorite} />
      </Route>
      <Route path='/savedproducts/'>
        <Savedproducts />
      </Route>
      <Route path='/myproducts'>
        <MyProducts />
      </Route>
      <Route path='/newproductform'>
        <NewProductForm handleAddProduct={handleAddProduct}/>
      </Route>
      <Route path='/'>
        {isLoading? <h1>Loading..</h1>: <Home favoritesArray={favoritesArray} removeFavorite={removeFavorite} newFavorite={newFavorite} updateProdType={updateProdType} prodType={prodType} updateBrand={updateBrand} brand={brand} setSearchTerm={setSearchTerm} searchTerm={searchTerm} ifImageError={ifImageError} makeupList={newDisplayedList}/>}
      </Route>
    </Switch>
  </div>
  )
}

export default App;

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import NewProductForm from "./NewProductForm";
import Savedproducts from "./Savedproducts";
import Favorites from "./Favorites";
import MyProducts from "./MyProducts";
import Search from './Search'
import userEvent from "@testing-library/user-event";

function App() {

  const [makeupList, setMakeupList] = useState([])
  const [displayedList, setDisplayedList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [isBrandSelected, setIsBrandSelected] = useState(true)
  const [brand, setBrand] = useState('maybelline')
  const [prodType, setProdType] = useState('')
  let [url, setUrl] = useState(`https://makeup-api.herokuapp.com/api/v1/products.json?`)
  const [favoritesArray, setFavoritesArray] = useState([])
  const [myProductsList, setMyProductsList] = useState([])
  const [optionArray, setOptionArray] = useState([{ url: '', brand: 'All Brands' }, { url: 'revlon', brand: 'Revlon' }, { url: 'maybelline', brand: 'Maybelline' }, { url: 'covergirl', brand: 'Covergirl' }, { url: 'dior', brand: 'Dior' }, { url: 'colourpop', brand: 'Colourpop' }, { url: 'almay', brand: 'Almay' }, { url: 'alva', brand: 'Alva' }, { url: 'anna%20sui', brand: 'Anna Sui' }, { url: 'annabelle', brand: 'Annabelle' }, { url: 'benefit', brand: 'Benefit' }, { url: 'boosh', brand: 'Boosh' }, { url: 'burt%27s%20bees', brand: "Burt's Bees" }, { url: 'butter%20london', brand: 'Butter London' }, { url: 'c%27est%20moi', brand: "C'est moi" }, { url: 'cargo%20cosmetics', brand: 'Cargo Cosmetics' }, { url: 'china%20glaze', brand: 'China Glaze' }, { url: 'clinique', brand: 'Clinique' }, { url: 'coastal%20classic%20creation', brand: 'Coastal Classic Creation' }, { url: 'dalish', brand: 'Dalish' }, { url: 'deciem', brand: 'Deciem' }, { url: 'dr.%20hauschka', brand: 'Dr. Hauschka' }, { url: 'e.l.f.', brand: 'e.l.f.' }, { url: 'essie', brand: 'Essie' }, { url: 'fenty', brand: 'Fenty' }, { url: 'glossier', brand: 'Glossier' }, { url: 'green%20people', brand: 'Green People' }, { url: 'Iman', brand: 'Iman' }, { url: 'l%27oreal', brand: "L'Oreal" }, { url: 'lotus%20cosmetics%20usa', brand: 'Lotus Cosmetics USA' }, { url: 'maia%27s%20mineral%20galaxy', brand: 'Maia Mineral Galaxy' }, { url: 'marcelle', brand: 'Marcelle' }, { url: 'marienatie', brand: 'Marienatie' }, { url: 'milani', brand: 'Milani' }, { url: 'mineral%20fusion', brand: 'Mineral Fusion' }, { url: 'misa', brand: 'Misa' }, { url: 'mistura', brand: 'Mistura' }, { url: 'moov', brand: 'Moov' }, { url: 'nudus', brand: 'Nudus' }, { url: 'nyx', brand: 'NYX' }, { url: 'orly', brand: 'Orly' }, { url: 'pacifica', brand: 'Pacifica' }, { url: 'penny%20lane%20organics', brand: 'Penny Lane Organics' }, { url: 'physicians%20formula', brand: "Physician's Formula" }, { url: 'piggy%20paint', brand: 'Piggy Paint' }, { url: 'pure%20anada', brand: 'Pure Anada' }, { url: 'sally%20b%27s%20skin%20yummies', brand: "Sally B's Skin Yummies" }, { url: 'salon%20perfect', brand: 'Salon Perfect' }, { url: 'sante', brand: 'Sante' }, { url: 'sinful%20colours', brand: 'Sinful Colours' }, { url: 'smashbox', brand: 'Smashbox' }, { url: 'stila', brand: 'Stila' }, { url: 'suncoat', brand: 'Suncoat' }, { url: 'w3llpeople', brand: 'W3llpeople' }, { url: 'wet%20n%20wild', brand: 'Wet n Wild' }, { url: 'zorah', brand: 'Zorah' }, { url: 'zorah%20biocosmetiques', brand: 'Zorah Biocosmetiques' }])
  // console.log("OPTIONS",optionArray)
  const [pOptionArray, setPOptionArray] = useState([{ url: '', prodType: 'All Products' }, { url: 'blush', prodType: 'Blush' }, { url: 'bronzer', prodType: 'Bronzer' }, { url: 'eyebrow', prodType: 'Eyebrow' }, { url: 'eyeliner', prodType: 'Eyeliner' }, { url: 'foundation', prodType: 'Foundation' }, { url: 'Lip%20liner', prodType: 'Lipliner' }, { url: 'lipstick', prodType: 'Lipstick' }, { url: 'mascara', prodType: 'Mascara' }, { url: 'eyeshadow', prodType: 'Eyeshadow' }, { url: 'Nail%20polish', prodType: 'Nail Polish' }])
  // const [uniqueBrands, setUniqueBrands] = useState([])
 const [postArray,setPostArray] = useState([])

  const baseUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json?'

  // console.log('myProductsList', myProductsList)

  // const fetchMyProductsList = async () => {
  //   const prodListResponse = await fetch('http://localhost:3002/posts')
  //   const myProductsListArray = await prodListResponse.json()
  //   setMyProductsList(myProductsListArray)
  //   setMakeupList(myProductsListArray)
  // }

  //   const fetchMakeupList = async (fetchwhat, brand, prodType) => {

  //     // fetchMyProductsList:
  // const prodListResponse = await fetch('http://localhost:3002/posts')
  // const myProductsListArray = await prodListResponse.json()
  // setMyProductsList(myProductsListArray)


  //     const response = await fetch(fetchwhat)
  //     const makeupListArray = await response.json();
  //     setIsLoading(false)
  //     const combinedListArray = makeupListArray.concat(myProductsListArray)
  //     //setMakeupList(makeupListArray.concat(myProductsListArray))
  //     setDisplayedList(combinedListArray.filter(makeup => {
  //       return parseFloat(makeup.price) != "0.0" 
  //     }))
  //   }
  useEffect(() => {
    function getPosts() {
      // let myProductsListArray = []
      fetch('http://localhost:3002/posts')
        .then((response) => response.json())
        .then((data) => setPostArray(data));
      
      //  console.log(myProductsListArray)
    }
    getPosts();
  }, [])

  useEffect(()=>{
    let uniqueBrands = [];
      let map = {};
      let uniqueProducts = [];
      let pmap = {};
      // const [uniqueBrands, setUniqueBrands] = useState([])
      // const [map, setMap] = useState({})

      postArray.forEach((item, i) => {
        // console.log("BRAND", item.brand)
        // console.error('HERERERER', map[item.brand])
        if (map[item.brand] !== undefined) {
          return;
        } else {
          map[item.brand] = i;
          uniqueBrands.push({ url: item.brand, brand: item.brand })
          // setUniqueBrands([...uniqueBrands,{ url: item.brand ,brand: item.brand }])
          // console.log("HERE",uniqueBrands)
        }
        // console.log("MAP",map)

      })

      postArray.forEach((item, i) => {
        // console.error('HERERERER', pmap[item.product_type])
        if (pmap[item.product_type] !== undefined) {
          return;
        } else {
          pmap[item.product_type] = i;
          uniqueProducts.push({ url: item.product_type, prodType: item.product_type })
        }
        // console.log("PMAP",pmap)

      })

      // console.log("NEW BRANDS", uniqueBrands)

      setPOptionArray([...pOptionArray, ...uniqueProducts])
      setOptionArray([...optionArray, ...uniqueBrands])

    
  },[postArray])
  const fetchMakeupList = async (brand, prodType) => {
    const checkBrand = () => {
      return brand ? `&brand=${brand}` : ''
    }

    const checkProdType = () => {
      return prodType ? `&product_type=${prodType}` : ''
    }

    const response = await fetch(`${url}${checkBrand()}${checkProdType()}`)

    const makeupListArray = await response.json()
    setMakeupList(makeupListArray)
    setIsLoading(false)


    const prodListResponse = await fetch('http://localhost:3002/posts')
    const myProductsListArray = await prodListResponse.json()

    setMyProductsList(myProductsListArray)
    const filteredplist = myProductsListArray.filter((makeup) => {
      console.log(makeup)
      if (brand && makeup.brand !== brand) {
        return false
      }
      if (prodType && makeup.product_type !== prodType) {
        return false
      } return true
    })

    setDisplayedList(makeupListArray.concat(filteredplist.map((makeup) => { return { ...makeup, id: `M${makeup.id}` } })))

  }

  const fetchFavoritesList = async () => {
    const response = await fetch('http://localhost:3000/favorites')
    const favoritesListArray = await response.json()
    setFavoritesArray(favoritesListArray)
  }

  useEffect(() => {

    // console.log('does brand exist?', brand ? 'brand exists': 'brand does not exist')
    // console.log('does prod type exist?', prodType ? 'prodType exists' : 'prodType does not exist')

    //fetchMyProductsList()
    // if (brand && prodType) { fetchMakeupList(`${url}brand=${brand}&product_type=${prodType}`) } 
    // else if (brand) { fetchMakeupList(`${url}brand=${brand}`) }
    // else if (prodType) { fetchMakeupList(`${url}product_type=${prodType}`) }
    // else { fetchMakeupList(`${url}`) }
    fetchMakeupList(brand, prodType)
    fetchFavoritesList()

  }, [prodType, brand, url])

  function ifImageError(id, item) {
    // console.log('removing image')
    // let x = item;
    // x.image_link = 'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg';
    setDisplayedList(displayedList.filter(makeup => {
      return makeup.id !== id
    }))
    // let temp = displayedList
    // temp.push(x)
    // setDisplayedList([displayedList])
  }

  const newDisplayedList = displayedList.filter(makeup => {
    return makeup.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function updateBrand(e) {
    console.log(e.target.value, "BRAND")

    // setBrand(e.target.value)
    // console.log('${baseUrl}brand=${brand}', `${baseUrl}brand=${e.target.value}`)
    //  e.target.value == 'all' ? setUrl(baseUrl) :
    // console.log('e.target.value', e.target.value)
    setBrand(e.target.value)

  }

  function updateProdType(e) {
    console.log(e.target.value, "PROD")
    setProdType(e.target.value)
  }

  const newProduct = (newProd) => {
    const updatedProductsArray = [...myProductsList, newProd]
    setMyProductsList(updatedProductsArray)
  }

  const deleteProduct = (id) => {
    // console.log('delete this product:', id)
    const newlyUpdatedProductsArray = myProductsList.filter((item) => item.id !== id);
    setMyProductsList(newlyUpdatedProductsArray)
  }

  const newFavorite = (newFav) => {
    const updatedFavoritesArray = [...favoritesArray, newFav]
    setFavoritesArray(updatedFavoritesArray)
  }

  const removeFavorite = (id) => {
    // console.log('remove from favorites:', id)
    const newlyUpdatedFavoritesArray = favoritesArray.filter((item) => item.id !== id);
    setFavoritesArray(newlyUpdatedFavoritesArray)
  }

  // console.log('favoritesArray', favoritesArray)
  // console.log('makeupList', makeupList)
  // console.log('newDisplayedList', newDisplayedList)
  // console.log('myProductsList', myProductsList)

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
          <MyProducts deleteProduct={deleteProduct} makeupList={myProductsList} />
        </Route>
        <Route path='/newproductform'>
          <NewProductForm newProduct={newProduct} />
        </Route>
        <Route path='/'>
          {isLoading ? <h1>Loading..</h1> : <Home pOptionArray={pOptionArray} optionArray={optionArray} favoritesArray={favoritesArray} removeFavorite={removeFavorite} newFavorite={newFavorite} updateProdType={updateProdType} prodType={prodType} updateBrand={updateBrand} brand={brand} setSearchTerm={setSearchTerm} searchTerm={searchTerm} ifImageError={ifImageError} makeupList={newDisplayedList} />}
        </Route>
      </Switch>
    </div>
  )
}

export default App;

import React from "react";
import MakeupC2 from './MakeupC2'
import Search from './Search';
import {components} from 'react-select'

function Favorites({removeFavorite, newFavorite, isFavorite, makeupList, ifImageError,setSearchTerm,searchTerm, updateBrand, brand, updateProdType, prodType}) {
    
  return (
    <main>
        {/* try to put a checkbox in the dropdown. */}

        {/*
        <label htmlFor='brands'>Choose a brand:</label>
        <select name='brands' id='brands' onChange={updateBrand} value={brand} >
            <option value='revlon'>Revlon</option>
            <option value='maybelline'>Maybelline</option>
            <option value='covergirl'>Covergirl</option>
            <option value='dior'>Dior</option>
            <option value='colourpop'>Colourpop</option>
            <option value='almay'>Almay</option>
            <option value='alva'>Alva</option>
            <option value='anna%sui'>Anna Sui</option>
            <option value='annabelle'>Annabelle</option>
            <option value='benefit'>Benefit</option>
            <option value='boosh'>Boosh</option>
            <option value='burt%27s%20bees'>Burt's Bees</option>
            <option value='butter%20london'>Butter London</option>
            <option value='c%27est%20moi'>C'est Moi</option>
            <option value='cargo%20cosmetics'>Cargo Cosmetics</option>
            <option value='china%20glaze'>China Glaze</option>
            <option value='clinique'>Clinique</option>
            <option value='coastal%20classic%20creation'>Coastal Classic Creation</option>
            <option value='dalish'>Dalish</option>
            <option value='deciem'>Deciem</option>
            <option value='dr.%20hauschka'>Dr. Hauschka</option>
            <option value='e.l.f.'>E.L.F.</option>
            <option value='essie'>Essie</option>
            <option value='fenty'>Fenty</option>
            <option value='glossier'>Glossier</option>
            <option value='green%20people'>Green People</option>
            <option value='Iman'>Iman</option>
            <option value='l%27oreal'>L'Oreal</option>
            <option value='lotus%20cosmetics%20usa'>Lotus Cosmetics USA</option>
            <option value='maia%27s%20mineral%20galaxy'>Maia's Mineral Galaxy</option>
            <option value='marcelle'>Marcelle</option>
            <option value='marienatie'>Marienatie</option>
            <option value='milani'>Milani</option>
            <option value='mineral%20fusion'>Mineral Fusion</option>
            <option value='misa'>Misa</option>
            <option value='mistura'>Mistura</option>
            <option value='moov'>Moov</option>
            <option value='nudus'>Nudus</option>
            <option value='nyx'>NYX</option>
            <option value='orly'>Orly</option>
            <option value='pacifica'>Pacifica</option>
            <option value='penny%20lane%20organics'>Penny Lane Organics</option>
            <option value='physicians%20formula'>Physician's Formula</option>
            <option value='piggy%20paint'>Piggy Paint</option>
            <option value='pure%20anada'>Pure Anada</option>
            <option value='sally%20b%27s%20skin%20yummies'>Sally B's Skin Yummies</option>
            <option value='salon%20perfect'>Salon Perfect</option>
            <option value='sante'>Sante</option>
            <option value='sinful colours'>Sinful Colours</option>
            <option value='smashbox'>Smashbox</option>
            <option value='stila'>Stila</option>
            <option value='suncoat'>Suncoat</option>
            <option value='w3llpeople'>W3llpeople</option>
            <option value='wet%20n%20wild'>Wet n Wild</option>
            <option value='zorah'>Zorah</option>
            <option value='zorah%20biocosmetiques'>Zorah Biocosmetiques</option>
            <option value=''>All Brands</option>
        </select>
        <label htmlFor='prodtypes'>Choose a product:</label>

        <select name='prodtypes' id='prodtypes' onChange={updateProdType} value={prodType}>
            <option value='blush'>Blush</option>
            <option value='bronzer'>Bronzer</option>
            <option value='eyebrow'>Eyebrow</option>
            <option value='eyeliner'>Eyeliner</option>
            <option value='foundation'>Foundation</option>
            <option value='Lip%20liner'>Lip Liner</option>
            <option value='lipstick'>Lipstick</option>
            <option value='mascara'>Mascara</option>
            <option value='eyeshadow'>Eyeshadow</option>
            <option value='Nail%20polish'>Nail Polish</option>
            <option value=''>All Products</option>
        </select>
  */}
       {/*<Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>*/}

        <ul className='cards'>
            {makeupList.map((makeup) => {
            return <MakeupC2 
            key={makeup.id} 
            removeFavorite={removeFavorite}
            newFavorite={newFavorite}
            ifImageError={ifImageError} 
            makeup={makeup}/>
    })}
        </ul>
  </main>
  )
}

export default Favorites;

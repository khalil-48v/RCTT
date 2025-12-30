import React, { useEffect, useState } from 'react'

import './store.css' // Import store.css

export default function ProductList() {

  const [productLst, setProductList] = useState([])
  const [search, setSearch] = useState(undefined)
  const [category, setCategory] = useState([])
  const [filtered, setFiltred] = useState()


  const GetProducts = () => fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(json => {
      console.log(json)
      setProductList(json)
      setFiltred(json)
    })


  const GetCateg = () => fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(json => setCategory(json))

*
  useEffect(() => {
    GetProducts()
    GetCateg()

  }, [])

  const handleChangeSubmit = (e) => {
    e.preventDefault()
    const sch = document.querySelector("#sech").value
    setSearch(sch)
    const filtr0 = !sch ? productLst : productLst.filter(ls =>
      ls.title.toLowerCase().includes(sch.toLowerCase()) ||
      ls.description.toLowerCase().includes(sch.toLowerCase()) ||
      ls.id.toString() === sch
    )

    setFiltred(filtr0)

  }

  const handleChangerReset = (e) => {
    e.preventDefault()
    const inp = document.querySelector("#sech")
    inp.value = ""
    setSearch("")
    setFiltred(productLst)



  }



  const display = (lst = []) => {

    return lst.map((prod, key) => (
      <tr key={key} className="product-card">
        <td className="product-id">{prod.id}</td>
        <td className="product-title">{prod.title}</td>
        <td className="product-price">{prod.price} $</td>
        <td className="product-description">{prod.description.slice(0, 155)}...</td>
        <td className="product-category">{prod.category}</td>
        <td className="product-image"><img src={prod.image} alt={prod.title} /></td>
        <td className="product-rating">{prod.rating.rate}</td>
      </tr>
    ))
  }
  const filtr1 = (valu) => {

    return productLst.filter((ls) =>
      ls.category === valu
    )
  }
  const handleCat = (e) => {
    e.preventDefault()
    let val = e.target.value
    setFiltred(filtr1(val))

  }


  const displayByCateg = () => {
    return category.map((cat, key) => (
      <input type="submit" className="category-btn" id='inp' key={key} value={cat} onClick={handleCat} />

    ))
  }


  return (
    <div className="store-container">
      <h1 className="store-header">Web Store</h1>
      <h3 className="section-title">Product List</h3>
      
      <div className="search-controls">
        <input type="text" name="" id="sech" placeholder='Search' className="search-input" />
        <button onClick={handleChangeSubmit} className="search-btn">Search</button>
        <button onClick={handleChangerReset} className="reset-btn">Reset</button>
      </div>
      
      <h3 className="section-title">Categories :</h3>
      <div className="category-buttons">
        {displayByCateg()}
      </div>
      
      <table className="product-list-table">
        <thead className="table-header">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Desription</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
          </tr>

        </thead>
        <tbody className="product-grid">
          {display(filtered)}
        </tbody>
      </table>
    </div>
  )


}
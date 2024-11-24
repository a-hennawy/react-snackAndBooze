import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Home'
import SnackOrBoozeApi from './Api'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'

// import Snack from './FoodItem'

import Menu from './Menu'
import Item from './Item'
import AddItemPage from './AddItemPage'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [snacks, setSnacks] = useState([])
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    async function getSnacksAndDrinks() {
      let snacks = await SnackOrBoozeApi.getSnacks()
      let drinks = await SnackOrBoozeApi.getDrinks()

      setSnacks(snacks)
      setDrinks(drinks)
      setIsLoading(false)
    }
    getSnacksAndDrinks()
  }, [snacks, drinks])

  if (isLoading) {
    return <p>Loading &hellip;</p>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<AddItemPage />} />
            <Route
              path="/snacks"
              element={<Menu provisions={snacks} title="Snacks" />}
            />

            <Route
              path="/snacks/:id"
              element={<Item items={snacks} cantFind="/snacks" />}
            />
            <Route
              path="/drinks"
              element={<Menu provisions={drinks} title={'Drinks'} />}
            />
            <Route
              path="/drinks/:id"
              element={<Item items={drinks} cantFind={'/drinks'} />}
            />
            <Route
              path="*"
              element={<p>Hmmm. I can't seem to find what you want.</p>}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App

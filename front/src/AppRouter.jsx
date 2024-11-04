import { BrowserRouter, Routes, Route } from "react-router-dom"

import React from 'react'

export default function AppRouter() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        



      </Routes>

    </BrowserRouter>

  )
}
// "componente:devuelve elementos" "elemento:ej:home,login"
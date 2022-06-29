import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/shoppingCartContext"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"


function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App

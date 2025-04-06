import Header from "./components/header"
import Menu from "./components/menu"
import Aside from "./components/aside"
import Content from "./components/content"
import Footer from "./components/footer"
import Categories from "./components/categories"

function App() {
  return (
    <>
      <Header />
      <Menu />
      <div className="container mt-5">
        <div className="row">
          {/* Columna izquierda - contenido e imágenes */}
          <div className="col-md-8">
            <Aside />
            <Content />
          </div>

          {/* Columna derecha - categorías */}
          <div className="col-md-4">
            <Categories />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App


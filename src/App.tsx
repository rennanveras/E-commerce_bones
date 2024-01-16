import Header from './containers/Header'
import Hero from './containers/Hero'
import Produtos from './containers/Produtos'

function App() {
  return (
    <div className="App w-screen md:w-100 mx-auto">
      <Header />
      <div className="container mx-auto">
        <Hero />
        <Produtos />
      </div>
    </div>
  )
}

export default App

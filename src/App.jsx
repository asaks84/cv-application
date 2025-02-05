
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {


  return (
    <section className="min-vh-100 h-100 d-flex flex-column align-items-center w-100">
      <div className="container col-12 col-lg-8 col-xl-6 gap-2">      
        <Header />
        <Main />
      </div>
      <Footer />
    </section>
  )
}

export default App

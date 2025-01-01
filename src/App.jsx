import './App.css'
import ContactUs from './components/ContactUs/ContactUs'
import Deals from './components/Deals/Deals'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Properties from './components/Properties/Properies'
import PropertyDeals from './components/PropertyDeals/PropertyDeals'
import StatsCard from './components/StatCards/StatCards'
import VideoView from './components/VideoView/VideoView'

function App() {


  return (
    <>
    <Navbar />
    <Hero />
    <Properties />
    <VideoView />
    <StatsCard />
    <Deals />
    <PropertyDeals />
    <ContactUs />
    <Footer />
    </>
  )
}

export default App

import './App.css'
import Heading from '../Components/Heading'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
// import Logic from '../Components/Logic'
import SocialMediaListProvider from '../Store/SocialMedia'
// import Message from '../Components/Message'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <SocialMediaListProvider>
    <main>
    <Sidebar></Sidebar>
    <section>
    <Heading></Heading>
    <Outlet></Outlet>
  {/* <Logic></Logic> */}
    <Footer></Footer>
    </section>
    </main>
    </SocialMediaListProvider>
  )
}

export default App

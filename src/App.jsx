import  {useState} from 'react'
import Layout from './Layout/Layout'
import {Route, Routes, useLocation} from 'react-router'
import {Global,Indonesia,Province,About} from './pages'
import CovidContext from './Context/CovidContext'
import data from "./utils/data/provinces";


function App() {
  const [covids, setCovids] = useState(data.regions);
  const location = useLocation();


  const contextValue={
    covids,
    setCovids 
  }

  const showHero = location.pathname !== '/about';

  return (
    <>
      <CovidContext.Provider value={contextValue}>
        <Layout showHero={showHero}>
          <Routes>
            <Route path="/" element={<Global />} />
            <Route path="/indonesia" element={<Indonesia />} />
            <Route path="/province" element={<Province />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </CovidContext.Provider>
    </>
  )
}

export default App

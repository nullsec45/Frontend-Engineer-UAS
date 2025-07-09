import  {useState} from 'react'
import Layout from './Layout/Layout'
import {Route, Routes} from 'react-router'
import {Global,Indonesia,Province} from './pages'
import CovidContext from './Context/CovidContext'
import data from "./utils/data/provinces";


function App() {
  const [covids, setCovids] = useState(data.regions);

  const contextValue={
    covids,
    setCovids 
  }

  return (
    <>
      <CovidContext.Provider value={contextValue}>
        <Layout>
          <Routes>
            <Route path="/" element={<Global />} />
            <Route path="/indonesia" element={<Indonesia />} />
            <Route path="/province" element={<Province />} />
          </Routes>
        </Layout>
      </CovidContext.Provider>
    </>
  )
}

export default App

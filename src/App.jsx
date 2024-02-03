import React from 'react'
import Axios from './Axios/Axios'
import AxiosData from './Axios/AxiosData'
import AxiosTest from './Axios/AxiosTest'
import AxiosPractice from './Axios/AxiosPractice'
import AxiosXyz from './Axios/AxiosXyz'
import FetchApi from './Fetch/FetchApi'

const App = () => {
  return (
    <>
      <Axios/>
      <AxiosData/>
      <AxiosTest/>
      <AxiosPractice/>
      <AxiosXyz/>
      <FetchApi/>
    </>
  )
}

export default App

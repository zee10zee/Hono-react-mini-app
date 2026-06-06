
import { useEffect, useState } from 'react'
import './App.css'
import Handleform from './components/Handleform'
import axios from 'axios'
import LoadUsers from './components/LoadUsers'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import NavigationButton from './components/NavigationButton'
import useUserStore from './store/useUserStore'

function App() {
  const [message, setMessage] = useState('')
  const users = useUserStore((state)=> state.users)

   useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/')
        const message = response.data.message
        console.log('server message , ', message)
        setMessage(message)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element= {
          <>
            <p>{message}</p>
           <LoadUsers users = {users} />
            <NavigationButton to = '/new-user' text={'Add New User'} />

           </>
          } />
        <Route path='/new-user' element = {<Handleform />}></Route>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App

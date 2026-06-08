
import './App.css'
import Handleform from './components/Handleform'
import LoadUsers from './components/LoadUsers'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import NavigationButton from './components/NavigationButton'

function App() {

  
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element= {
          <>
           <LoadUsers  />
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

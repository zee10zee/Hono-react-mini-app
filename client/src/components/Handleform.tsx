
import { Input } from './ui/input'
import { Button } from './ui/button'
import {User2} from 'lucide-react'
import useUserStore from '../store/useUserStore'
import { useNavigate } from 'react-router-dom'
import {  useState } from 'react'
import NavigationButton from './NavigationButton'
import { DatePicker } from './Datepicker'
import { PickCity } from './PickCity'

const Handleform = () => {
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const navigate = useNavigate()
  const users = useUserStore((state)=> state.users)
  const addUser = useUserStore((state)=> state.addUser)


  async function createUser(formData) {  
     formData.append("dob", selectedDate);
    formData.append("city", selectedCity);
    
    const name = formData.get("fname");
    const email = formData.get("email");
    const dob = formData.get("dob");
    const city = formData.get("city");
    const userId = users.length > 0 ? users.length + 1 : 1
    const newUser =  {
      id : userId,
       name , 
       email,
       city, 
       dob
    }

    // return alert(name + email  + 'city ' + city  + 'date of birth ' + dob)
    addUser(newUser)
    alert('New user added success')
    navigate('/')
  }

  return (
    <div className="form w-screen md:w-[60%] mx-auto my-10">

      <NavigationButton to = {'/'} text={'back'} />
        <div className='flex flex-row gap-3 mb-5'>
            <p className="text-black">Register New User</p>
             <User2 />
        </div>

        <form action={createUser} className='flex flex-col gap-4'>
        <Input type='text' name="fname" placeholder='enter your name'/>
         <Input type='email' name="email" placeholder='enter your email'/>
         <DatePicker name='dob'/>
         <PickCity name="city" value={selectedCity} onChange={setSelectedCity} />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default Handleform
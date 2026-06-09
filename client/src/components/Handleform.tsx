
import { Input } from './ui/input'
import { Button } from './ui/button'
import {User2} from 'lucide-react'
import useUserStore, { addUser } from '../store/useUserStore'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import NavigationButton from './NavigationButton'
import { DatePicker } from './Datepicker'
import { PickCity } from './PickCity'
import axios from 'axios'
import { BaseUrl } from '../store/useUserStore'


const Handleform = () => {
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
 
  async function createUser(formData) {  
     formData.append("dob", selectedDate);
     formData.append("city", selectedCity);   
    const name = formData.get("fname");
    const email = formData.get("email");
    const dob = formData.get("dob");
    const city = formData.get("city");


    if(name === '' || email === '' || dob === '' || city === ''){
      return alert('no input should be left empty , please check !')
    }

    // for db as its auto genrate , no id is required 
    const newUser =  { name , email, city, dob }
    
    try{
      setLoading(true)
      const response = await axios.post(BaseUrl + '/new-user', newUser)

      if(response.status !== 200){ 
        return alert(response.data.message)
      }

      setLoading(false)
       console.log(response.data, ' the created data')
        addUser(newUser)
        alert('New user added success')
          navigate('/')

    }catch(err){
      setLoading(false)
      console.log(err, ' the error ')

    } finally {
      setLoading(false) 
    }
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

        <Button type="submit" disabled ={loading}>{loading ? 'submitting ...' :  'Submit' }</Button>
      </form>
    </div>
  )
}

export default Handleform
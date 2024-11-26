import { useEffect, useState, useRef } from 'react'
import './style.css'
import Garbage from '../../assets/garbage.svg'
import api from '../../services/api'

function Home() {
  
  const [users, setUsers] = useState([])

  const inputData = [
    {
      "inputName": useRef()
    },
    {
      "inputEmail": useRef()
    },
    {
      "inputAge": useRef()
    }
    

  ]

  async function getUsers(){
   const usersFromAPI = await api.get('/users')
   setUsers(usersFromAPI.data)
  }

  async function createUser(){
    api.post('/users', {
      name: inputData[0].inputName.current.value,
      email: inputData[1].inputEmail.current.value,
      age: inputData[2].inputAge.current.value
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })

    getUsers()

  }

  useEffect(() => {
    getUsers()
  }, [])


  return(
    <div className='container'>

      <form action="">
        <h1>Register Users</h1>
        <input placeholder='name' type="text" name='name' ref={inputData[0].inputName}/>
        <input placeholder='email' type="email" name='email' ref={inputData[1].inputEmail} />
        <input placeholder='age' type="number" name="age" ref={inputData[2].inputAge}/>
        <button type='submit' onClick={createUser}>Register</button>
      </form>


        {  users.map(user => (
            <div className='card' key={user.id}>
            <div>
              <p> Name:<span>{user.name}</span></p>
              <p> Email:<span>{user.email}</span></p>
              <p> Age:<span>{user.age}</span></p>
            </div>
            <button><img src={Garbage} /></button>
        </div>
        
          ))}

      

    </div>
  )
}

export default Home

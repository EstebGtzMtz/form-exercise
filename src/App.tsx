import './App.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';

interface formObjectInterface {
  id: number,
  name: string,
  type: string,
  value?: string,
  label?: string
  validation?: {
    required: true
  }
}


const formObject : formObjectInterface[] = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    value: '',
    label:'',
    validation:'required'
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    value: '',
    label:''
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
    value: '',
    label:''
  }
]


function App() {

  const [formInfo, setformInfo] = useState({})
  const { register, handleSubmit } = useForm();
  const onSubmit = data => setformInfo({...data})

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {
          formObject.map(el =>(
            <div key={el.id} className='input-label'>
              <label htmlFor={el.name}>{el.name}</label>
              <input
                key={el.id}
                type={el.type}
                {...register(el.name, {required: el.validation?.required})}
              />
            </div>
          ))
        }
        <button type='submit'>submit</button>
      </form>
      {
        JSON.stringify(formInfo)
      }
    </div>
  )
}

export default App

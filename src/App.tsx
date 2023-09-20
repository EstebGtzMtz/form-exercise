import './App.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { Button, Grid, MenuItem, TextField, Typography } from '../node_modules/@mui/material/index';

interface formObjectInterface {
  id: number,
  name: string
  type: string
  options?: number[]
  defaultSelectOption?: number
}

type Inputs = {
  name: string,
  email: string,
  password: string
  age: string

};


const formObject : formObjectInterface[] = [
  {
    id: 1,
    name: 'name',
    type: 'text',
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
  },
  {
    id: 4,
    name: 'age',
    type: 'select',
    options: [10, 20, 30]
  }
]


function App() {

  const [formInfo, setformInfo] = useState({})
  const { register, handleSubmit } = useForm({
    defaultValues: {
      age: 10,
    }
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => setformInfo({...data})

  return (
  <>
    <Typography>Print your form information</Typography>
    <Grid container sx={{display: 'flex', flexDirection: 'column'}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {
            formObject.map(el => (
              <Grid item xs={12} key={el.id} sx={{marginTop: 2}}>
                {
                  el.type === 'select' ?
                  <Grid key={el.id}>
                    <TextField
                      select
                      defaultValue=""
                      label={el.name}
                      inputProps={register(el.name)}
                    >
                      {
                        el.options.map((el, idx) => (
                          <MenuItem key={idx} value={el}>{el}</MenuItem>
                        ))
                      }
                    </TextField>
                  </Grid> :
                  <TextField
                    label={el.name}
                    type={el.type}
                    name={el.name}
                    {...register(el.name)}
                  />
                }
              </Grid>
            ))
        }
        <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth type='submit'>
                Submit
              </Button>
            </Grid>
          </Grid>
      </form>
    </Grid>
      <pre>
        {JSON.stringify(formInfo, null, 2)}
      </pre>
  </>
  )
}

export default App

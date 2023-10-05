import * as React from 'react';
import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DropDown from '../dropdown';
import CustomButton from '../button';
import { fetchWorkoutPlan } from '../../api/api';

const body = {
  "model":"gpt-3.5-turbo",
    "messages":[
        {"role": "system", "content": "My name is Ritesh. I am 24 years old and my weight is 72kg and height is 178cm. I want to start weight gain exercise of intermediate level. Can you suggest workout for me in json format with given key : '\''Work out name'\'', '\''Duration'\'','\''Image Link'\'', '\''Description'\'', and an array of '\''Day wise plans'\''"}
    ]
}

export default function Form() {
  const [userData, setUserData] = useState({name:'', age:0, weight:0});
  const [workoutType, setWorkoutType] = useState('');
  const [level, setLevel] = useState('');

  const nameChangeHandler = (event) => {
    setUserData({...userData, name:event?.nativeEvent?.target?.value})
  }

  const ageChangeHandler = (event) => {
    setUserData({...userData, age:event?.nativeEvent?.target?.value})
  }

  const weightChangeHandler = (event) => {
    setUserData({...userData, weight:event?.nativeEvent?.target?.value})
  }
  
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{display:'flex', flexDirection:'column', marginLeft:10}}>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Name"
          onChange={nameChangeHandler}
        />
        <TextField
          id="outlined-number"
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={ageChangeHandler}
        />
        <TextField
          id="outlined-number"
          label="Weight"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={weightChangeHandler}
        />
        <DropDown onSelect={setWorkoutType} options={['Gain Muscle', 'Lose Weight']}/>
        <DropDown onSelect={setLevel} options={['Beginner', 'Intermediate', 'Advance']}/>
        
        <CustomButton label={'Submit'} onClick={()=>{
          alert('ohho')
          fetchWorkoutPlan(JSON.stringify(body))}}/>
      </div>
    </Box>
  );
}
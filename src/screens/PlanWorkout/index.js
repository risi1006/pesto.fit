import * as React from 'react';
import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import DropDown from '../dropdown';
// import CustomButton from '../button';
import DropDown from '../../components/dropdown';
import CustomButton from '../../components/button';
import Navbar from '../../components/navbar';
import { fetchWorkoutPlan } from '../../api/api';
import WorkoutCard from '../../components/card';
import WorkoutSuggestionCard from '../../components/suggestionCard';
import { fetchedWorkoutPlans } from '../../mockData';
import { Dna } from  'react-loader-spinner'


export default function PlanWorkout() {
  const [userData, setUserData] = useState({name:'', age:0, weight:0});
  const [workoutType, setWorkoutType] = useState('Weight Gain');
  const [level, setLevel] = useState('Intermediate');
  const [generatedPlan, setGeneratedPlan] = useState([]);
  const [loading, setLoading] = useState(false);

  const nameChangeHandler = (event) => {
    setUserData({...userData, name:event?.nativeEvent?.target?.value})
  }

  const ageChangeHandler = (event) => {
    setUserData({...userData, age:event?.nativeEvent?.target?.value})
  }

  const weightChangeHandler = (event) => {
    setUserData({...userData, weight:event?.nativeEvent?.target?.value})
  }
  
  const submitHandler = async() => {
    setLoading(true);
    const body = {
      "model":"gpt-3.5-turbo",
      "messages":[
          {"role": "system", "content": `My name is ${userData.name}. I am ${userData.age} years old and my weight is ${userData.weight}kg and height is 178cm. I want to start ${workoutType} exercise of ${level} level.Can you suggest 4 workouts for me in array of json format with given key : 'workout_name', 'workout_duration','workout_image_link', 'workout_description', and an array of 'workout_day_wise_plans'. Just send the json object, nothing else`}
      ]
    }

    fetchWorkoutPlan(body).then((data)=>{
        if(data?.workouts){
            setGeneratedPlan(data?.workouts);
        } else if(data){
            setGeneratedPlan(data);
        } else {
            setGeneratedPlan(fetchedWorkoutPlans);
        }
       setLoading(false);
    }).catch((err)=>{
        setGeneratedPlan(fetchedWorkoutPlans);
        setLoading(false);
    });
    
  }

  const handleJoin = async(workout) => {
    let current_workout = await localStorage.getItem('ongoingWorkout');
    current_workout = JSON.parse(current_workout) ?? [];
    current_workout.push(workout);
    current_workout = JSON.stringify(current_workout);
    await localStorage.setItem('ongoingWorkout', current_workout);
  }

  return (
    <div>
    <Navbar/>
    <h1>Please fill the form to generate Workout Plan</h1>;
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{display:'flex', flexDirection:'column', marginLeft:10, justifyContent:'center', alignItems:'center'}}>
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
        
        <CustomButton label={'Submit'} onClick={submitHandler}/>
        <Dna
            visible={loading}
            height="150"
            width="580"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            />
          {generatedPlan && generatedPlan.length > 0 && (
              <div>
                  <h2>{`Hey ${userData.name}! We have few suggestions for ya 🥳...`}</h2>
                    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
                  
                  {generatedPlan.map((workout, index) => {
                      return <WorkoutSuggestionCard 
                        label = {workout.workout_name[0]}
                        title = {workout.workout_name}
                        subheader = {workout.workout_duration}
                        imagePath ={'https://www.planetfitness.com/sites/default/files/feature-image/break-workout_602724.jpg'}
                        description = {workout.workout_description}
                        dayPlan = {workout.workout_day_wise_plans}
                        onClick={()=>{
                            handleJoin({
                                label : workout.workout_name[0],
                                title : workout.workout_name,
                                subheader : workout.workout_duration,
                                imagePath : 'https://www.planetfitness.com/sites/default/files/feature-image/break-workout_602724.jpg',
                                description : workout.workout_description,
                                dayPlan : workout.workout_day_wise_plans
                            })
                        }}
                      />
                  })}
              </div>
              </div>
          )}

      </div>
    </Box>
    </div>
  );
}
import React, {useState, useEffect} from 'react';
import Navbar from '../../components/navbar';
import WorkoutCard from '../../components/card';
import WorkoutSuggestionCard from '../../components/suggestionCard';
import { suggestedPlan } from '../../mockData';
const Home = () => {
      const [ongoingWorkout, setOngoingWorkout] = useState([]);

      useEffect(()=>{
            const init = async() => {
                  let storedData = await localStorage.getItem("ongoingWorkout");
                  setOngoingWorkout(JSON.parse(storedData));
            }
            init();
      }, [])

      const handleJoin = async(workout) => {
            let current_workout = await localStorage.getItem('ongoingWorkout');
            current_workout = JSON.parse(current_workout) ?? [];
            current_workout.push(workout);
            setOngoingWorkout(current_workout)
            current_workout = JSON.stringify(current_workout);
            await localStorage.setItem('ongoingWorkout', current_workout);
      }

  return (<div>
            <Navbar/>
            <h1>{`Hi ${'Ritesh'}! Welcome to Pesto.fit`}</h1>;

            <div style={{marginLeft : 20}}>
                  <h3>Ongoing Plan</h3>
                  <div style={{display:'flex', flexDirection:'row',justifyContent:'flex-start', flexWrap:'wrap' }}>
                        {ongoingWorkout && ongoingWorkout.length > 0 && ongoingWorkout.map((workout, index)=>{
                              return  <WorkoutCard 
                              label = {workout.label}
                              title = {workout.title}
                              subheader = {workout.subheader}
                              imagePath ={workout.imagePath}
                              description = {workout.description}
                              dayPlan = {workout.dayPlan}
                        />
                        })}
                  </div>
            </div>
            <div style={{marginLeft : 20}}>
                  <h3>Suggested Plan</h3>
                  <div style={{display:'flex', flexDirection:'row',justifyContent:'flex-start', flexWrap:'wrap' }}>
                        {suggestedPlan.map((workout, index)=>{
                              return  <WorkoutSuggestionCard 
                              label = {workout.label}
                              title = {workout.title}
                              subheader = {workout.subheader}
                              imagePath ={workout.imagePath}
                              description = {workout.description}
                              dayPlan = {workout.dayPlan}
                              onClick={()=>handleJoin(workout)}
                        />
                        })}
                  </div>
                  
            </div>
      </div>)
}

export default Home;

import axios from 'axios';


export const fetchWorkoutPlan = async(body) => {
    let data = await axios.post('https://api.openai.com/v1/chat/completions', body, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
        'model': 'gpt-3.5-turbo'
    }
    }).then(({data}) => {return JSON.parse(data?.choices[0]?.message?.content)});
    return data;
}

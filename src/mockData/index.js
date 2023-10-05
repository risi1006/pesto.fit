export const OngoingPlan = {
    label : 'R',
    title : 'Ongoing Plan',
    subheader : 'started: 10/04/2023',
    imagePath : 'https://thumbs.dreamstime.com/b/closeup-portrait-muscular-man-workout-barbell-gym-brutal-bodybuilder-athletic-six-pack-perfect-abs-shoulders-55122231.jpg',
    description : 'This guide is aimed at those who have mastered the beginner workout and those who are starting with previous exercise experience. This guide will talk you through the warm up, resistance training, cardio and core training with more advanced exercises.',
    dayPlan : ['Monday: Chest, Triceps and Shoulders', 'Tuesday: Back and Biceps', 'Wednesday: Legs', 'Thursday: Chest, Shoulders, and Triceps', 'Friday: Back and Biceps', 'Saturday: Active Rest Day', 'Sunday: Active Rest Day']
}

export const suggestedPlan = [
    {
        label : 'R',
        title : 'Strength training',
        subheader : 'Duration: 3 months',
        imagePath : 'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2021/05/shutterstock_194099144.jpg?fit=1000%2C667&ssl=1',
        description : 'Strength training, also known as weight training or resistance training, involves the performance of physical exercises that are designed to improve strength and endurance. It is often associated with the lifting of weights',
        dayPlan : ['Monday: Chest, Triceps and Shoulders', 'Tuesday: Back and Biceps', 'Wednesday: Legs', 'Thursday: Chest, Shoulders, and Triceps', 'Friday: Back and Biceps', 'Saturday: Active Rest Day', 'Sunday: Active Rest Day']
    },
    {
        label : 'R',
        title : 'Pilates',
        subheader : 'Duration: 2 weeks',
        imagePath : 'https://moveyourframe.com/wp-content/uploads/2020/08/DYNAMIC-REFORMER.jpg',
        description : 'Pilates is a type of mind-body exercise developed in the early 20th century by German physical trainer Joseph Pilates, after whom it was named. Pilates called his method "Contrology". It is practiced worldwide, especially in countries such as Australia, Canada, South Korea, the United States and the United Kingdom.',
        dayPlan : ['Monday: Chest, Triceps and Shoulders', 'Tuesday: Back and Biceps', 'Wednesday: Legs', 'Thursday: Chest, Shoulders, and Triceps', 'Friday: Back and Biceps', 'Saturday: Active Rest Day', 'Sunday: Active Rest Day']
    },
    {
        label : 'R',
        title : 'Aerobic exercise',
        subheader : 'Duration: 5 weeks',
        imagePath : 'https://www.healthkart.com/connect/wp-content/uploads/2023/08/900-4-1.jpg',
        description : 'Aerobic exercise is physical exercise of low to high intensity that depends primarily on the aerobic energy-generating process. "Aerobic" is defined as "relating to, involving, or requiring oxygen", and refers to the use of oxygen to meet energy demands during exercise via aerobic metabolism adequately.',
        dayPlan : ['Monday: Chest, Triceps and Shoulders', 'Tuesday: Back and Biceps', 'Wednesday: Legs', 'Thursday: Chest, Shoulders, and Triceps', 'Friday: Back and Biceps', 'Saturday: Active Rest Day', 'Sunday: Active Rest Day']
    },
    {
        label : 'R',
        title : 'Yoga',
        subheader : 'Duration: 12 months',
        imagePath : 'https://res.cloudinary.com/peloton-cycle/image/fetch/c_fill,dpr_1.0,w_2560,h_1440,x_0,y_0/f_auto/q_auto/https://images.ctfassets.net/6ilvqec50fal/ast-ifpyoga-isnt-stretching-heres-what-you-need-to-know-about-re/b8d9a6edded294c16f42ca9ed64630d2/aditi_stretch-2560x1440.jpeg',
        description : 'Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control and still the mind, recognizing a detached witness-consciousness untouched by the mind and mundane suffering.',
        dayPlan : ['Monday: Chest, Triceps and Shoulders', 'Tuesday: Back and Biceps', 'Wednesday: Legs', 'Thursday: Chest, Shoulders, and Triceps', 'Friday: Back and Biceps', 'Saturday: Active Rest Day', 'Sunday: Active Rest Day']
    },
    {
        label : 'R',
        title : 'Swimming',
        subheader : 'Duration: 2 months',
        imagePath : 'https://img.jagranjosh.com/images/2021/August/582021/swimming.png',
        description : 'Swimming is the self-propulsion of a person through water, or other liquid, usually for recreation, sport, exercise, or survival. Locomotion is achieved through coordinated movement of the limbs and the body to achieve hydrodynamic thrust that results in directional motion',
        dayPlan : ['Monday: Chest, Triceps and Shoulders', 'Tuesday: Back and Biceps', 'Wednesday: Legs', 'Thursday: Chest, Shoulders, and Triceps', 'Friday: Back and Biceps', 'Saturday: Active Rest Day', 'Sunday: Active Rest Day']
    }
]
             

// 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

// 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

// curl https://api.openai.com/v1/chat/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer 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" \
//   -d '{
//      "model": "gpt-3.5-turbo",
//      "messages": [{"role": "user", "content": "Say this is a test!"}],
//      "temperature": 0.7
//    }'


export const fetchedWorkoutPlans = [
      {
        "workout_name": "Strength Training",
        "workout_duration": "60-75 minutes",
        "workout_image_link": "https://www.planetfitness.com/sites/default/files/feature-image/break-workout_602724.jpg",
        "workout_description": "Focus on compound movements for overall muscle development.",
        "workout_day_wise_plans": [
          "Warm-up: 10 minutes of light cardio",
          "Squat: 4 sets of 8-10 reps",
          "Deadlift: 3 sets of 8-10 reps",
          "Bench Press: 3 sets of 8-10 reps",
          "Pull-ups/Rows: 3 sets of 8-10 reps",
          "Overhead Press: 3 sets of 8-10 reps",
          "Accessory exercises (e.g., bicep curls, tricep extensions): 3 sets of 10-12 reps",
          "Cool down: 10 minutes of stretching"
        ]
      },
      {
        "workout_name": "Hypertrophy Training",
        "workout_duration": "60-75 minutes",
        "workout_image_link": "https://www.planetfitness.com/sites/default/files/feature-image/break-workout_602724.jpg",
        "workout_description": "Emphasis on muscle growth through higher volume and isolation exercises.",
        "workout_day_wise_plans": [
          "Warm-up: 10 minutes of light cardio",
          "Leg Press: 4 sets of 10-12 reps",
          "Dumbbell Flyes: 3 sets of 10-12 reps",
          "Lat Pulldowns: 3 sets of 10-12 reps",
          "Leg Curls: 3 sets of 12-15 reps",
          "Seated Rows: 3 sets of 10-12 reps",
          "Isolation exercises (e.g., bicep curls, tricep kickbacks): 3 sets of 12-15 reps",
          "Cool down: 10 minutes of stretching"
        ]
      },
      {
        "workout_name": "Core and Stability",
        "workout_duration": "45-60 minutes",
        "workout_image_link": "https://www.planetfitness.com/sites/default/files/feature-image/break-workout_602724.jpg",
        "workout_description": "Focus on core strength and overall stability.",
        "workout_day_wise_plans": [
          "Warm-up: 10 minutes of light cardio",
          "Planks: 4 sets, hold for 60 seconds each",
          "Russian Twists: 3 sets of 20 reps",
          "Supermans: 3 sets of 15 reps",
          "Bird Dogs: 3 sets of 12 reps (each side)",
          "Medicine Ball Slams: 3 sets of 12 reps",
          "Cool down: 10 minutes of stretching"
        ]
      },
      {
        "workout_name": "Cardio and Endurance",
        "workout_duration": "45-60 minutes",
        "workout_image_link": "https://www.planetfitness.com/sites/default/files/feature-image/break-workout_602724.jpg",
        "workout_description": "Improve cardiovascular health and build endurance.",
        "workout_day_wise_plans": [
          "Light jog or brisk walk: 10 minutes",
          "Interval sprints: 6 sets of 1 minute sprint followed by 2 minutes walk",
          "Cycling or Rowing: 15 minutes",
          "Jump Rope: 3 sets of 3 minutes",
          "Stair Climbing: 10 minutes",
          "Cool down: 10 minutes of light cardio and stretching"
        ]
      }
    ]
  




# React + Vite

Final Reboot Project 

ENDPOINTS (USER Signup/Login)

METHOD   ENDPOINT         TOKEN      ROLE     DESCRIPTION         POST PARAMS                                    RETURNS 

POST     /auth/sign up      -     user     user signup    'name' 'email' 'password' 'height' 'weight' 'goal'     {message: 'string', result:'token'}
                                                                          'gender' 'availability'   'age'       
POST     /auth/login        -     user     user log in    'email', 'password'                                    {message: 'string', result:'token'}


 User Endpoints:
        POST /users: Create a new user.
        GET /users/:id: Get user details by ID.
        PUT /users/:id: Update user details.
        DELETE /users/:id: Delete a user account.
        POST /users/login: User login (authentication).
        GET /users/:id/training: Get the training plan for a specific user.

    Training Endpoints:
        POST /training: Create a new training plan.
        GET /training/:id: Get training plan details by ID.
        PUT /training/:id: Update training plan details.
        DELETE /training/:id: Delete a training plan.

    Routine Endpoints:
        POST /routine: Create a new routine.
        GET /routine/:id: Get routine details by ID.
        PUT /routine/:id: Update routine details.
        DELETE /routine/:id: Delete a routine.

    Exercise Endpoints:
        POST /exercise: Create a new exercise.
        GET /exercise/:id: Get exercise details by ID.
        PUT /exercise/:id: Update exercise details.
        DELETE /exercise/:id: Delete an exercise.


    Search/Filter Endpoints:
        GET /exercises: Get a list of all exercises.
        GET /routines: Get a list of all routines.
        GET /trainings: Get a list of all training plans.


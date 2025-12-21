# DevTinder
Day-01:
- Create a Vite + React application
- Remove unecessary code and create a Hello World app
- Install Tailwind CSS
- Install Daisy UI
- Add NavBar component to App.jsx
- Create a NavBar.jsx seperate Component file
- Install react router dom
- Create BrowserRouter > Routes > Route=/ Body >RouteChildren
- Create an Outelt in your Body Component
- Create a footer
<!-- Body
    NavBar
    Route=/      => Feed
    Route=/login => Login
    Route=/connections => Connections
    Route=/profile => profile -->

Day-02:
- Create a Login Page
- Install axios
- CORS - install cors in backend => add middleware to app with configurations: Origin, credentials:true
- Whenever you making API Call so pass axious=> {withCredientials:true}
- Install react-redux + @reduxjs/toolkit - https://redux-toolkit.js.org/tutorials/quick-start
- configureStore => Provider => createSlice => add reducer to store
- Add redux devtool into the chrome
- Login and see if your data is coming properly in the store
- Navbar should update as soon as user logs in
- Refactorour code to add constants file + create a components folder

Day-03:
- You should not be access other routes without login
- If token is not present , redirect user to login
- If token is not present , redirect user to login page
- Logout Feature
- Handling errors in ui
- Get the feed and add the feed in the feed store
- Build the user card on feed

Day-04:
- Edit Profile Features
- Show Profile Features 
- Show Toast Message on Save of Profile
- New Page - See all my connections
- New Page - See all my connection Requests
- Features - Accept/ Reject Connection Requests

Day-05
- send/ignore the user card from feed
- Signup New User
- E2E Testing

Remaining:
# Deployment

- Signup on AWS
- Launch instance
- chmod 400 <secret>.pem
- ssh -i "devTinder-secret.pem" ubuntu@ec2-13-48-147-144.eu-north-1.compute.amazonaws.com
- Install node version
- Git Clone
- Front End
    - npm install --> dependencies Installed
    - npm run build
    - sudo apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - copy code from dist(build files) to var/www/html/ (nginx http server)
    - sudo scp -r dist/*  /var/www/html/
    - Enable port :80 of your instance
-Backend Deployment
- Updated DB password
- allowed EC2 instance public IP on MongoDb server



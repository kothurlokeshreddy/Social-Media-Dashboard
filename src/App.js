// Import necessary modules from 'react-router-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// Import components that will be used in the routes
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import UserListing from './components/UserListing'
import PostListing from './components/PostListing'
import NotFound from './components/NotFound'

// Import the main CSS file for styling
import './App.css'

// Define the main App component
const App = () => (
  // Use BrowserRouter to enable routing within the app
  <BrowserRouter>
    {/* Use Switch to render the first route that matches the location */}
    <Switch>
      {/* Route for the login page, rendered at '/login' */}
      <Route exact path="/login" component={LoginForm} />

      {/* Route for the home page, rendered at the root path '/' */}
      <Route exact path="/" component={Home} />

      {/* Route for the user listing page, rendered at '/users' */}
      <Route exact path="/users" component={UserListing} />

      {/* Route for the post listing page, rendered at '/posts' */}
      <Route exact path="/posts" component={PostListing} />

      {/* Route for handling a "Not Found" page, rendered at '/not-found' */}
      <Route path="/not-found" component={NotFound} />

      {/* Redirect any undefined routes to the "Not Found" page */}
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

// Export the App component as the default export
export default App

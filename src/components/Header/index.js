/* eslint-disable react/jsx-no-comment-textnodes */
// Disable the ESLint rule that disallows comments in JSX, as comments are used for documentation

// Import necessary modules and components
import { Link, withRouter } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa"  // User icon from react-icons library
import { MdOutlineArticle } from 'react-icons/md'  // Article icon from react-icons library
import { IoHome } from 'react-icons/io5'  // Home icon from react-icons library
import { Button } from '@mui/material'  // Button component from Material UI

// Import the CSS file for styling
import './index.css'

// Define the Header component, with props being passed in
const Header = (props) => {
  // Function to handle logout by redirecting to the login page
  const onClickLogout = () => {
    const { history } = props  // Destructure history from props
    history.replace('/login')  // Replace current route with '/login'
  }

  return (
    // Main navigation container
    <nav className="nav-header">
      {/* Inner container for navigation content */}
      <div className="nav-content">
        {/* Mobile view: Logo and logout button */}
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://www.pngkey.com/png/full/138-1385814_social-media-analytics-social-media-analytics-icon.png"
              alt="website logo"
            />
          </Link>
          {/* Button to trigger logout in mobile view */}
          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-image"
              onClick={onClickLogout}
            />
          </button>
        </div>

        {/* Desktop view: Logo, navigation links, and logout button */}
        <div className="nav-bar-large-container">
          <Link to="/" className="logo-container">
            <img
              className="website-logo"
              src="https://www.pngkey.com/png/full/138-1385814_social-media-analytics-social-media-analytics-icon.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            {/* Navigation link to Home page */}
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            {/* Navigation link to Users page */}
            <li className="nav-menu-item">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>

            {/* Navigation link to Posts page */}
            <li className="nav-menu-item">
              <Link to="/posts" className="nav-link">
                Posts
              </Link>
            </li>
          </ul>
          {/* Button to trigger logout in desktop view */}
          <Button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Mobile view: Icon-based navigation menu */}
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          {/* Home icon link */}
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <IoHome style={{ color: '#000000', height: '23px', width: '23px' }} />
            </Link>
          </li>

          {/* Users icon link */}
          <li className="nav-menu-item-mobile">
            <Link to="/users" className="nav-link">
              <FaUserCircle style={{ color: '#000000', height: '23px', width: '23px' }} />
            </Link>
          </li>

          {/* Posts icon link */}
          <li className="nav-menu-item-mobile">
            <Link to="/posts" className="nav-link">
              <MdOutlineArticle style={{ color: '#000000', height: '23px', width: '23px' }} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

// Export the Header component wrapped with withRouter to provide access to routing props
export default withRouter(Header)

# Social Media Admin Dashboard

This project is a Social Media Admin Dashboard built using React.js and Recharts. It includes various components for managing users and posts, visualizing data through charts, and providing key performance indicators (KPIs) for user activities.

## Features

- **Posts Per Day Bar Chart**: Visualizes the number of posts created per day using a bar chart.
- **User Activity Pie Chart**: Displays the percentage of active vs inactive users with a pie chart.
- **User Listing Page**: Provides a table of users with options to edit or ban users, along with KPIs for total users and users active in the last 24 hours.
- **Post Listing Page**: Provides a table of posts with options to delete or hide posts, along with KPIs for total posts and posts published in the last 24 hours.

## Installation

To run this project locally, follow these steps:

1. **Download the Project Files**:
   - Download the project as a zip file from Google Drive.
   - Extract the zip file to your preferred location.

2. **Open the Project in Visual Studio Code**:
   - Open Visual Studio Code.
   - Select `File` > `Open Folder` and navigate to the extracted project folder.

3. **Install Dependencies**:
   - Open a terminal in Visual Studio Code.
   - Run the following command to install all necessary dependencies:
     ```bash
     npm install
     ```

4. **Start the Project**:
   - Once the dependencies are installed, start the project by running:
     ```bash
     npm start
     ```
   - The project will start, and you can view the dashboard in your default web browser at `http://localhost:3000`.

## Dataset

- The dataset used in this project is a dummy dataset provided in the `posts.js` and `users.js` files.
- `posts.js` contains an array of post objects with fields like `created_at`.
- `users.js` contains an array of user objects with fields like `isActive` and `lastLogin`.

## Project Structure

The project is structured as follows:

- **src/**: Contains the source code for the project.
  - **components/**: Contains all the React components used in the project.
    - **Header/**: The navigation header component.
    - **PostsPerDayBarChart/**: Displays the bar chart for posts per day.
    - **UserActivityPieChart/**: Displays the pie chart for user activity.
    - **UserListing/**: Displays the user listing table with pagination and KPIs.
  - **data/**: Contains the dummy datasets (`posts.js` and `users.js`).
  - **App.js**: The main app component that integrates all the components.
  - **index.js**: The entry point of the React application.
  - **index.css**: Contains the global styling for the project.

## Dependencies

This project uses the following main dependencies:

- **React.js**: A JavaScript library for building user interfaces.
- **Recharts**: A charting library built on React for data visualization.
- **Moment.js**: A library for parsing, validating, and manipulating dates.
- **Material-UI**: A popular React UI framework for building responsive web apps.

## Contact

For any inquiries or feedback, please reach out to the project maintainer at [kothurlokeshreddy@example.com].


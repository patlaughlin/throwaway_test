// GitHubRepoList.js

/**
 * Challenge:
 * Complete the React component below to fetch repositories from GitHub's API for a given username
 * and display them in a list sorted by the number of stars in descending order. Finally, refactor the username to be dynamic and fetched from a form input. You may do this as a first step if you prefer.
 *
 * Requirements:
 * - Fetch repositories from GitHub's API for a given username.
 * - Display the repository name and star count.
 * - Sort the repositories by star count in descending order.
 * - Handle loading and error states appropriately.
 *
 * Instructions:
 * - Fill in the missing parts of the code where indicated.
 * - You may add any additional helper functions or state variables as needed.
 * - Do not change the component's name or its export.
 *
 * How to Run:
 * 1. Run the project using `npm start` or `yarn start`.
 * 2. The component should display a list of repositories for a given GitHub username sorted by stars.
 */

// Example Output:
// GitHub Repository Viewer
//
//     [Enter GitHub username] [Fetch Repositories]
//
// Repositories of facebook
//
// - react (Stars: 200000)
// - react-native (Stars: 100000)
// - jest (Stars: 35000)

import React, { useState, useEffect } from 'react';

function App() {
  const [repos, setRepos] = useState([]); // State to hold the repositories
  const [loading, setLoading] = useState(false); // State to handle the loading state
  const [error, setError] = useState(null); // State to handle errors
  const username = 'facebook'; // You can change this to any GitHub username

  useEffect(() => {
    // TODO: Fetch repositories from GitHub API and update the state
  }, [username]);

  if (loading) {
    return <div>Loading repositories...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
      <div>
        <h1>Repositories of {username}</h1>
        <ul>
          {/* TODO: Render the list of repositories sorted by stars */}
        </ul>
      </div>
  );
}

export default App;

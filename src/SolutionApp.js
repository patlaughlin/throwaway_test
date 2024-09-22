import React, { useState, useEffect } from 'react';

function SolutionApp() {
  const [repos, setRepos] = useState([]); // State to hold the repositories
  const [loading, setLoading] = useState(false); // State to handle the loading state
  const [error, setError] = useState(null); // State to handle errors
  const [username, setUsername] = useState(''); // State for the GitHub username input
  const [submittedUsername, setSubmittedUsername] = useState(''); // State for the username after form submission

  useEffect(() => {
    if (submittedUsername) {
      setLoading(true);
      setError(null);
      setRepos([]);

      // Fetch repositories from GitHub API
      fetch(`https://api.github.com/users/${submittedUsername}/repos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Sort repositories by stargazers_count in descending order
        const sortedRepos = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(sortedRepos);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    }
  }, [submittedUsername]);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmittedUsername(username.trim());
  };

  return (
      <div>
        <h1>GitHub Repository Viewer</h1>
        <form onSubmit={handleFormSubmit}>
          <input
              type="text"
              placeholder="Enter GitHub username"
              value={username}
              onChange={handleInputChange}
          />
          <button type="submit">Fetch Repositories</button>
        </form>

        {loading && <div>Loading repositories...</div>}

        {error && <div>Error: {error}</div>}

        {!loading && !error && repos.length > 0 && (
            <div>
              <h2>Repositories of {submittedUsername}</h2>
              <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                      <strong>{repo.name}</strong> (Stars: {repo.stargazers_count})
                    </li>
                ))}
              </ul>
            </div>
        )}

        {!loading && !error && repos.length === 0 && submittedUsername && (
            <div>No repositories found for user "{submittedUsername}".</div>
        )}
      </div>
  );
}

export default SolutionApp;

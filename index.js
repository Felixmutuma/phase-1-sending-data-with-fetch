function submitData(name, email) {
    // Construct the data object
    const formData = {
      name: name,
      email: email
    };
  
    // Construct the configuration object for the fetch request
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    // Send the fetch request and return the promise
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => {
        // Check if the response is ok
        if (!response.ok) {
          // If response is not ok, throw an error
          throw new Error("Failed to create user: " + response.statusText);
        }
        // Return the response as JSON
        return response.json();
      })
      .then(data => {
        // Extract the ID from the response data
        const id = data.id;
        // Append the ID to the DOM
        document.body.innerHTML += `<p>New User ID: ${id}</p>`;
        // Return the ID for testing purposes
        return id;
      })
      .catch(error => {
        // Append the error message to the DOM
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
        // Throw the error again to propagate it
        throw error;
      });
  }
submitData("Jim","jim@jim.com");
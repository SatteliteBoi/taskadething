// Helper function to call MS Graph API endpoint 
// using authorization bearer token scheme
function callMSGraph(endpoint, token, callback) {
  const headers = new Headers();
  const bearer = `Bearer ${token}`;

  headers.append("Authorization", bearer);

  const options = {
      method: "GET",
      headers: headers
  };

  console.log('request made to Graph API at: ' + new Date().toString());
  
  fetch(endpoint, options)
    .then(response => response.json())
    .then(response => callback(response, endpoint))
    .catch(error => console.log(error))
}


function getTasks(endpoint, token, callback) {
  const headers = new Headers();
  const bearer = `Bearer ${token}`;

  headers.append("Authorization", bearer);

  const options = {
      method: "GET",
      // headers: headers
  };

  console.log('request made to tasks API at: ' + new Date().toString());
  
  fetch(endpoint)
    .then(response => response.json())
    .then(response => callback(response.json))
    .then(console.log("end"))
    .catch(error => console.log(error))
}
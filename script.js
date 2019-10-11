// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
      response.json().then(function(json) {
      const container = document.getElementById('container')
      for (i=0; i<json.length; i++) {
      const containerInfo = 
        `<div class="astronaut"> 
            <div class="bio">
                <h3>Astronaut ${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                <li>Hours in space: ${json[i].hoursInSpace}</li>
                <li>Active: ${json[i].active}</li>
                <li>Skills: ${json[i].skills}</li>
                </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">`;
       container.innerHTML += containerInfo;     
      }
    })
    });
  })
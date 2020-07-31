// Write your JavaScript code here!
   window.addEventListener("load", function() {
      let json = [];
      fetch ("https://handlers.education.launchcode.org/static/planets.json").then (function(response){
         response.json().then(function(json){
            let missionTarget = document.getElementById("missionTarget");
            let count = Math.floor(Math.random()*json.length);
            missionTarget.innerHTML = `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[count].name}</li>
               <li>Diameter: ${json[count].diameter}</li>
               <li>Star: ${json[count].star}</li>
               <li>Distance from Earth: ${json[count].distance}</li>
               <li>Number of Moons: ${json[count].moon}</li>
            </ol>
            <img src="${json[count].image}">`
         })
      })
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
         event.preventDefault();
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") 
         {
            alert("All fields are required!");
         }  
         else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value)  || isNaN(cargoMass.value))
            {
               alert("Incorrect entry");
            }
            else
            {
               document.getElementById("faultyItems").style.visibility = "visible";
               pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
               copilotStatus.innerHTML = `CoPilot ${copilotName.value} is ready for launch`;
               if (fuelLevel.value < 10000)
               {
                 // pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
                //  copilotStatus.innerHTML = `CoPilot ${copilotName.value} is ready for launch`;
                  fuelStatus.innerHTML = "Fuel too low for launch";
                  launchStatus.innerHTML = "Shuttle not readyfor launch";
                  launchStatus.style.color = "red";
               } else if(cargoMass.value > 10000)
               {
                //  pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
                //  copilotStatus.innerHTML = `CoPilot ${copilotName.value} is ready for launch`;
                  cargoStatus.innerHTML = "CargoMass too high for take off";
                  launchStatus.innerHTML = "Shuttle not readyfor launch";
                  launchStatus.style.color = "red";
               } else
               {
                 // pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
                 // copilotStatus.innerHTML = `CoPilot ${copilotName.value} is ready for launch`;
                  launchStatus.innerHTML = "Shuttle is ready for launch";
                  launchStatus.style.color = "green";
               }
            }       
         });
   });
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

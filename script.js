const activityGet = document.getElementById("getActivity")

activityGet.addEventListener("click", getActivity)

function getActivity() {
console.log("I like applesauce")
 fetch("https://www.boredapi.com/api/activity")
     .then(response => response.json())
    .then(data => alert(data.activity))


}

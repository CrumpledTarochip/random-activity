const activityGet = document.getElementById("getActivity")
const relaxCheck = document.getElementById("relaxation")

relaxCheck.n = 0

activityGet.addEventListener("click", getActivity)
relaxCheck.addEvenetListener("click", applyCheck(relaxCheck)

function getActivity() {
console.log("I like applesauce")
 fetch("https://www.boredapi.com/api/activity")
     .then(response => response.json())
    .then(data => alert(data.activity))


}

function applyCheck(x){
 
 if (x.n = 0){
  x.n = 1
  x.value = YES 
 }
 
 else { 
  x.n = 0
  x.value = NO
 }

console.log(x.value)
 
}

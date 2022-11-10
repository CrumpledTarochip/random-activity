const activityGet = document.getElementById("getActivity")
const recCheck = document.getElementById("recreational")
const busyCheck = document.getElementById("busywork")
const socialCheck = document.getElementById("social")
const relaxCheck = document.getElementById("relaxation")
const musicCheck = document.getElementById("music")
const eduCheck = document.getElementById("education")
const charityCheck = document.getElementById("charity")
const diyCheck = document.getElementById("diy")


activityGet.addEventListener("click", getActivity)


function getActivity() {
console.log("I like applesauce")
 fetch("https://www.boredapi.com/api/activity")
     .then(response => response.json())
    .then(res => checking(res)) 
    }

function checking(res){
if (res.type == "recreational"){
  console.log("banans")
  if (recCheck.checked == true){
    alert(res.activity)
  } else {
   console.log("oranges")
    getActivity()
  }
} else if(res.type == "busywork"){
  console.log("bananas2")
  if (busyCheck.checked == true){
    alert(res.activity)
  } else {
    console.log("oranges2")
    getActivity()
  }
} else if(res.type == "social"){
  console.log("bananas3")
  if(socialCheck.checked == true){
    alert(res.activity)
  } else{
    console.log("oranges3")
    getActivity()
  }
} else if(res.type == "relaxation"){
  console.log("bananas4")
  if(relaxCheck.checked == true){
     alert(res.activity)
  } else{
    console.log("oranges4")
    getActivity()
  }
} else if(res.type == "music"){
  console.log("bananas5")
  if(musicCheck.checked == true){
    alert(res.activity)
  } else{
    console.log("oranges5")
    getActivity()
  }
} else if(res.type == "education"){
  console.log("bananas6")
  if(eduCheck.checked == true){
    alert(res.activity)
  } else{
    console.log("oranges6")
    getActivity()
  }
} else if(res.type == "charity"){
  console.log("bananas7")
  if(charityCheck.checked == true){
    alert(res.activity)
  } else{
    console.log("oranges7")
    getActivity()
  }
} else if(res.type == "diy"){
  console.log("bananas8")
  if(diyCheck.checked == true){
    alert(res.activity)
  } else{
    console.log("oranges8")
    getActivity()
  }
} 
}

  


  



  


      






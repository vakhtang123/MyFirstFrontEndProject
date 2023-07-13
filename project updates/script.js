let multiplayer = [];
let myobject = { firstName: "", lastName: "" };

function switchTheme() {
  const theme = document.getElementById("theme").value;
  document.getElementsByTagName("meta")[0].content = theme;
}

function myFunction() {
  let storagedArray = localStorage.getItem("exampleArray");
  let cheki = (document.getElementById("hello").innerHTML =
    "Hello" +
    "  " +
    storagedArray +
    " " +
    "Please choose the menu you want!");
  document.getElementById("hello").style = "color: #00394d; font-size: 25px; font-weight: bold;";
  // cheki.className = "misalmeba";
  console.log("cheki", cheki);
  console.log("show me eror2", storagedArray);
}
function register() {
  let taskName = document.getElementById("saxeli").value;
  let taskDesc = document.getElementById("gvari").value;
  let taskAssign = document.getElementById("meili").value;
  let taskStatus = document.getElementById("namba").value;
  let taskCity = document.getElementById("qalaqi").value;
  let fields = [taskName, taskDesc, taskAssign, taskStatus, taskCity];

  myobject.firstName = taskName;
  myobject.lastName = taskDesc;

  multiplayer.push(taskName, taskDesc);
  localStorage.setItem("exampleArray", multiplayer);

  console.log("show me eror", multiplayer);

  if (fieldValuesAreValid(fields)) {
    
  } else {
    alert("pleae fill out the form");
    location.reload();
    document.getElementById('cancel').href="#Conctacs1" ;
    
  }
  myFunction();
}
function fieldValuesAreValid(fields) {
  for (let val of fields) {
    if (val === "") {
      return false;
    }
  }
  return true;
}

// function myonload() {}

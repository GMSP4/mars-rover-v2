// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
function turnLeft(rover){
  console.log("Turn left was called");
  switch(rover.direction){
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
   
  }
  console.log("The direction is " + rover.direction)
}

function turnRight(rover){
  console.log("Turn Right was called");
  switch(rover.direction){
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
  console.log("The direction is " + rover.direction)
}


function moveForward(rover, obstacles){
  console.log("moveForward was called")
  switch(rover.direction){
    case "N": if((rover.y != 0) && (obstacles[rover.y-1][rover.x]===null)){
    fillArray(rover.x, rover.y, rover);
    rover.y--;
    }else{
      console.log("You're stucked");
    };
    break;
    case "W": if((rover.x != 0) && (obstacles[rover.y][rover.x-1]===null)){
    fillArray(rover.x, rover.y, rover);
    rover.x--;
    }else{
      console.log("You're stucked");
    };
    break;
    case "S": if((rover.y != 9)&&(obstacles[rover.y+1][rover.x]===null)){
    fillArray(rover.x, rover.y, rover);
    rover.y++;
    }else{
      console.log("You're stucked");
    };
    break;
    case "E": if((rover.x != 9)&&(obstacles[rover.y][rover.x+1]===null)){
    fillArray(rover.x, rover.y, rover);
    rover.x++;
    }else{
      console.log("You're stucked");
    };
    break;
  }
  console.log("The cordinates are " + rover.x + " y:" + rover.y);
}

function commands(rover){
  let str = prompt("Commands: ");
  for(let i = 0; i < str.length; i++){
    switch(str.charAt(i)){
      case "f":
      moveForward(rover, obstacles);
      break;
      case "r":
      turnRight(rover);
      case "l":
      turnLeft(rover);
  }
  
  }
}

let obstacles = [
  [null, null, "obstacle", null, "obstacle", null, null, null, "obstacle", null],
  [null, null, null, null, "obstacle", null, null, null, "obstacle", null],
  [null, null, "obstacle", null, null, null, null, null, "obstacle", null],
  [null, null, "obstacle", null, "obstacle", null, null, null, "obstacle", null],
  [null, null, "obstacle", null, "obstacle", null, "obstacle", null, null, null],
  [null, null, "obstacle", null, "obstacle", null, null, null, "obstacle", null],
  [null, null, null, null, "obstacle", null, null, null, "obstacle", null],
  [null, null, "obstacle", null, "obstacle", null, "obstacle", null, "obstacle", null],
  [null, null, null, null, "obstacle", null, null, null, "obstacle", null],
  [null, null, "obstacle", null, null, null, null, null, "obstacle", null],
]

function fillArray(x, y, rover){
  let cordinate = "x: " + x + "y: " + y;
   return rover.travelLog.push(cordinate);
}


console.log(commands(rover));
function calculateTriangle(){
    let a = document.getElementById("aInp").value;
    let b = document.getElementById("bInp").value;
    console.log(a,b);
    if(a != "" && b != ""){
        let c = Math.sqrt((Math.pow(a,2)+Math.pow(b,2)));
        let degUp = radiansToDegrees(Math.asin(b/c));
        let degDown = radiansToDegrees(Math.asin(a/c));
    
        document.getElementById("a").innerHTML = a;
        document.getElementById("b").innerHTML = b;
        document.getElementById("c").innerHTML = c;
        document.getElementById("d").innerHTML = degUp + "&#176;";
        document.getElementById("e").innerHTML = degDown + "&#176;";
    }
}

function radiansToDegrees(radians)
{
  let pi = Math.PI;
  let deg = radians * (180/pi) + "";
  return roundedNum(deg);
}

function roundedNum(string){
    string = string+"";
    let roundedDeg = string.charAt(0) + string.charAt(1) + string.charAt(2) + string.charAt(3) + string.charAt(4);
    return roundedDeg;
}
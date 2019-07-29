

var arr = [];

 document.getElementById("add").onclick = function(event) {
    addNumbers();
};

function sortNumber(a, b) {
    return a - b;
  }
  

document.getElementById("max").onclick = function(event) {
    max()
};


function addNumbers(){
 
    var numb = document.getElementById('numb').value;
    arr.push(numb);

    var allnumb = document.getElementById('allnumb');
    allnumb.innerHTML = arr;

    document.getElementById('numb').value = "";
}

function sortt() {
    var arr2 = []
for(var x = 0; x < arr.length; x++){
    arr2[x] = parseInt(arr[x]);
}
    var sor = arr2.sort(sortNumber); 
    var res = document.getElementById('res');
    res.innerHTML = sor;
   
};
function sum() {
    var res = 0;
    var arr2 = []

    for(var x = 0 ; x< arr.length;x++)
    {
        arr2[x] = parseInt(arr[x]);
        res += arr2[x];
    }

    var show = document.getElementById('res');
    show.innerHTML = res;
};

function max() {
 var mx = -1000000000
 var arr2 = []
    for(var x = 0; x < arr.length ; x++)
    {
        arr2[x] = parseInt(arr[x]);
        if(arr2[x] > mx)
        {
            mx = arr2[x];
        }
    }
    var show = document.getElementById('res');
    show.innerHTML = mx;
   
};



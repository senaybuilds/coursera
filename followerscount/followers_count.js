let count=0;
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue(){
    if(count===10){
        alert("your instagram account gained 10 followers! congratulations!");
    } else if(count===20){
        alert("your instagram account gained 20 followers! keep it up!");
    }
}

function resetCount(){
    document.getElementById('countDisplay').innerHTML=0
}
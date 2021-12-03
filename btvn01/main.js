function oddeven(){
    var number = parseInt(document.forms['testnumber']['number'].value)
    document.getElementById("result").innerHTML = test(number);
}

function test(a){
    if(a%2 == 0){
        return a + " đây là số chẵn"
    } else {
        return a + " đây là số lẻ"
    }
}


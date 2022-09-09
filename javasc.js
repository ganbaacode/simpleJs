function max(){
    var n1 = parseInt(document.getElementById('input11').value);
    var n2 = parseInt(document.getElementById('input12').value);

    if(n1>n2){
        document.getElementById('result1').innerHTML=n1;
    }else if(n1<n2){
        document.getElementById('result1').innerHTML=n2;
    }else{
        document.getElementById('result1').innerHTML='equal';
    }
}


function maxOfThree(){
    var e1 = parseInt(document.getElementById('input21').value);
    var e2 = parseInt(document.getElementById('input22').value);
    var e3 = parseInt(document.getElementById('input23').value);

    var arr = [];

    arr.push(e1);
    arr.push(e2);
    arr.push(e3);

    let max = arr.reduce((a, b) => Math.max(a, b), -Infinity);

    document.getElementById('result2').innerHTML=max;
}

function isVowel(){
    var v1=document.getElementById('input21').value;
    var len1=parseInt(v1.length);
    if(len1==1){
        document.getElementById('result3').innerHTML='true';
    }else{
        document.getElementById('result3').innerHTML='false';
    }
}

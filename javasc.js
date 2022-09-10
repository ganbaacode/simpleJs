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
    var e1 = document.getElementById('input21').value;
    const gg = e1.split(',');
    let max=0;
for(let i=0;i<gg.length;i++){
    if(gg[i]>max){
        max=gg[i];
    }
}
document.getElementById('result2').innerHTML=max;
}

function isVowel(){
    var v1=document.getElementById('input3').value;
    console.log(v1);
    var len1=v1.length;
    if(len1===1){
        document.getElementById('result3').innerHTML='true';
    }else{
        document.getElementById('result3').innerHTML='false';
    }
}

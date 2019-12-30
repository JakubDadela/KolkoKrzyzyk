
let kolejka="x";
let ilosc=0;
var w1;
var w2;
var w3;
var w4;
var w5;
var w6;
var w7;
var w8;
var w9;
// function dod1();
// function dod2();
// function dod3();
// function dod4();
// function dod5();
// function dod6();
// function dod1();
// function dod1();
// function dod1();


function sprawdzacz()
{
    let spr=document.getElementById('wy');
    if(ilosc!=9)
    {
        if((w1=='x' && w2=='x' && w3=='x') || (w1=='x' && w4=='x' && w7=='x') || (w2=='x' && w5=='x' && w8=='x') ||
        (w3=='x' && w6=='x' && w9=='x') || (w4=='x' && w5=='x' && w6=='x')  || (w7=='x' && w8=='x' && w9=='x') ||
        (w1=='x' && w5=='x' && w9=='x') ||  (w3=='x' && w5=='x' && w7=='x')  )
        {
            spr.innerText="Wygrał krzyżyk";
            document.getElementById("1").onclick=false;
            document.getElementById("2").onclick=false;
            document.getElementById("3").onclick=false;
            document.getElementById("4").onclick=false;
            document.getElementById("5").onclick=false;
            document.getElementById("6").onclick=false;
            document.getElementById("7").onclick=false;
            document.getElementById("8").onclick=false;
            document.getElementById("9").onclick=false;
        }
        else if((w1=='o' && w2=='o' && w3=='o') || (w1=='o' && w4=='o' && w7=='o') || (w2=='o' && w5=='o' && w8=='o') ||
        (w3=='o' && w6=='o' && w9=='o') || (w4=='o' && w5=='o' && w6=='o')  || (w7=='o' && w8=='o' && w9=='o') ||
        (w1=='o' && w5=='o' && w9=='o') ||  (w3=='o' && w5=='o' && w7=='o') )
        {
            spr.innerText="Wygrało kolko";
            spr.innerText="Wygrał krzyżyk";
            document.getElementById("1").onclick=false;
            document.getElementById("2").onclick=false;
            document.getElementById("3").onclick=false;
            document.getElementById("4").onclick=false;
            document.getElementById("5").onclick=false;
            document.getElementById("6").onclick=false;
            document.getElementById("7").onclick=false;
            document.getElementById("8").onclick=false;
            document.getElementById("9").onclick=false;
        }
    }else if(ilosc==9)
    {
        if((w1=='x' && w2=='x' && w3=='x') || (w1=='x' && w4=='x' && w7=='x') || (w2=='x' && w5=='x' && w8=='x') ||
        (w3=='x' && w6=='x' && w9=='x') || (w4=='x' && w5=='x' && w6=='x')  || (w7=='x' && w8=='x' && w9=='x') ||
        (w1=='x' && w5=='x' && w9=='x') ||  (w3=='x' && w5=='x' && w7=='x')  )
        {
            spr.innerText="Wygrał krzyżyk";
        }
        else if((w1=='o' && w2=='o' && w3=='o') || (w1=='o' && w4=='o' && w7=='o') || (w2=='o' && w5=='o' && w8=='o') ||
        (w3=='o' && w6=='o' && w9=='o') || (w4=='o' && w5=='o' && w6=='o')  || (w7=='o' && w8=='o' && w9=='o') ||
        (w1=='o' && w5=='o' && w9=='o') ||  (w3=='o' && w5=='o' && w7=='o') )
        {
            spr.innerText="Wygrało kolko";
        }
        else{
            spr.innerText="Remis";
        }



    }



}
function dod1()
{
    
    let x=document.getElementById("1");
    if(kolejka=="x")
    {
    x.innerHTML="<img src=ss.png>";
    kolejka="o";
    w1='x';
    }else{
        x.innerHTML="<img src=index.jpg>"
        kolejka="x";
        w2='o';
    }
    ilosc++;
    x.onclick=false;
    sprawdzacz();
}
function dod2()
{
    
    let x=document.getElementById("2");
    if(kolejka=="x")
    {
    x.innerHTML="<img src=ss.png>";
    kolejka="o";
    w2='x';
    }else{
        x.innerHTML="<img src=index.jpg>"
        kolejka="x";
        w2='o';
    }
    ilosc++;
    x.onclick=false;
    sprawdzacz();
}
function dod3()
{
   
    let x=document.getElementById("3");
    if(kolejka=="x")
    {
    x.innerHTML="<img src=ss.png>";
    kolejka="o";
    w3='x';
    }else{
        x.innerHTML="<img src=index.jpg>"
        kolejka="x";
        w3='o';
    }
    ilosc++;
    x.onclick=false;
    sprawdzacz();
}
    
function dod4()
{
    
    let x=document.getElementById("4");
    if(kolejka=="x")
    {
    x.innerHTML="<img src=ss.png>";
    kolejka="o";
    w4='x';
    }else{
        x.innerHTML="<img src=index.jpg>"
        kolejka="x";
        w4='o';
    }
    x.onclick=false;
    ilosc++;
    sprawdzacz();
}

function dod5()
{
  
    let x=document.getElementById("5");
    if(kolejka=="x")
    {
    x.innerHTML="<img src=ss.png>";
    kolejka="o";
    w5='x';
    }else{
        x.innerHTML="<img src=index.jpg>"
        kolejka="x";
        w5='o';
    }
    ilosc++;
    x.onclick=false;
    sprawdzacz();
}

function dod6()
{
  
    let x=document.getElementById("6");
    if(kolejka=="x")
    {
    x.innerHTML="<img src=ss.png>";
    kolejka="o";
    w6='x';
    }else{
        x.innerHTML="<img src=index.jpg>"
        kolejka="x";
        w6='o';
    }
    ilosc++;
    x.onclick=false;
    sprawdzacz();
}
function dod7()
{
 
    let x=document.getElementById("7");
    if(kolejka=="x")
    {
    x.innerHTML="<img src=ss.png>";
    kolejka="o";
    w7='x';
    }else{
        x.innerHTML="<img src=index.jpg>"
        kolejka="x";
        w7='o';
    }
    ilosc++;
    x.onclick=false;
    sprawdzacz();
}

function dod8()
{
    
    let x=document.getElementById("8");
    if(kolejka=="x")
    {
    x.innerHTML="<img src=ss.png>";
    kolejka="o";
    w8='x';
    }else{
        x.innerHTML="<img src=index.jpg>"
        kolejka="x";
        w8='o';
    }
    ilosc++;
    x.onclick=false;
    sprawdzacz();
}
function dod9()
{
   
    let x=document.getElementById("9");
    if(kolejka=="x")
    {
    x.innerHTML="<img src=ss.png>";
    kolejka="o";
    w9='x';
    }else{
        x.innerHTML="<img src=index.jpg>"
        kolejka="x";
        w9='o';
    }
    ilosc++;
    x.onclick=false;
    sprawdzacz();
}


function czyszczenie(){
    let kolejka="x";
    let ilosc=0;
    var w1="";
    var w2="";
    var w3="";
    var w4="";
    var w5="";
    var w6="";
    var w7="";
    var w8="";
    var w9="";
    document.getElementById('jol').submit();
    for(i=1; i<10; i++)
    {
        w=i.toString();
        document.getElementById(w).innerHTML="";
        document.getElementById(w).onclick=true;
        document.getElementById(w).onclick=dod[i];
        
       
    }
    document.getElementById("wy").innerText="";
    }

    
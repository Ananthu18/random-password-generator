const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password_length = 8

function getrandomcharacter()
{
    let randomindex = Math.floor(Math.random()*characters.length)
    return characters[randomindex]
}

function getrandompassword(){
    let randompassword = ""
    for(let i =0;i < password_length;i++)
    {
        randompassword += getrandomcharacter()   
    }
    return randompassword
}

function genpas(){
    pl = document.getElementById("length-select")
    password_length = pl.value
    pas1 = getrandompassword()
    pas2 = getrandompassword()
    r1 = document.getElementById("pas1")
    r2 = document.getElementById("pas2")
    r1.textContent = pas1
    r2.textContent = pas2
}


function c1(){
    const elem = document.createElement('textarea');
    elem.value = document.getElementById("pas1").textContent;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}

function c2(){
    const elem = document.createElement('textarea');
    elem.value = document.getElementById("pas2").textContent;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}


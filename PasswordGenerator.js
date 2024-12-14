let number='1234567890';
let symbol='!@#$%^&*()';
let Uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let Lowercase='abcdefghijklmnopqrstuvwxyz';


let Up=document.getElementById('UpperCase');
let Lo=document.getElementById('LowerCase');
let Nu=document.getElementById('Numbers')
let Sy=document.getElementById('Symbol');
let result=document.querySelector('.Output h1');
let password=document.getElementById('Length');
let Button=document.querySelector('button');
function resizeTo()
{
    Up.checked = false; // Correctly uncheck the checkbox
    Lo.checked = false;
    Nu.checked = false;
    Sy.checked = false;
    password.value='';

}
Button.addEventListener('click',()=>
{
    let l1 = parseInt(password.value);
    let Option=[];
    if(Up.checked)
          Option.push(Uppercase);
    if(Lo.checked)
        Option.push(Lowercase);
    if(Nu.checked)
        Option.push(number);
    if(Sy.checked)
        Option.push(symbol);
    
    let password1='';
    if(l1<1)
    {
        alert('Password length should be greater than 0');
        resizeTo();
        return;
    }
    for(let i=0;i<l1;i++)
    {
        let dataset=Option[Math.floor(Math.random()*Option.length)];
        let ch=Math.floor(Math.random()*dataset.length);
        password1+=dataset[ch];
    }
    result.textContent=password1;
    resizeTo();
})


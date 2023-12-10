let string="";
let buttons=document.querySelectiorAll('.button');
Array.from(buttons).forEach((button)=>
{
    button.addEventListerner('click',(e)=>{
        if(e.target.innerHTML=='='){
            string = eval(string);
            Document.querySelector('input').value=string;
        }
        else if (e.target.innerHTML=='C'){
            string =""
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target)
            string = string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})

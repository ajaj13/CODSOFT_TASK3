let input = document.querySelector('.display');
let buttons = document.querySelectorAll('.buttons');



let ans = "";

let arr = Array.from(buttons);

arr.forEach( button =>{
    button.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == '='){
            console.log(eval(ans));
            ans = eval(ans);
            input.innerHTML = ans;
        }
        else if(e.target.innerHTML == "AC"){
            ans="";
            input.innerHTML = ans;
        }
        else if(e.target.innerHTML == "DEL"){
            ans = ans.substring(0, ans.length-1);
            input.innerHTML = ans;
        }
        else{
            ans += e.target.innerHTML;
            input.innerHTML = ans;

        }
    })
})
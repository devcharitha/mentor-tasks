const btn = document.getElementById("addButton");
const oddbtn = document.getElementById("oddButton");
const evenbtn = document.getElementById("evenButton");
const data = document.getElementById("EmployeeName");
const list=document.getElementsByClassName("list");
let newList=[];
let allNumbers=[];
let oddArray=[];
let evenArray=[];
btn.addEventListener('click',function(event){
    list[0].innerHTML='';
    let num=data.value;
    allNumbers.push(num);
    if(num % 2 == 0){
        newList.push({ type: 'even', number: num});
    }else{
        newList.push({ type: 'odd', number: num});
    }
    console.log(newList);
    displayNumbers(allNumbers);
});
function displayNumbers(numbers){
    for(let val of numbers){
        list[0].innerHTML +=`<p>${val}</p>`;
    }
    console.log(allNumbers);
}
oddbtn.addEventListener('click',function(event){
    oddArray=[];
    for(let value of newList){
        if(value.number % 2 !==0){
            oddArray.push(value);
            console.log(oddArray);
        }
    }
})
evenbtn.addEventListener('click',function(event){
    evenArray=[];
    for(let each of newList){
        if(each.number % 2 ==0){
            evenArray.push(each);
            console.log(evenArray);
        }
    }
})

let weight = document.querySelector("#weight"); 
let height = document.querySelector("#height");
const btn = document.querySelector("#calbtn");
const list = document.querySelector(".list");   

function Bmi(weight, height){
    let w = parseFloat(weight);
    let h = parseFloat(height);
    let bmi= Number(w)/ Math.pow(Number(h)/100,2);

    return bmi.toFixed(2) ;
}
function Add_data(){
    let str = list.innerHTML;
    let bmi = Bmi(weight.value, height.value);
    if(bmi>24){
        str+=`
       <div class="listItemDanger">
            <h3 class="mb-3 text-center">too fat</h3>
            <ul>
                <li>BMI: ${bmi}</li>
                <li>height:${height.value} cm </li>
                <li>weight:${weight.value} kg </li>
            </ul>
        </div>`
     ;
    }else if(bmi<=18.5){
        str+=`
        <div class="listItemDanger">
             <h3 class="mb-3 text-center">體重過輕</h3>
             <ul>
                 <li>BMI: ${bmi}</li>
                 <li>height:${height.value} cm </li>
                 <li>weight:${weight.value} kg </li>
             </ul>
         </div>`
      ;
    }else{
        str+=`
        <div class="listItem">
             <h3 class="mb-3 text-center">正常</h3>
             <ul>
                 <li>BMI: ${bmi}</li>
                 <li>height:${height.value} cm </li>
                 <li>weight:${weight.value} kg </li>
             </ul>
         </div>`
      ;
    }
    list.innerHTML = str ;
}

btn.addEventListener("click",function(e){
    Add_data();   
});


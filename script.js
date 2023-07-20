var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{
    
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Kekurangan berat badan";    
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        statement.innerText = "Normal";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statement.innerText = "Anda mengalami kelebihan berat badan!! Cara terbaik menurunkan berat badan dengan berolahraga dan mengatur kalori makanan yang dikomsumsi.";
    }else if((BMI >= 30) && (BMI <= 100 )){
        statement.innerText = "OBESITAS!!! Segera turunkan berat anda hingga batas normal.";
    }else{
        statement.innerText = "Masukkan data yang diperlukan!!!";
    }
});
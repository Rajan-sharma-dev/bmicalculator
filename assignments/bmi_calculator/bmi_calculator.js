// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    if( height<=0 || mass<=0){
        return "INVALID INPUT";
    }else{
       
        var BMI;
        BMI = parseInt(mass / (height * height));
        return BMI;

    };
    // Write your code here
}

module.exports = BMICalculator;

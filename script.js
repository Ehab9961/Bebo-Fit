function calculate() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const activity = parseFloat(document.getElementById('activity').value);
    const goal = document.getElementById('goal').value;

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("من فضلك أدخل كل البيانات بشكل صحيح");
        return;
    }

    // BMR حساب
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    let calories = bmr * activity;

    if (goal === "bulk") {
        calories += 300;
    } else {
        calories -= 300;
    }

    const protein = weight * 2.2;
    const fat = weight * 1;
    const proteinCals = protein * 4;
    const fatCals = fat * 9;
    const carbs = (calories - proteinCals - fatCals) / 4;

    document.getElementById('results').innerHTML =
        `السعرات المطلوبة: ${Math.round(calories)} كالوري<br>
        البروتين: ${Math.round(protein)} جرام<br>
        الكارب: ${Math.round(carbs)} جرام<br>
        الدهون: ${Math.round(fat)} جرام`;
}

function calculateBMI() {
    const weight = document.querySelector(".form__weight").value;
    const height = document.querySelector(".form__height").value;
    const result = document.querySelector("#imt");
    let imt = (weight / (Math.pow((height / 100), 2)));
    result.textContent = (imt.toFixed(2));

    if (weight === '') {
        result.textContent = "Введите данные!"
    }
    if (height === '') {
        result.textContent = "Введите данные!"
    }

    if (imt < 18.5) {
        category = "У вас недостаточный вес. Это может указывать на недостаточное питание или другие проблемы со здоровьем.";
        result.style.color = "#FF8C00";
        recommend = "Увеличьте калорийность рациона, добавьте витамины."
    }
    else if (imt >= 18.5 && imt <= 24.9) {
        category = "Поздравляем, у вас нормальный вес. В этом диапазоне считается, что вес находится в здоровых пределах.";
        result.style.color = "green";
        recommend = "Продолжайте в том же духе! Вы в отличной форме!"
    }
    else if (imt >= 25 && imt <= 29.9) {
        category = "У вас избыточный вес. Есть некоторый риск развития связанных с ожирением заболеваний.";
        result.style.color = "aqua";
        recommend = "Необходимо ввести в свою жизнь какую-либо физическую активность."
    }
    else if (imt >= 30 && imt <= 34.9) {
        category = "У вас ожирение I степени. Риск развития заболеваний, связанных с ожирением, значительно повышен.";
        result.style.color = "biscuit";
        recommend = "Советуем вам пересмотреть свой рацион, минимизировать быстрые углеводы и сахар. Ввести в рацион больше сырых овощей и фруктов. Рекомендуем неспешные прогулки."
    }
    else if (imt >= 35 && imt <= 39.9) {
        category = "У вас oжирение II степени. Риск развития серьезных заболеваний, таких как диабет и сердечно-сосудистые заболевания, очень высок.";
        result.style.color = "pink";
        recommend = "Советуем вам пересмотреть свой рацион, минимизировать быстрые углеводы и сахар. Ввести в рацион больше сырых овощей и фруктов. Рекомендуем неспешные прогулки. Также желательно посетить грамотного врача и пройти обследование."
    }
    else {
        category = "У вас тяжелое ожирение (ожирение III степени). Высокий риск развития серьезных заболеваний и осложнений.";
        result.style.color = "red";
        recommend = "Вам необходимо снижать вес под наблюдением квалифицированного специалиста. Обратитесь к нему, как можно скорее! Ваше здоровье в ваших руках."
    }
    if (result.textContent === 'Введите данные!') {
        category = "Пожалуйста, заполните пустые поля."
        recommend = "Рекомендации появятся после ввода ваших параметров."
    }
    document.getElementById("resume").textContent = category;
    document.getElementById("recommend").textContent = recommend;
}






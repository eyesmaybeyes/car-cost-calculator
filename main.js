const dom = {
    carBrand: document.querySelectorAll('option[name="carBrand"]'),
    driveBrands: document.querySelector("#carBrands"),
    fuel: document.querySelectorAll('input[name="fuel"]'),
    service: document.querySelectorAll('input[name="service"]'),
    engine: document.querySelector('input[name="engineCapacity"]'),
    condition: document.querySelectorAll('option[name="condition"]'),
    button: document.getElementById("button")
}

const highEngine = 3.5;
const mediumEngine = 2.2
const lowEngine = 1.1;

let models = {
    genesis: ["G-70", "G-80", "G-90", "GV-70"],
    opel: ["Astra", "Mokka", "Signum", "Tigra"],
    suzuki: ["Alto", "Cervo", "Ignis", "Liana"],
    subaru: ["Legacy", "Justy", "Forester", "Impreza"],
};

dom.driveBrands.addEventListener("change", function () {
    function getCarModel(item) {
        let allItems = models[item];
        document.getElementById("carModel").innerHTML = "";
        for (let item in allItems) {
            let option = document.createElement("option");
            option.value = item;
            option.innerHTML = allItems[item];
            document.getElementById("carModel").appendChild(option);
        }
    }
    getCarModel(this.value);
});

const countPrice = () => {
    let totalPrice = 0;
    let carBrandValue = document.getElementById("carBrands").value;
    let carModelValue = document.getElementById("carModel").value;

    // стоимость марки машины 
    if (carBrandValue == 'genesis') {
        totalPrice = 2000000;
        console.log(totalPrice)
    } else if (carBrandValue == 'opel') {
        totalPrice = 3500000;
        console.log(totalPrice)
    }
    else if (carBrandValue == 'suzuki') {
        totalPrice = 5000000;
        console.log(totalPrice)
    }
    else {
        totalPrice = 6000000;
        console.log(totalPrice)
    }

    // Стоимость модели машины
    if (carModelValue == '0') {
        totalPrice += 20000;
        console.log(totalPrice)
    } else if (carModelValue == '1') {
        totalPrice += 50000;
        console.log(totalPrice)
    }
    else if (carModelValue == '2') {
        totalPrice += 60000;
        console.log(totalPrice)
    }
    else {
        totalPrice += 80000;
        console.log(totalPrice)
    }

    for (let i = 0; i < dom.fuel.length; i++) {
        if (dom.fuel[i].checked) {
            totalPrice += +dom.fuel[i].value;
        }
    }

    for (let i = 0; i < dom.service.length; i++) {
        if (dom.service[i].checked) {
            totalPrice += +dom.service[i].value;
        }
    }

    for (let i = 0; i < dom.condition.length; i++) {
        if (dom.condition[i].selected == true) {
            totalPrice *= +dom.condition[i].value;
        }
    }

    for (let i = 0; i < dom.engine.length; i++) {
        if (dom.engine[i].checked == true) {
            totalPrice += +dom.engine[i].value;
        }
    }

    if (dom.engine.value == highEngine) {
        totalPrice *= 1.3;
        console.log(totalPrice);
    } else if (
        dom.engine.value < highEngine &&
        dom.engine.value > mediumEngine
    ) {
        totalPrice *= 0.8;
        console.log(totalPrice);
    } else {
        totalPrice *= 0.4;
        console.log(totalPrice);
    }

    alert(`Стоимость вашего автомобиля составила ${totalPrice} рублей!`);
};

dom.button.addEventListener("click", countPrice);
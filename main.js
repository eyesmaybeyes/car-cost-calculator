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
    let totalPrice;
    let carBrandValue = document.getElementById("carBrands").value;
    let carModelValue = document.getElementById("carModel").value;

    // стоимость марки машины 
    switch (carBrandValue) {
        case 'genesis':
            totalPrice = 2000000;
            break;
        case 'opel':
            totalPrice = 3500000;
            break;
        case 'suzuki':
            totalPrice = 5000000;
            break;
        case 'subaru':
            totalPrice = 6000000;
            break;
    }
    // Стоимость модели машины
    switch (carModelValue) {
        case '0':
            totalPrice += 20000;
            break;
        case '1':
            totalPrice += 50000;
            break;
        case '2':
            totalPrice += 60000;
            break;
        case '3':
            totalPrice += 80000;
            break;
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
    } else if (
        dom.engine.value < highEngine &&
        dom.engine.value > mediumEngine
    ) {
        totalPrice *= 0.8;
    } else {
        totalPrice *= 0.4;
    }

    alert(`Стоимость вашего автомобиля составила ${totalPrice} рублей!`);
};

dom.button.addEventListener("click", countPrice);
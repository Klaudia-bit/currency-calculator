{
    let currencyName = "";
    const welcome = () => {
        console.log("Cześć Developerzy!");
    }

    welcome()

    const calculateResult = (amountPln, selectedCurrency) => {


        const rateEurElement = document.querySelector(".js-rateEur");
        const rateUsdElement = document.querySelector(".js-rateUsd");
        const rateGbpElement = document.querySelector(".js-rateGbp");
        const rateChfElement = document.querySelector(".js-rateChf");
        const rateEur = rateEurElement.value;
        const rateUsd = rateUsdElement.value;
        const rateGbp = rateGbpElement.value;
        const rateChf = rateChfElement.value;

        switch (selectedCurrency) {
            case "EUR":
                currencyName = "EUR";
                return amountPln / rateEur;

            case "USD":
                currencyName = "USD";
                return amountPln / rateUsd;

            case "GBP":
                currencyName = "GBP";
                return amountPln / rateGbp;

            case "CHF":
                currencyName = "CHF";
                return amountPln / rateChf;

            default:
                console.log("Coś poszło nie tak!")
                break;
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const exchangeElement = document.querySelector(".js-exchange");
        const selectedCurrencyElement = document.querySelector(".js-selectedCurrency");
        const amountPlnElement = document.querySelector(".js-amountPln");
        const selectedCurrency = selectedCurrencyElement.value;
        const amountPln = amountPlnElement.value;

        const result = calculateResult(amountPln, selectedCurrency);

        exchangeElement.innerText = result.toFixed(2) + ' ' + currencyName;
    };

    const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}


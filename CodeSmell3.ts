// ANTES

class Customer {

    name: String;
    balance: number;
    preferredCurrency: String;
    preferredCurrencySymbol: String;
    preferredCurrencyExchangeRateVsUSD: number;

}


// DESPUÉS

class Customer {

    name: String;
    balance: number;
    preferredCurrency: Currency;

}

class Currency {
    name: String
    symbol: String;
    exchangeRateVsUSD: number;
}
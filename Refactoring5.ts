// ANTES

getData(input: Data): void {
    if(input.type == "01") {
    input.performActionA();
} else if (input.type == "02") {
    input.performActionB();
} else {
    input.performActionC();
}
}


// DESPUÉS

const CUSTOMER = "01";
const SUPPLIER = "02";

getData(input: Data): void {
    if(input.type == CUSTOMER) {
    input.performActionA();
} else if (input.type == SUPPLIER) {
    input.performActionB();
} else {
    input.performActionC();
}
}


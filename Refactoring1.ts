// ANTES

printRecipt(): void {
    printCustomerName();

    console.log("name: " + name);
    console.log("amount: " + getOutstanding());
}


// DESPUÉS

printRecipt(): void {
    printCustomerName();
    printCustomerDetails();
}

printCustomerDetails(): void {
    console.log("product: " + product);
    console.log("price: " + getProductPrice());
}
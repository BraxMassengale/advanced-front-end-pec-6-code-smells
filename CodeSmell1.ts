// ANTES

let dataArray1: Data[] = service.getData(customerCode);

for(let i = 0; i < dataArray1.length; i++) {
    if(dataArray1[i].type = "type A") {
        dataArray1[i].performSomeAction();
    } else {
        dataArray1[i].performOtherAction();
    }
}

let dataArray2: Data[] = service.getData(customerCode2);

for(let i = 0; i < dataArray1.length; i++) {
    if(dataArray2[i].type = "type A") {
        dataArray2[i].performSomeAction();
    } else {
        dataArray2[i].performOtherAction();
    }
}

let dataArray3: Data[] = service.getData(customerCode3);

for(let i = 0; i < dataArray1.length; i++) {
    if(dataArray3[i].type = "type A") {
        dataArray3[i].performSomeAction();
    } else {
        dataArray3[i].performOtherAction();
    }
}

// DESPUÉS

let dataArray1: Data[] = manipulateCustomerData(customerCode1);
let dataArray2: Data[] = manipulateCustomerData(customerCode2);
let dataArray3: Data[] = manipulateCustomerData(customerCode3);

manipulateCustomerData(customerCode: number): Data[] {
    let dataArrayVar: Data[] = service.getData(customerCode);

    for(let i = 0; i < dataArray1.length; i++) {
        if(dataArrayVar[i].type = "type A") {
            dataArrayVar[i].performSomeAction();
        } else {
            dataArrayVar[i].performOtherAction();
        }
    }

    return dataArrayVar;
}
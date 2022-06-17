// ANTES

class ServiceBillingReceipt {

    customerServices: Service[];

    getContractedServices() {
        this.customerServices = CustomerEntity.getData();
    }

    getServices() {
        return this.customerServices;
    }
}

class CustomerEntity {

    customerData: Service[];

    getCustomerData(): Service[] {
        this.customerData = Customer.getContractedServices;
    }

    getData() {
        return this.customerData;
    }
}


class Customer {

    contractedServices: Service[];

    getContractedServices() {
        return this.contractedServices;
    }
}


// DESPUÉS

class ServiceBillingReceipt {

    customerServices: Service[];

    getContractedServices() {
        this.customerData = Customer.getContractedServices;
    }

    getServices() {
        return this.customerServices;
    }
}

class CustomerEntity {

    customerData: Service[];

    getCustomerData(): Service[] {
        this.customerData = Customer.getContractedServices;
    }

    getData() {
        return this.customerData;
    }
}


class Customer {

    contractedServices: Service[];

    getContractedServices() {
        return this.contractedServices;
    }
}
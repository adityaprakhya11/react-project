import { Warehouse } from "./models";

let detroitWarehouse: Warehouse[] = [
    {
        name: "iPhone SE",
        price: 399,
        fiveG: false,
    },
    {
        name: "iPhone XR",
        price: 499,
        fiveG: false,
    },
    {
        name: "iPhone 11",
        price: 599,
        fiveG: false,
    },
    {
        name: "iPhone 12 Mini",
        price: 729,
        fiveG: true,
    },
    {
        name: "iPhone 12",
        price: 829,
        fiveG: true,
    },
    {
        name: "iPhone 12 Pro",
        price: 999,
        fiveG: true,
    },
    {
        name: "iPhone 12 Max",
        price: 1099,
        fiveG: true,
    },
    {
        name: "Pixel 4a",
        price: 349,
        fiveG: false,
    },
    {
        name: "Pixel 5",
        price: 699,
        fiveG: true,
    },
];
let newYorkWarehouse: Warehouse[] = [
    {
        name: "iPhone SE",
        price: 399,
        fiveG: false,
    },
    {
        name: "Pixel 5",
        price: 699,
        fiveG: true,
    },
    {
        name: "Pixel 4a 5G",
        price: 499,
        fiveG: true,
    },
    {
        name: "Pixel 4a 5G",
        price: 499,
        fiveG: true,
    },
    {
        name: "Pixel 4a 5G",
        price: 499,
        fiveG: true,
    },
    {
        name: "Pixel 4a",
        price: 349,
        fiveG: false,
    },
    {
        name: "Pixel 4a",
        price: 349,
        fiveG: false,
    },
    {
        name: "Galaxy S10",
        price: 750,
        fiveG: false,
    },
    {
        name: "Galaxy S10+",
        price: 1500,
        fiveG: true,
    },
];
let chicagoWarehouse: Warehouse[] = [
    {
        name: "Galaxy S10",
        price: 750,
        fiveG: false,
    },
    {
        name: "Galaxy S10+",
        price: 1500,
        fiveG: true,
    },
    {
        name: "Galaxy S10+",
        price: 1500,
        fiveG: true,
    },
    {
        name: "Galaxy S10+",
        price: 1500,
        fiveG: true,
    },
    {
        name: "iPhone 12",
        price: 829,
        fiveG: true,
    },
    {
        name: "iPhone 12 Pro",
        price: 999,
        fiveG: true,
    },
    {
        name: "iPhone 12 Max",
        price: 1099,
        fiveG: true,
    },
    {
        name: "Pixel 4a",
        price: 349,
        fiveG: false,
    },
    {
        name: "Pixel 5",
        price: 699,
        fiveG: true,
    },
];

const addPhone = (allPhones: Warehouse[], newName: string, newPrice: number, isFiveG: boolean): void => {
    const newPhone: Warehouse = {
        name: newName,
        price: newPrice,
        fiveG: isFiveG
    }
    allPhones.push(newPhone);
};

const deletePhoneByIndex = (allPhones: Warehouse[], index: number): void => {
    allPhones.splice(index, 1);
};

const deletePhoneByName = (allPhones: Warehouse[], name: string): Warehouse[] => {
    return allPhones.filter((phone) => phone.name !== name);
};

const filter5G = (allPhones: Warehouse[]): Warehouse[] => {
    return allPhones.filter((allPhone) => allPhone.fiveG);
};

const filterPriceLessThan = (allPhones: Warehouse[], price: number): Warehouse[] => {
    return allPhones.filter((phone) => phone.price < price);
};

const filterPriceGreaterThan = (allPhones: Warehouse[], price: number): Warehouse[] => {
    return allPhones.filter((phone) => phone.price > price);
};

const findPhoneByName = (allPhones: Warehouse[], name: string): Warehouse | undefined => {
    return allPhones.find((phone) => phone.name === name);
};

const calcAverageCost = (allPhones: Warehouse[]): number => {
    return allPhones.reduce((total, current) => total += current.price, 0) / allPhones.length;
};

const doWeHave5GPhone = (allPhones: Warehouse[]): boolean => {
    return allPhones.filter((allPhone) => allPhone.fiveG).length > 0;
};

const phoneFlashSale = (allPhones: Warehouse[], sale: number): Warehouse[] => {
    let response: Warehouse[] = [];
    for (let index = 0; index < allPhones.length; index++) {
        const phone = allPhones[index];
        var discountedPrice = phone.price - ((phone.price * sale) / 100);
        phone.price = discountedPrice;
        response.push(phone);
    }

    return response;
};

const phoneFlashSaleV2 = (allPhones: Warehouse[], sale: number, name: string): Warehouse[] => {
    let response: Warehouse[] = [];
    for (let index = 0; index < allPhones.length; index++) {
        const phone = allPhones[index];
        if (phone.name === name) {
            var discountedPrice = phone.price - ((phone.price * sale) / 100);
            phone.price = discountedPrice;
            response.push(phone);
        }
        else
            response.push(phone);
    }

    return response;
};
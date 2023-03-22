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
}

const deletePhoneByName = (allPhones: Warehouse[], name: string): Warehouse[] => {
    const match = allPhones.find((phone) => phone.name === name);
    return allPhones.filter((phone) => phone.name !== name)
}


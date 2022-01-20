// ASSIGNMENT: VEGETABLE GARDEN

// CONSTANTS:
let cost; // Cost of sowing 1 plant
let numCrops; // Number of crops sown
let produceYield; // Yield of 1 plant or 1 crop in KG
let salePrice; // Selling price of a type of fruit or vegetable for 1 KG

// DESCRIPTIONS:
// COST: The cost of sowing 1 plant or 1 KG
// PRODUCE YIELD: The yield of 1 plant
// SALE PRICE: Selling price of a type of fruit or vegetable for 1 KG
// FACTOR: Environmental factor influencing the yield
// REVENUE: The income generated from 1 KG or 1 plant
// PROFIT: The revenue minus the cost from 1 KG or 1 plant


// CROP TYPES
const corn = {
    name: "corn",
    yield: 3,
    factor: {
        sun: {
            low: -50,
            medium: 0,
            high: 50
        },
    },
    salePrice: 5,
    cost: 3
};

const pumpkin = {
    name: "pumpkin",
    yield: 4,
    factor: {
        sun: {
            low: -50,
            medium: 0,
            high: 50
        },
    },
    salePrice: 7,
    cost: 4
};

const avocado = {
    name: "avocado",
    yield: 3,
    factor: {
        sun: {
            low: -20,
            medium: 0,
            high: 50
        },
        wind: {
            low: 0,
            medium: -20,
            high: -60
        }
    },
    salePrice: 8,
    cost: 4
};

// ENVIRONMENTAL FACTORS
const environmentalFactors = {
    sun: null,
    wind: null,
    rain: null,
    soil: null
};

// CROPS IN VEGETABLE GARDEN
const crops = [
    { crop: corn, numCrops: 5 },
    { crop: pumpkin, numCrops: 2}
    //{ crop: avocado, numCrops: 10}
];
//console.log(crops);


// INPUT VARIABLES
const cropInput = (cropArray, cropType) => {    
    cropArray.forEach(element => {
        const cropName = element.crop.name;
        let query = cropType;       
        if (cropName.includes(query.name) ) {
            //console.log("Crop type: ", element);
            return element;
        };
    });
};
cropInput(crops, corn);

const inputCorn = {
    crop: corn,
    numCrops: 5
};

const inputPumpkin = {
    crop: pumpkin,
    numCrops: 2
};


/* ----------------------------------------------------------------------------------*/

// CALCULATIONS:

// YIELD PER PLANT
const getYieldForPlant = (crop) => {
    const produceYield = crop.yield;
    console.log("Plant yield: ", produceYield);
    return produceYield;    
};
//getYieldForPlant(corn);

// YIELD PER CROP
//OLD CODE:
/*
const getYieldForCrop = (cropType, cropArray) => {
    cropArray.forEach(element => {
        const cropName = element.crop.name;
        let query = cropType;        
        if (cropName.includes(query.name) ) {
            console.log("Crop yield: ", element.numCrops * element.crop.yield);
            return element.numCrops * element.crop.yield;
        }    
    });
};
getYieldForCrop(pumpkin, crops);
*/

//OLD REVISED CODE:
/*
const getYieldForCrop = (cropGroup) => {    
    cropGroup.forEach((element) => {
        console.log("Crop yield: ", element.crop.name, element.numCrops * element.crop.yield);
        return element.numCrops * element.crop.yield;
    });    
};
getYieldForCrop(crops);
*/

//NEW CODE
/*
const getYieldForCrop = (cropGroup) => {
    if (cropGroup.crop != undefined) {
        console.log(cropGroup.crop.yield * cropGroup.numCrops);
        return cropGroup.crop.yield * cropGroup.numCrops;
    };
};
getYieldForCrop(crops);
*/

const getYieldForCrop = (input) => {
    const result = input.numCrops * input.crop.yield;
    //console.log(`The crop yield for ${input.crop.name} is ${result}`);
    return result;
};
getYieldForCrop(inputPumpkin);


// TOTAL YIELD OF GARDEN
const getTotalYield = (cropObject) => {
    const cropArray = cropObject['crops'].map(element => {
        return element.numCrops * element.crop.yield;
    });
    const totalYield = cropArray.reduce((acc, current) => acc + current, 0);
    //console.log("Total yield: ", totalYield);
    return totalYield;
};
getTotalYield({crops});


// COST PER CROP
const getCostForCrop = (input) => {
    const result = input.numCrops * input.crop.cost;
    //console.log(`The crop cost for ${input.crop.name} is ${result}`);
    return result;
};
//getCostForCrop(inputPumpkin);

const getRevenueForCrop = (input) => {
    const result = input.numCrops * (input.crop.yield * input.crop.salePrice);
    //console.log(`The crop revenue for ${input.crop.name} is ${result}`);
    return result;
};
//getRevenueForCrop(inputPumpkin);

const getProfitForCrop = (input) => {
    const result = getRevenueForCrop(input) - getCostForCrop(input);
    //console.log(`The crop profit for ${input.crop.name} is ${result}`);
    return result;
};
getProfitForCrop(inputPumpkin);

const getTotalProfit = (cropArray) => {
    const result = cropArray.map(element => {
        const itemResult = getProfitForCrop(element);
        return itemResult;
    });
    const totalProfit = result.reduce((acc, current) => acc + current, 0);
    console.log("Total profit: ", totalProfit);
    return totalProfit;
};
getTotalProfit(crops);

module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
};

// ASSIGNMENT: VEGETABLE GARDEN

// DESCRIPTIONS:
// COST: The cost of sowing 1 plant or 1 KG
// PRODUCE YIELD: The yield of 1 plant
// SALE PRICE: Selling price of a type of fruit or vegetable for 1 KG
// FACTOR: Environmental factor influencing the yield
// REVENUE: The income generated from 1 KG or 1 plant
// PROFIT: The revenue minus the cost from 1 KG or 1 plant

// ENVIRONMENTAL FACTORS
const environmentalFactors = {
    sun: "low",
    wind: "high",
    rain: "medium",
    soil: "medium"
};

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

// CROPS IN VEGETABLE GARDEN
const crops = [
    { crop: corn, numCrops: 5 },
    { crop: pumpkin, numCrops: 2},
    { crop: avocado, numCrops: 10}
];

// INPUT VARIABLES
const inputCorn = {
    crop: corn,
    numCrops: 5
};

const inputPumpkin = {
    crop: pumpkin,
    numCrops: 2
};

const inputAvocado = {
    crop: avocado,
    numCrops: 10,
};


/* ----------------------------------------------------------------------------------*/


// Filter out null, undefined & 0
const checkProperties = ((obj) => {
    for (let key in obj) {
        if (obj[key] === null || obj[key] === undefined || obj[key] === 0) {
            return false;
        } else {
            return true;
        };
    };
});

// Extract & convert object into array with objects & filter properties
const convertArray = (envFactors, crop) => {
    
    const resultArray = Object.keys(envFactors).map(function (key) {
        return { [key]: envFactors[key] }
    }).filter((factorObj) => {
        if (checkProperties(factorObj) && checkProperties(crop.factor)) {
            return factorObj;
        }
    }).map((nFactorObj) => {
        for (let property in nFactorObj) {
            return { factor: property, value: nFactorObj[property] };
        };
    });
    return resultArray;
};

// Retrieve number from factor(s)
const getNumArray = (envFactors, crop) => {    
    const resultArray = convertArray(envFactors, crop)
    const numFactor = resultArray.map((factorItem) => {
        let queryFactor = factorItem.factor;
        let queryValue = factorItem.value;
        let valueNum = crop.factor;
        switch (queryFactor) {
            case 'sun':
                if (valueNum.hasOwnProperty('sun')) {
                    switch (queryValue) {
                        case 'low':
                            return valueNum.sun.low;
                        case 'medium':
                            return valueNum.sun.medium;
                        case 'high':
                            return valueNum.sun.high;
                    };
                    break;
                };
            case 'wind':
                if (valueNum.hasOwnProperty('wind')) {
                    switch (queryValue) {
                        case 'low':
                            return valueNum.wind.low;
                        case 'medium':
                            return valueNum.wind.medium;
                        case 'high':
                            return valueNum.wind.high;
                    };
                    break;
                };                
            case 'rain':
                if (valueNum.hasOwnProperty('rain')) {
                    switch (queryValue) {
                        case 'low':
                            return valueNum.rain.low;
                        case 'medium':
                            return valueNum.rain.medium;
                        case 'high':
                            return valueNum.rain.high;
                    };
                    break;
                };                
            case 'soil':
                if (valueNum.hasOwnProperty('soil')) {
                    switch (queryValue) {
                        case 'low':
                            return valueNum.soil.low;
                        case 'medium':
                            return valueNum.soil.medium;
                        case 'high':
                            return valueNum.soil.high;   
                    };
                    break;
                };                
            default:
                return 0;
        };
    });
    return numFactor;
};

/* -----------------------------------------------------------------------*/

// CALCULATIONS:

// YIELD PER PLANT
const getYieldForPlant = (crop, envFactors) => {
    const produceYield = crop.yield;
    
    // Convert percentages & calculate yield
    const numFactor = getNumArray(envFactors, crop);
    const yieldCalc = numFactor.map((nFactor) => {
        if(nFactor < 0) {
            posNum = Math.abs(nFactor);
            let calcPerc = (100 - posNum) / 100;
            return calcPerc;
        } else if (nFactor >= 0) {
            let calcPerc = (nFactor) / 100;
            return calcPerc;
        }
    }).reduce((result, factor) => {
        if (factor != 0) {
            return Math.round(((result * factor) + Number.EPSILON) * 100) / 100;
        } else if (factor == 0) {
            return result;
        }        
    }, produceYield);
    console.log(`Yield per plant: ${crop.name} - ${yieldCalc}KG`);
    return yieldCalc;    
};
getYieldForPlant(avocado, environmentalFactors);

/* -------------------------------------------------------*/

// YIELD PER CROP
const getYieldForCrop = (input, envFactors) => {

    const inputCrop = input.crop;
    const plantYield = getYieldForPlant(inputCrop, envFactors);
    const result = input.numCrops * plantYield;
    console.log(`Crop yield: ${input.crop.name} - ${result}KG`);
    return result;
};
getYieldForCrop(inputAvocado, environmentalFactors);

/* -------------------------------------------------------*/

// TOTAL YIELD OF GARDEN
const getTotalYield = (cropObject, envFactors) => {
    const totalYield = cropObject['crops'].map(cropObj => {
        const cropYield = getYieldForCrop(cropObj, envFactors);
        return cropYield;
    }).reduce((acc, current) => acc + current, 0);
    console.log(`Total yield: ${totalYield}KG`);
    return totalYield;
};
getTotalYield({crops}, environmentalFactors);

/* -------------------------------------------------------*/

// COST PER CROP
const getCostForCrop = (input) => {
    const result = input.numCrops * input.crop.cost;
    console.log(`Crop cost: ${input.crop.name} - ${result} Euro`);
    return result;
};
getCostForCrop(inputAvocado);

/* -------------------------------------------------------*/

// REVENUE PER CROP
const getRevenueForCrop = (input, envFactors) => {
    const cropYield = getYieldForCrop(input, envFactors);
    const result = cropYield * input.crop.salePrice;
    console.log(`Crop revenue: ${input.crop.name} - ${result} Euro`);
    return result;
};
getRevenueForCrop(inputAvocado, environmentalFactors);

/* -------------------------------------------------------*/

const getProfitForCrop = (input, envFactors) => {
    const result = getRevenueForCrop(input, envFactors) - getCostForCrop(input);
    console.log(`Crop profit: ${input.crop.name} - ${result} Euro`);
    return result;
};
getProfitForCrop(inputAvocado, environmentalFactors);

/* -------------------------------------------------------*/

const getTotalProfit = (cropArray, envFactors) => {
    const result = cropArray.map(element => {
        const itemResult = getProfitForCrop(element, envFactors);
        return itemResult;
    });
    const totalProfit = result.reduce((acc, current) => acc + current, 0);
    console.log(`Total profit: ${totalProfit} Euro`);
    return totalProfit;
};
getTotalProfit(crops, environmentalFactors);

/* -------------------------------------------------------*/

module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
};

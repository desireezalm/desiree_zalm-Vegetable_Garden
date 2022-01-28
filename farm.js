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
//console.log(corn.factor.sun.low);

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

// Filter out null and undefined properties
const checkProperties = ((obj) => {
    //console.log(obj);
    for (let key in obj) {
        if (obj[key] === null || obj[key] === undefined || obj[key] === 0) {
            return false;
        } else {
            return true;
        };
    };
});


// YIELD PER PLANT
const getYieldForPlant = (crop, envFactors) => {
    const produceYield = crop.yield;
   
    // Convert object envFactors into array with objects & filter properties
    const resultArray = Object.keys(envFactors).map(function (key) {
        return { [key]: envFactors[key] };
    }).filter((factorObj) => {
        if (checkProperties(factorObj) && checkProperties(crop.factor)) {
            return factorObj;
        };
    }).map((nFactorObj) => {
        for (let property in nFactorObj) {
            return { factor: property, value: nFactorObj[property] };
        };
    });
    
    // Retrieve number from factor(s)
    const numFactor = resultArray.map((factorItem) => {
        let queryFactor = factorItem.factor;
        let queryValue = factorItem.value;
        let valueNum = crop.factor;
        switch (queryFactor) {
            case 'sun':
                if (!valueNum.hasOwnProperty('sun')) {
                    return 0;
                } else {
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
                if (!valueNum.hasOwnProperty('wind')) {
                    return 0;
                } else {
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
                if (!valueNum.hasOwnProperty('rain')) {
                    return 0;
                } else {
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
                if (!valueNum.hasOwnProperty('soil')) {
                    return 0;
                } else {
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

    // Convert percentages
    const convFactor = numFactor.map((nFactor) => {
        if(nFactor < 0) {
            posNum = Math.abs(nFactor);
            let calcPerc = (100 - posNum) / 100;
            console.log("percentage", calcPerc, typeof calcPerc);
            return calcPerc;
        } else if (nFactor >= 0) {
            let calcPerc = (nFactor) / 100;
            console.log("percentage", calcPerc, typeof calcPerc);
            return calcPerc;
        }
    }).reduce((result, factor) => {
        if (factor != 0) {
            console.log("Factor: ", factor);
            console.log("Calculation: ", Math.round(((result * factor) + Number.EPSILON) * 100) / 100)
            return Math.round(((result * factor) + Number.EPSILON) * 100) / 100;
        } else if (factor == 0) {
            return result;
        }
        //console.log("Result: ", result);
        
    }, produceYield);
    console.log("Converted factor: ", convFactor);
    
};
getYieldForPlant(avocado, environmentalFactors);



// YIELD PER CROP
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
    //console.log("Total profit: ", totalProfit);
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

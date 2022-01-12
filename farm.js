// ASSIGNMENT: VEGETABLE GARDEN

// CONSTANTS:
let cost; // Cost of sowing 1 plant
let numCrops; // Number of crops sown
let produceYield; // Yield of 1 plant or 1 crop in KG
let salePrice; // Selling price of a type of fruit or vegetable for 1 KG

const revenue = (produceYield, salePrice) => {
    console.log("Revenue of 1 KG produce: ", produceYield * salePrice);
    return produceYield * salePrice; // Turnover or income of 1 KG of fruit or vegetable
};

const costKG = (cost, produceYield) => {
    const result = cost / produceYield;
    console.log("Cost of 1 KG produce: ", Math.round(result * 100) / 100);
    return Math.round(result * 100) / 100; // Cost of 1 KG of produce
};

const profit = (revenue, costKG) => {
    revenue - costKG; // Revenue - costs of 1 KG of fruit or vegetable
};


cost = 10;
numCrops = 5;
produceYield = 3;
salePrice = 10;
console.log("Cost of 1 plant: ", cost);
console.log("Number of crops: ", numCrops);
console.log("Yield of 1 plant in KG: ", produceYield);
console.log("Selling price for 1 KG: ", salePrice);
costKG(cost, produceYield);
revenue(produceYield, salePrice);

//console.log("Revenue of 1 KG produce: ", revenue(3, 20));
//console.log("Profit of 1 KG produce: ", profit(revenue, costKG));


/*

// CROP TYPES
const corn = {
    name: "corn",
    yield: 3,
    factor: {
        sun: {
            low: -50,
            medium: 0,
            high: 50
        }
    }
};

const pumpkin = {
    name: "pumpkin",
    yield: 4,
    factor: {
        sun: {
            low: -50,
            medium: 0,
            high: 50
        }
    }
}

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
    }
};

// ENVIRONMENTAL FACTORS
const environmentalFactors = {
    sun: null,
    wind: null,
    rain: null,
    soil: null
}

// CROPS IN VEGETABLE GARDEN
const crops = [
    { crop: corn, numCrops: 5 },
    { crop: pumpkin, numCrops: 2}
];



// CALCULATION CODE
const getYieldForPlant = () => {

};

const getYieldForCrop = () => {
    // CODE
};

const getTotalYield = () => {
    // CODE
};




module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield
};

*/
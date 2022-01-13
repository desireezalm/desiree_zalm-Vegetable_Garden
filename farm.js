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
    produceYield: 3,
    factor: {
        sun: {
            low: -50,
            medium: 0,
            high: 50
        }
    },
    salePrice: 5,
    cost: 3
};

const pumpkin = {
    name: "pumpkin",
    produceYield: 4,
    factor: {
        sun: {
            low: -50,
            medium: 0,
            high: 50
        }
    },
    salePrice: 7,
    cost: 4
}

const avocado = {
    name: "avocado",
    produceYield: 3,
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
}

// CROPS IN VEGETABLE GARDEN
const crops = [
    { crop: corn, numCrops: 5 },
    { crop: pumpkin, numCrops: 2},
    //{ crop: avocado, numCrops: 3}
];

const getCrops = () => {
    crops.forEach(element => {
        console.log("Crop: ", element.crop.name, element.numCrops);
    });
};
//getCrops();

// REVENUE OF 1 PLANT
const revenuePlant = ( crop ) => {
    //console.log("Revenue per plant: ", crop.name, crop.produceYield * crop.salePrice);
    return crop.produceYield * crop.salePrice;
};
revenuePlant(corn);

// REVENUE PER KG
const revenueKG = (crop) => {
    //console.log("Revenue of 1 KG produce: ", crop.name, crop.salePrice);
    return crop.salePrice;
};
revenueKG(corn);

// THE COST OF 1 PLANT
const costPlant = (crop) => {
    //console.log("Cost per plant: ", crop.name, crop.cost);
    return crop.produceYield;
};
costPlant(corn);

// THE COST PER KG
const costKG = (crop) => {
    const result = crop.cost / crop.produceYield;
    //console.log("Cost of 1 KG produce: ", crop.name, Math.round(result * 100) / 100);
    return Math.round(result * 100) / 100; // Cost of 1 KG of produce
};
costKG(corn);

// THE PROFIT OF 1 PLANT (REVENUE MINUS COST)
const profitPlant = (crop) => {
    const resultRevenue = revenuePlant(crop);
    const resultCost = costPlant(crop);
    const result = resultRevenue - resultCost;
    //console.log("Profit per plant: ", crop.name, result);
    return result;
};
profitPlant(corn);

// THE PROFIT PER KG
const profitKG = (crop) => {
    const resultRevenue = revenueKG(crop);
    const resultCost = costKG(crop);
    const result = resultRevenue - resultCost;
    //console.log("Profit per KG: ", crop.name, result);
    return result;
};
profitKG(corn);

/* ----------------------------------------------------------------------------------*/

// CALCULATION CODE
const getYieldForPlant = (crop) => {
    //console.log(crop.name, crop.produceYield);
    //return crop.produceYield;
    produceYield = 30;
    return produceYield;
};
getYieldForPlant(corn);

const getYieldForCrop = (crop) => {
    const result = crops.find(element => element.name = crop)
    //console.log("Yield of total crop: ", crop.name, result.numCrops * crop.produceYield);
    //return result.numCrops * crop.produceYield;
    produceYield = 3;
    numCrops = 10;
    return produceYield * numCrops;
};
getYieldForCrop(corn);

const getTotalYield = () => {
    const yieldArray = crops.map(element => {
        return element.numCrops * element.crop.produceYield;
    });
    const totalYield = yieldArray.reduce((acc, current) => acc + current, 0);
    console.log("Total yield: ", totalYield);
    return totalYield;



};
getTotalYield();


module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield
};

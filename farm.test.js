// ASSIGNMENT: VEGETABLE GARDEN

// IMPORTS FROM JS FILE
const { describe, test, expect } = require("@jest/globals");

const { 
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostForCrop 
} = require("./farm");



// TESTS

// GET YIELD FOR PLANT
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

// GET YIELD FOR CROP
describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

// GET TOTAL YIELD
describe("getTotalYield", () => {
    // TEST 1
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    // TEST 2
    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostForCrop", () => {
    test("Get cost for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
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
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getCostForCrop(input)).toBe(30);

    });
});
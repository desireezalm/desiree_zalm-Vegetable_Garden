// ASSIGNMENT: VEGETABLE GARDEN

// IMPORTS FROM JS FILE
const { describe, test, expect } = require("@jest/globals");

const { 
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
} = require("./farm");



// TESTS

// GET YIELD FOR PLANT
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    const environmentalFactors = {
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn, environmentalFactors)).toBe(30);
    });
});

describe("getYieldForPlant (incl. environmental factors)", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50
            },
        },
    };

    const environmentalFactors = {
        sun: "low",
        rain: "medium"
    };

    test("Get yield for plant with environment factor", () => {
        expect(getYieldForPlant(corn, environmentalFactors)).toBe(15);
    });
});

/* -------------------------------------------------------*/

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

        const environmentalFactors = {
        };

        expect(getYieldForCrop(input, environmentalFactors)).toBe(30);
    });
});

describe("getYieldForCrop (incl. environmental factors)", () => {
    test("Get yield for crop with environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };

        const environmentalFactors = {
            sun: "low",
            rain: "medium"
        };
        expect(getYieldForCrop(input, environmentalFactors)).toBe(150);
    });
});

/* -------------------------------------------------------*/

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
    test("Get cost for crop, simple", () => {
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

describe("getRevenueForCrop", () => {
    test("Get revenue for crop, simple", () => {
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
        expect(getRevenueForCrop(input)).toBe(150);
    });

    // FAIL TEST:
    test("get revenue with 0 qty", () => {
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
            numCrops: 0,
        };
        expect(getRevenueForCrop(input)).toBe(0);
    });
});

describe("getProfitForCrop", () => {
    test("Get profit for crop, simple", () => {
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
        expect(getProfitForCrop(input)).toBe(120);
    });

    test("get profit with 0 qty", () => {
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
            numCrops: 0,
        };
        expect(getProfitForCrop(input)).toBe(0);
    });
});

describe("getTotalProfit", () => {
    test("Get total profit for multiple crops, simple", () => {
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

        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 }
        ];
        expect(getTotalProfit(crops)).toBe(108);
    });

    test("Get total profit for multiple crops with 0 qty", () => {
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

        const crops = [
            { crop: corn, numCrops: 0 },
            { crop: pumpkin, numCrops: 0 }
        ];
        expect(getTotalProfit(crops)).toBe(0);
    });

    test("Get total profit for multiple crops with only 1 crop having qty", () => {
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

        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 0 }
        ];
        expect(getTotalProfit(crops)).toBe(120);
    });
});
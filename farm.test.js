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
    // TEST 1
    test("Get yield for plant with no environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
        };    
        const environmentalFactors = {
        };
        expect(getYieldForPlant(corn, environmentalFactors)).toBe(30);
    });
});

describe("getYieldForPlant (incl. environmental factors)", () => {
    // TEST 2
    test("Get yield for plant with environment factor", () => {
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
        expect(getYieldForPlant(corn, environmentalFactors)).toBe(15);
    });
});

/* -------------------------------------------------------*/

// GET YIELD FOR CROP
describe("getYieldForCrop", () => {
    // TEST 1
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
    // TEST 2
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
        const environmentalFactors = {
        };
        expect(getTotalYield({ crops }, environmentalFactors)).toBe(23);
    });

    // TEST 2
    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        const environmentalFactors = {
        };
        expect(getTotalYield({ crops }, environmentalFactors)).toBe(0);
    });
});

describe("getTotalYield (incl. environmental factors)", () => {
    // TEST 3
    test("Calculate total yield with multiple crops with environment factors", () => {
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
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: avocado, numCrops: 10 },
        ];
        const environmentalFactors = {
            sun: "low",
            wind: "high",
            rain: "medium",
            soil: "medium"
        };
        expect(getTotalYield({ crops }, environmentalFactors)).toBe(84.6);
    });

    // TEST 4
    test("Calculate total yield with 0 amount & with environment factors", () => {
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
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        const environmentalFactors = {
            sun: "low",
            wind: "high",
            rain: "medium",
            soil: "medium"
        };
        expect(getTotalYield({ crops }, environmentalFactors)).toBe(0);
    });
});

/* -------------------------------------------------------*/

describe("getCostForCrop", () => {
    // TEST 1
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

/* -------------------------------------------------------*/

// GET REVENUE FOR CROP
describe("getRevenueForCrop", () => {
    // TEST 1
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
        const environmentalFactors = {
        };
        expect(getRevenueForCrop(input, environmentalFactors)).toBe(150);
    });

    // TEST 2
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
        const environmentalFactors = {
        };
        expect(getRevenueForCrop(input, environmentalFactors)).toBe(0);
    });
});

describe("getRevenueForCrop (environmental factors)", () => {
    // TEST 3
    test("Get revenue for crop, with environmental factors", () => {
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
        const environmentalFactors = {
            sun: "low",
            wind: "high",
            rain: "medium",
            soil: "medium"
        };
        expect(getRevenueForCrop(input, environmentalFactors)).toBe(75);
    });

    // TEST 4
    test("get revenue with 0 qty, with environmental factors", () => {
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
        const environmentalFactors = {
            sun: "low",
            wind: "high",
            rain: "medium",
            soil: "medium"
        };
        expect(getRevenueForCrop(input, environmentalFactors)).toBe(0);
    });
});

/* -------------------------------------------------------*/

// GET PROFIT PER CROP
describe("getProfitForCrop", () => {
    // TEST 1
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
        const environmentalFactors = {
        };
        expect(getProfitForCrop(input, environmentalFactors)).toBe(120);
    });

    // TEST 2
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
        const environmentalFactors = {
        };
        expect(getProfitForCrop(input, environmentalFactors)).toBe(0);
    });
});

describe("getProfitForCrop (incl. environmental factors", () => {
    // TEST 3
    test("Get profit for crop, with environmental factors", () => {
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
        const environmentalFactors = {
            sun: "low",
            wind: "high",
            rain: "medium",
            soil: "medium"
        };
        expect(getProfitForCrop(input, environmentalFactors)).toBe(45);
    });

    // TEST 4
    test("Get profit for crop, with environmental factors", () => {
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
        const input = {
            crop: avocado,
            numCrops: 10,
        };
        const environmentalFactors = {
            sun: "low",
            wind: "high",
            rain: "medium",
            soil: "medium"
        };
        expect(getProfitForCrop(input, environmentalFactors)).toBe(36.8);
    });
});

/* -------------------------------------------------------*/

describe("getTotalProfit", () => {
    // TEST 1
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
        const environmentalFactors = {
        };
        expect(getTotalProfit(crops, environmentalFactors)).toBe(108);
    });

    // TEST 2
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
        const environmentalFactors = {
        };
        expect(getTotalProfit(crops, environmentalFactors)).toBe(0);
    });
    // TEST 3
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
        const environmentalFactors = {
        };
        expect(getTotalProfit(crops, environmentalFactors)).toBe(120);
    });
});

describe("getTotalProfit (incl. environmental factors)", () => {
    // TEST 4
    test("Get total profit for multiple crops, with environmental factors", () => {
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
        const environmentalFactors = {
            sun: "low",
            wind: "high",
            rain: "medium",
            soil: "medium"
        };
        expect(getTotalProfit(crops, environmentalFactors)).toBe(42.5);
    });

    // TEST 5
    test("Get total profit for multiple crops with only 1 crop having qty, with environmental factors", () => {
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
            { crop: pumpkin, numCrops: 0 }
        ];
        const environmentalFactors = {
            sun: "low",
            wind: "high",
            rain: "medium",
            soil: "medium"
        };
        expect(getTotalProfit(crops, environmentalFactors)).toBe(22.5);
    });
    // TEST 6
    test("Get total profit for multiple crops with 0 qty, with environmental factors", () => {
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
        const environmentalFactors = {
            sun: "low",
            wind: "high",
            rain: "medium",
            soil: "medium"
        };
        expect(getTotalProfit(crops, environmentalFactors)).toBe(0);
    });
});
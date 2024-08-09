const { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    
    let valueInDollar = 3.5 * oneEuroIs.USD;
    const expected =valueInDollar;
    
    expect(dollars).toBeCloseTo(expected);
});

test("One dollar should be 146.26 yen", function() {
    const yen = fromDollarToYen(3.5);
    // Converts US Dollars to Japanese Yen (using an intermediate conversion to Euros)
    let valueInEuro = 3.5 / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    const expected = valueInYen
    
    expect(yen).toBeCloseTo(expected);
});

test("One yen should be 0.005 pounds", function() {
    const pound = fromYenToPound(3.5);
    // Converts Japanese Yen to British Pounds (using an intermediate conversion to Euros)
    let valueInEuro = 3.5 / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    const expected = valueInPound;
    
    expect(pound).toBeCloseTo(expected);
});

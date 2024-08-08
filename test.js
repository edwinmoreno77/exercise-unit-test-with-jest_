const { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    
    let valueInDollar = 3.5 * oneEuroIs.USD;
    let roundedValueInDollar = valueInDollar.toFixed(2);
    const expected = parseFloat(roundedValueInDollar);
    
    expect(dollars).toBe(expected);
});

test("One dollar should be 146.26 yen", function() {
    const yen = fromDollarToYen(3.5);
    
    let valueInEuro = 3.5 / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    let roundedValueInYen = valueInYen.toFixed(2);
    const expected = parseFloat(roundedValueInYen);
    
    expect(yen).toBe(expected);
});

test("One yen should be 0.005 pounds", function() {
    const pound = fromYenToPound(3.5);
    
    let valueInEuro = 3.5 / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    let roundedValueInPound = valueInPound.toFixed(2);
    const expected = parseFloat(roundedValueInPound);
    
    expect(pound).toBe(expected);
});

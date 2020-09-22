import healthIndicator from '../app.js';

test('above 50', () => {
    const checker = healthIndicator({name: 'Маг', health: 90});
    const expected = 'healthy';
});

test('on 50', () => {
    const checker = healthIndicator({name: 'Маг', health: 50});
    const expected = 'wounded';
});

test('on 25', () => {
    const checker = healthIndicator({name: 'Маг', health: 25});
    const expected = 'wounded';
});

test('on 15', () => {
    const checker = healthIndicator({name: 'Маг', health: 15});
    const expected = 'wounded';
});

test('on 2', () => {
    const checker = healthIndicator({name: 'Маг', health: 2});
    const expected = 'critical';
});

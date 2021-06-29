import getStatus from '../status.js';

// const heroStatus = require('../index');

test('unit status critical', () => {
    const result = getStatus({ name: 'char1', health: 10 });

    expect(result).toBe('critical');
});

test('unit status wounded', () => {
    const result = getStatus({ name: 'char1', health: 50 });

    expect(result).toBe('wounded');
});

test('unit status healthy', () => {
    const result = getStatus({ name: 'char1', health: 100 });

    expect(result).toBe('healthy');
});

test('unit status empty', () => {
    const result = getStatus({});

    expect(result).toBe(null);
});

var util = require('util');

describe('util object related', function() {
    it('merge', function() {
        var foo = {
            a: 0
        };
        var bar = {};
        var baz = {};
        var obj = util.merge({}, foo);
        expect(obj).toEqual(foo);
    });
    it('fetch', function() {
        var foo = {
            a: 0,
            b: 1,
            c: 2,
        };
        var bar = {
            a: 'a',
            b: 'b',
            d: 'd'
        };
        var baz = {
            a: 'a',
            b: 'b',
            c: 2
        };
        expect(util.fetch(foo, bar)).toEqual(baz);
    });
    it('object2string', function() {
        var obj = {
            k1: 'v1',
            k2: 2
        };
        expect(util.object2string(obj)).toBe('k1=v1,k2=2');
        expect(util.object2string(obj,'/')).toBe('k1=v1/k2=2');
    });
});
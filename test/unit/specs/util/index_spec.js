var util = require('src/util');

describe('util', function() {

    describe('objects', function() {
        it('o', function() {
            var o = util.o;
            expect(o).toEqual(jasmine.any(Object));
        });
        it('f', function() {
            var f = util.f;
            expect(f).toEqual(jasmine.any(Function));
        });
        it('blank', function() {
            var blank = ' ';
            expect(util.regBlank.test(blank)).toBe(true);
            var noBlank = '';
            expect(util.regBlank.test(noBlank)).toBe(false);
        });
    });

});

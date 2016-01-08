var dom = require('dom');

describe('createIframe', function() {
    it('empty options', function(done) {
        var iframe = dom.createIframe();
        expect(iframe.name).toEqual('');
        expect(+iframe.frameBorder).toEqual(0);
        expect(iframe.style.display).toEqual('none');
        setTimeout(function() {
            expect(iframe.src).toEqual('about:blank');
            done();
        }, 10);
    });
    it('name', function() {
        var options = {
            name: 'foo'
        };
        var iframe = dom.createIframe(options);
        expect(iframe.name).toEqual('foo');
    });
    it('visible', function() {
        var options = {
            visible: true
        };
        var iframe = dom.createIframe(options);
        expect(iframe.style.display).not.toEqual('none');
    });
    it('src', function(done) {
        var src = 'https://www.baidu.com/';
        var options = {
            src: src
        };
        var iframe = dom.createIframe(options);
        setTimeout(function() {
            expect(iframe.src).toEqual(src);
            done();
        }, 10);
    });
});

describe('onload related', function() {
    var onload;
    var options;
    var iframe;
    beforeEach(function() {
        onload = jasmine.createSpy('onload');
        options = {
            onload: onload
        };
    });
    it('onload', function(done) {
        iframe = dom.createIframe(options);
        setTimeout(function() {
            expect(onload.calls.count()).toEqual(1);
            iframe.src = 'https://www.baidu.com/';
            setTimeout(function() {
                expect(onload.calls.count()).toEqual(1);
                done();
            }, 1000);
        }, 1000);
    });
    it('multi onload', function(done) {
        options.multi = true;
        iframe = dom.createIframe(options);
        setTimeout(function() {
            expect(onload.calls.count()).toEqual(1);
            iframe.src = 'https://www.baidu.com/';
            setTimeout(function() {
                expect(onload.calls.count()).toEqual(2);
                done();
            }, 1000);
        }, 1000);
    });
});
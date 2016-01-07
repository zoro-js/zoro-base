var util = require('./index');

util.fetch = function(obj, config) {
    Object.keys(obj).forEach(function(key) {
        var value = obj[key];
        if (util.exist(config[key])) {
            obj[key] = config[key];
        }
    });
    return obj;
};

util.object2string = function(obj, sep, encode) {
    if (!obj) {
        return '';
    }
    var arr = [];
    Object.keys(obj).forEach(function(key) {
        var value = obj[key];
        if (util.isFunction(value)) {
            return;
        }
        if (util.isDate(value)) {
            value = value.getTime();
        } else if (util.isArray(value)) {
            value = value.join(',');
        } else if (util.isObject(value)) {
            value = JSON.stringify(value);
        }
        if (!!encode) {
            value = encodeURIComponent(value);
        }
        arr.push(encodeURIComponent(key) + '=' + value);
    });
    return arr.join(sep || ',');
};

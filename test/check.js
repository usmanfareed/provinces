var test = require('tape');
var provinces = require('../');
var has = require('has');

test('all fields present', function (t) {
    t.plan(provinces.length * 2);
    provinces.forEach(function (p) {
        t.ok(has(p, 'name'));
        t.ok(has(p, 'country'));
    });
});

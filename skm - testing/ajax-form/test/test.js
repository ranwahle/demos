/* globals describe, it */

'use strict';

var utils = require('../utils.js');
var assert = require('assert');

var assert = require('assert');
describe('Utils Module', function () {
    describe('serialize()', function () {
        it('should concat several elements', function () {
            var form = {
                elements: [
                    { name: 'foo', value: 42 },
                    { name: 'bar', value: 5 }
                ]
            };
            assert.equal(utils.serialize(form), 'foo=42&bar=5&');
        });
        it('should display one element', function () {
            var form = {
                elements: [
                    { name: 'foo', value: 42 }
                ]
            };
            assert.equal(utils.serialize(form), 'foo=42&');
        });
        it('should encode element values', function () {
            var form = {
                elements: [
                    { name: 'foo', value: '&' },
                    { name: 'bar', value: 5 }
                ]
            };
            assert.equal(utils.serialize(form), `foo=${encodeURIComponent('&')}&bar=5&`);
        });
    });

    describe('request()', function () {
        function MockXhr() { }
        global.XMLHttpRequest = MockXhr;

        it('should get the response', function (done) {
            Object.assign(MockXhr.prototype, {
                send: function () { },
                open: function () { },
                addEventListener: function (type, callback) {
                    callback({
                        target: {
                            responseText: 'mock response'
                        }
                    });
                }
            });
            utils.request({
                method: 'GET',
                action: '',
                data: ''
            }).then(response => {
                assert.equal(response, 'mock response');
                done();
            }).catch(done);
        });

        it('should send the data', function () {
            var sentData;
            Object.assign(MockXhr.prototype, {
                send: function (data) {
                    sentData = data;
                },
                open: function () { },
                addEventListener: function() {}
            });
            utils.request({
                method: 'GET',
                action: '',
                data: 'hi'
            });
            assert.equal(sentData, 'hi');
        });
    });
});
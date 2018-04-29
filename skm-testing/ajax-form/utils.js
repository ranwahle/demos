'use strict';

(function(global, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        global.utils = factory();
    }
}(this, function() {
    return {
        serialize: function(form) {
            return Array.prototype.reduce.call(form.elements, (data, element) => {
                if (element.name) {
                    data += element.name + '=' + encodeURIComponent(element.value) + '&';
                }
                return data;
            }, '');
        },
        request: function(options) {
            /* jshint -W098 */
            return new Promise((resolve, reject) => {
                var xhr = new XMLHttpRequest();
                xhr.open(options.method, options.action);
                if (options.method === 'post') {
                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                }
                xhr.addEventListener('load', e => {
                    resolve(e.target.responseText);
                });
                xhr.send(options.data);
            });
        }
    };
}));
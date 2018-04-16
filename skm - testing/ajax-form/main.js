(function (utils) {
    'use strict';

    var form = document.querySelector('form');

    form.addEventListener('submit', e => {
        e.preventDefault();
        utils.request({
            method: form.method,
            action: form.action,
            data: utils.serialize(form)
        }).then(function (result) {
            console.log(result);
        });
    });

}(window.utils));
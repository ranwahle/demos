'use strict';

var fileInput = document.querySelector('[type=file]');
fileInput.addEventListener('change', function(e) {
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function(e) {
        var data = e.target.result;
        var img = document.createElement('img');
        img.src = data;
        document.body.appendChild(img);

        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position);
        });
    });
    reader.readAsDataURL(file);
});
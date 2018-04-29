function testSerialize() {
    var form1 = {
        elements: [
            {name: 'foo', value: 42},
            {name: 'bar', value: 5}
        ]
    };
    var form2 = {
        elements: [
            {name: 'foo', value: 42}
        ]
    };
    var form3 = {
        elements: [
            {name: 'foo', value: '&'},
            {name: 'bar', value: 5}
        ]
    };
    var output1 = utils.serialize(form1);
    var output2 = utils.serialize(form2);
    var output3 = utils.serialize(form3);
    console.assert(output1 === 'foo=42&bar=5&', 'Serialize test input 1');
    console.assert(output2 === 'foo=42&', 'Serialize test input 2');
    console.assert(output3 === `foo=${encodeURIComponent('&')}&bar=5&`, 'Serialize test input 3');
}
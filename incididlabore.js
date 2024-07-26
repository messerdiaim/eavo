function Mirror(obj) {
    let result = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            result[MirrorKey(key)] = Mirror(obj[key]);
        } else {
            result[MirrorKey(key)] = obj[key];
        }
    }
    return result;
}

function MirrorKey(key) {
    return key.split('').reverse().join('');
}

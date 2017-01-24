function eForStep(arr, arrLen, i, callback) {
    if (i < arrLen) {
        let item = arr[i];
        callback(item);
        setTimeout(eForStep.bind(this, arr, arrLen, i + 1, callback), 0);
    }
}
/**
 * For statement emulation to work with large arrays without event loop blocking.
 *
 * eFor(arr, function (item) {
 *    // do something with item
 * });
 *
 *
 * @param {Array} arr
 * @param {Function} callback
 */
function eFor(arr, callback) {
    let arrLen = arr.length;
    if (arrLen < 2) {
        callback(arr[0]);
        return;
    }
    eForStep(arr, arrLen, 0, callback);
}

export {eFor, eForStep};

function eForStep(arr, arrLen, i, callback) {
    if (i < arrLen) {
        let item = arr[i];
        callback(true, item);
        setTimeout(eForStep.bind(this, arr, arrLen, i + 1, callback), 0);
    } else {
        callback(false);
    }
}
/**
 * For statement emulation to work with large arrays without event loop blocking.
 *
 * eFor(arr, function (pending, item) {
 *    if (pending) {
 *        // do something with item
 *    } else {
 *        // do something after cycle end
 *    }
 * });
 *
 * @param {Array} arr на вход получаем массив
 * @param {Function} callback функция для выполнения с каждым элементом массива
 */
function eFor(arr, callback) {
    eForStep(arr, arr.length, 0, callback);
}

export {eFor, eForStep};

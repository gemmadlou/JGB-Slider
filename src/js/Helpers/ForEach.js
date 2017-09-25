// Stolen from Todd Motto thank you!
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
export default function (array, callback, scope) {
    for (let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
};
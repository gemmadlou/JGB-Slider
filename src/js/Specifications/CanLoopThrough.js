export default function(state) {
    if (state === undefined) {
        throw new Error('/state is undefined/');
    }
    if (state.loopThrough === undefined) {
        throw new Error('state.loopthrough is undefined');
    }
    return state.loopThrough === true;
}
import copy from '../Helpers/Copy.js';
import StartAutoplayFailedException from '../Exceptions/StartAutoplayFailedException.js';

export default function(State) {

    if (State === undefined) {
        throw new StartAutoplayFailedException('Slider state is required');
    }
    let state = copy(State);
    state.autoplay = true;
    return state;
}

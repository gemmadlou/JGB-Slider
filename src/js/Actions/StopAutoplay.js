import copy from '../Helpers/Copy.js';
import StopAutoplayFailedException from '../Exceptions/StopAutoplayFailedException.js';

export default function(State) {

    if (State === undefined) {
        throw new StopAutoplayFailedException('Slider state is required');
    }
    let state = copy(State);
    state.autoplay = false;
    return state;
}

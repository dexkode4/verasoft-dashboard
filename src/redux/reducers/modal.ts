import { OPEN_MODAL, CLOSE_MODAL } from '../types';

const initState = {
	modalOpen: false,
};


type action = {
    type: string,
}
export default (state = initState, { type }:action) => {
	switch (type) {
		case OPEN_MODAL:
			return {
				...state,
				modalOpen: true,
			};
		case CLOSE_MODAL:
			return {
				...state,
				modalOpen: false,
			};
		default:
			return state;
	}
};

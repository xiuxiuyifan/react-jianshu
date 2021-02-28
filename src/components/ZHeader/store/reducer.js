import {SEARCH_FOCUSED} from './actionTypes';
import {fromJS} from 'immutable'

const defaultState = fromJS({
	focused: false,
	isLogin: false,
})

const reducer = (state=defaultState, action) => {
	switch (action.type) {
		case SEARCH_FOCUSED : {
			return state.set('focused', !state.get('focused'))
		}
		default : {
			return state
		}
	}
};

export default reducer;

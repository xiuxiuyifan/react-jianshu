import {fromJS} from 'immutable';
import {GET_DETAIL} from './actionTypes';

const detailState = fromJS({
	content: {
	},
});

export default (state = detailState, action) => {
	switch (action.type) {
		case GET_DETAIL:
			return state.merge({
				content: fromJS(action.content),
			});
		default :
			return state;
	}
}

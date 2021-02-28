import {fromJS} from 'immutable'
import {HOME_DATA} from './actionTypes';

const homeState = fromJS({
	articleList: [],
	topicList: [],
	recommendList: []
})

export default (state = homeState, action) => {
	switch (action.type) {
		case HOME_DATA :
			return  state.merge({
				'articleList': fromJS(action.articleList),
				'topicList': fromJS(action.topicList),
				'recommendList': fromJS(action.recommendList)
			})
		default :
			return state
	}
}

import {GET_DETAIL} from './actionTypes';
import axios from 'axios';

const changeDetail = (result) => {
	return {
		type: GET_DETAIL,
		content: result
	}
}

const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/static/detail.json', {
			params: {
				id
			}
		})
			.then((res)=>{
				let result = res.data.data
				let action = changeDetail(result)
				dispatch(action)
			})
	}
}

export {
	changeDetail,
	getDetail
}

import axios from 'axios';
import {HOME_DATA} from './actionTypes';

const changeHomeData = (result) => {
	const {articleList, topicList, recommendList} = result
	return {
		type: HOME_DATA,
		articleList,
		topicList,
		recommendList
	}
}

export const getHomeData = () =>{
	return (dispatch) => {
	 axios.get('/static/home.json')
		 .then((res)=>{
		 	let result = res.data.data
			 const action = changeHomeData(result)
			 dispatch(action)
		 })
	}
}

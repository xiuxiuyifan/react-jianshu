import axios from 'axios';
export const getHomeData = () =>{
	return (dispatch) => {
	 axios.get('/static/home.json')
		 .then((res)=>{
			 console.log(res);
		 })
	}
}

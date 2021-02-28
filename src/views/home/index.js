import React, {Component} from 'react';

import List from './components/List';
import Recommend from './components/Recommend';
import {actionCreators} from './store'
import {connect} from 'react-redux'

import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	QrcodeWrapper
} from './style';
import Topic from './components/Topic';
import Qrcode from './components/Qrcode';

class Home extends Component {
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<List/>
				</HomeLeft>
				<HomeRight>
					<Topic/>
					<QrcodeWrapper>
						<Qrcode/>
					</QrcodeWrapper>
					<Recommend/>
				</HomeRight>
			</HomeWrapper>
		);
	}
	componentDidMount() {
		this.props.getHomeData()
	}
}

const mapState = (state) => ({
	articleList: state.get('home').get('articleList'),
})

const mapDispatch = (dispatch) => ({
	getHomeData() {
		const action = actionCreators.getHomeData()
		dispatch(action)
	}
})


export default connect(mapState, mapDispatch)(Home);

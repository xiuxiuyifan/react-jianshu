import React, {PureComponent} from 'react';

import List from './components/List';
import Recommend from './components/Recommend';
import {actionCreators} from './store'
import {connect} from 'react-redux'

import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	QrcodeWrapper,
	RecommendWrapper
} from './style';
import Topic from './components/Topic';
import Qrcode from './components/Qrcode';

class Home extends PureComponent {
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
					<RecommendWrapper>
						<Recommend/>
					</RecommendWrapper>
				</HomeRight>
			</HomeWrapper>
		);
	}
	componentDidMount() {
		this.props.getHomeData()
	}
}


const mapDispatch = (dispatch) => ({
	getHomeData() {
		const action = actionCreators.getHomeData()
		dispatch(action)
	}
})


export default connect(null, mapDispatch)(Home);

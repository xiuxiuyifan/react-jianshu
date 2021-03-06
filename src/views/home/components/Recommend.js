import React, {PureComponent} from 'react';
import ZIcon from '../../../components/ZIcon/ZIcon';
import {connect} from 'react-redux';

class Recommend extends PureComponent {
	render() {
		const {recommendList} = this.props
		return (
			<>
				<div className='author'>推荐作者</div>
				<ul>
					{
						recommendList.map((item, index) => (
							<li key={index}>
								<img className='avatar' src={item.get('avatar_source')} alt=""/>
								<div className='concern'><ZIcon className='add-icon' icon='jiahao'/>关注</div>
								<div className='name'>{item.get('nickname')}</div>
								<div className='desc'>写了{item.get('total_wordage')}字</div>
							</li>
						))
					}
				</ul>
			</>
		)
	}
}

const mapState = (state) => ({
	recommendList: state.get('home').get('recommendList')
})

export default connect(mapState, null)(Recommend)

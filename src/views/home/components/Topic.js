import React, {Component} from 'react';
import {connect} from 'react-redux'

class Topic extends Component {
	render() {
		const {topicList} = this.props
		return (
			<>
				<ul className='topic'>
					{
						topicList.map((item, index)=>(
							<li key={index}>
								<img src={item.get('pic')} alt=""/>
							</li>
						))
					}
				</ul>
			</>
		)
	}
}

const mapState = (state) => ({
	topicList: state.get('home').get('topicList')
})

export default connect(mapState, null)(Topic)

import React, {Component} from 'react';
import {connect} from 'react-redux'

class List extends Component {
	render() {
		const {articleList} = this.props
		return (
			<>
			<ul>
				{
					articleList.map((item, index)=>(
						<li key={index}>
							<div className='pic'><img src={item.get('pic')} alt=""/></div>
							<div className='content'>
								<a className='title' href='//aaa.com'>{item.get('title')}</a>
								<p className='description'>{item.get('desc')}</p>
							</div>
						</li>
					))
				}
			</ul>
			</>
		)
	}
}

const mapState = (state) => ({
	articleList: state.get('home').get('articleList')
})

export default connect(mapState, null)(List)

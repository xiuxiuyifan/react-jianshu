import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class List extends PureComponent {
	render() {
		const {articleList} = this.props;
		return (
			<>
				<ul>
					{
						articleList.map((item, index) => (
							<li key={index}>
								<div className='pic'><img src={item.get('pic')} alt=""/></div>
								<div className='content'>
									<Link className='title' to={'/detail/' + item.get('id')}>{item.get(
										'title')}</Link>
									<p className='description'>{item.get('desc')}</p>
								</div>
							</li>
						))
					}
				</ul>
			</>
		);
	}
}

const mapState = (state) => ({
	articleList: state.get('home').get('articleList'),
});

export default connect(mapState, null)(List);

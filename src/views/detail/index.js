import React, {PureComponent} from 'react';
import {DetailWrapper} from './style';
import ZIcon from '../../components/ZIcon/ZIcon';
import {actionCreators} from './store';
import {connect} from 'react-redux';
import {get} from 'immutable';

class Detail extends PureComponent {
	constructor(props) {
		super();
		this.recommendRef = React.createRef();
		this.offsetTop = 0;
		this.fixedDom = null;
	}
	
	render() {
		let {content} = this.props;
		return (
			<DetailWrapper>
				<div className='operation'>
					<div className='item-wrapper'>
						<div className='item'>
							<ZIcon className='icon' icon='zan1'></ZIcon>
						</div>
						<div className='favour'>131赞</div>
					</div>
					<div className='item-wrapper'>
						<div className='item'>
							<ZIcon className='icon' icon='dashang'></ZIcon>
						</div>
						<div className='favour'>赞赏</div>
					</div>
					<div className='item-wrapper'>
						<div className='item'>
							<ZIcon className='icon' icon='erweima1'></ZIcon>
						</div>
						<div className='favour'>下载App</div>
					</div>
				</div>
				<div className='left-wrapper'>
					<div className='left'>
						<h1 dangerouslySetInnerHTML={{__html: content.get('title')}}></h1>
						<div className='user-wrapper'>
							<img className='avatar'
									 src="/static/47c93b18-22a3-4c3e-9d65-9260f227fb47.webp"
									 alt=""/>
							<div className='user-desc'>
								<div className='u-top'><span>禅悦_</span><img className='u-img'
																														src="/static/19c2bea4-c7f7-467f-a032-4fed9acbc55d.png"
																														alt=""/>
									<button>关注</button>
								</div>
								<div className='u-bottom'>
									<span className='num1'><ZIcon className='u-img'
																								icon='diamond'/><span>39</span></span>
									<span className='time'>2021.01.05 07:00:15</span><span
									className='word'>字数 1,349</span><span>阅读 2,262</span></div>
							</div>
						</div>
						<article
							dangerouslySetInnerHTML={{__html: content.get('content')}}/>
					</div>
				</div>
				<div className='right'>
					<div className='top'>
						<div className='follow'>
							<img className='avatar'
									 src="/static/47c93b18-22a3-4c3e-9d65-9260f227fb47.webp"
									 alt=""/>
							<div className='user-desc'>
								<div className='u-top'><span>禅悦_</span><img className='u-img'
																														src="/static/19c2bea4-c7f7-467f-a032-4fed9acbc55d.png"
																														alt=""/>
									<button>关注</button>
								</div>
								<div className='u-bottom'>
									<span className='word'>字数 1,349</span><span>阅读 2,262</span>
								</div>
							</div>
						</div>
						<div className='solid'></div>
						{
							[0, 1, 2].map((item) => (
								<div className='article' key={item}>
									<div className='title'>人生，即为过客，何须执着</div>
									<div className='read'>阅读 3489</div>
								</div>
							))
						}
					</div>
					<div className='bottom' ref={this.recommendRef}>
						<h3><span>推荐阅读</span></h3>
						{
							[0, 1, 2, 3, 4].map((item) => (
								<div className='x-item' key={item}>
									<div className='x-title'>善待自己，从不生气开始</div>
									<div className='x-num'>阅读 57</div>
								</div>
							))
						}
					</div>
				</div>
			</DetailWrapper>
		);
	}
	
	componentDidMount() {
		this.init();
	}
	
	componentWillUnmount() {
		this.setBodyBgColor('');
		window.removeEventListener('scroll', this.scrollHandleFn);
	}
	
	init() {
		let id =  this.props.match.params.id
		this.setBodyBgColor('#f9f9f9');
		
		this.props.getDetailData(id);
		this.scrollHandle();
	}
	
	setBodyBgColor(color) {
		document.body.style.backgroundColor = color;
	}
	
	scrollHandleFn = () => {
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		//如果被卷起来的高度大于 元素距离顶部的距离就设置一个固定的值
		if (scrollTop >= this.offsetTop) {
			this.fixedDom.style.position = 'fixed';
			this.fixedDom.style.top = '66px';
			this.fixedDom.style.width = '260px';
		} else {
			this.fixedDom.style.position = '';
			this.fixedDom.style.top = '';
		}
	};
	
	scrollHandle = () => {
		this.fixedDom = this.recommendRef.current;
		//获取元素距离顶部的距离
		this.offsetTop = this.fixedDom.offsetTop;
		window.addEventListener('scroll', this.scrollHandleFn);
	}
}

const mapState = (state) => ({
	content: state.getIn(['detail', 'content']),
});

const mapDispatch = (dispatch) => ({
	getDetailData(id) {
		const action = actionCreators.getDetail(id);
		dispatch(action);
	},
});

export default connect(mapState, mapDispatch)(Detail);

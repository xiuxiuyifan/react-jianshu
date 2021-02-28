import ZIcon from '../ZIcon/ZIcon';

import './style/header.scss';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {inputFocused} from './store/actionCreators';

const ZHeader = (props) => {
	return <div className='z-header'>
		<div className={'width-limit clearfix'}>
			<ZIcon icon={'jianshu'} className={'logo'}/>
			
			<div className={'right write-btn'}><ZIcon icon={'xiezuo'}
																								className={'icon-size'}/><span>写文章</span>
			</div>
			<div className={'right sign-up btn'}>注册</div>
			<div className={'right world-line right-btn btn'}>登录</div>
			<ZIcon icon={'Aa'} className={'right icon-size world-line'}/>
			<nav className={'nav'}>
				<ul className={'nav-ul'}>
					{
						!props.isLogin ? <>
							<li className={'nav-item'}><span>首页</span></li>
							<li className={'nav-item'}><ZIcon icon={'APPCopy'}
																								className={'icon-size'}/><span>下载App</span>
							</li>
						</> : <>
							<li className={'nav-item'}><ZIcon icon={'faxian'}
																								className={'icon-size'}></ZIcon><span>发现</span>
							</li>
							<li className={'nav-item'}><ZIcon icon={'guanzhu'}
																								className={'icon-size'}></ZIcon><span>关注</span>
							</li>
							<li className={'nav-item'}><ZIcon icon={'xiaoxi'}
																								className={'icon-size'}></ZIcon><span>消息</span>
							</li>
						</>
					}
					<li className={'nav-item'}>
						<div className={'search-wrapper'}>
							<CSSTransition
								in={props.focused}
								timeout={200}
								classNames={'focused'}>
								<input
									className={'search-input'}
									type="text"
									placeholder={'搜索'}
									onFocus={props.handleFocus}
									onBlur={props.handleBlur}
								/>
							</CSSTransition>
							<CSSTransition
								in={props.focused}
								timeout={200}
								classNames={'focused-bg'}
							>
								<div className={'search-bg'}>
									<ZIcon icon={'sousuo'} className={'search-icon'}/>
								</div>
							</CSSTransition>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	</div>;
};
const mapStateToProps = (state) => {
	return {
		focused: state.get('header').get('focused'),
		isLogin: state.get('header').get('isLogin'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleFocus: () => {
			dispatch(inputFocused());
		},
		handleBlur: () => {
			dispatch(inputFocused());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ZHeader);

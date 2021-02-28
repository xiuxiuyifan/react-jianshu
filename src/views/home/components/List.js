import React, {Component} from 'react';

class List extends Component {
	render() {
		return (
			<>
			<ul>
				<li>
					<div className='pic'><img src="https://upload-images.jianshu.io/upload_images/15964792-d7473f2675c4f316.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/></div>
					<div className='content'>
						<div className='title'>父亲</div>
						<p className='description'>
							我的父亲，一个五十多岁的中年男人。他年轻时脾气很坏，也干了很多荒唐事，后来身体机能逐渐下降，脾气也随生殖器变得萎靡不振。算上我妈，他一生一共娶了...
						</p>
					</div>
				</li>
			</ul>
			</>
		)
	}
}

export default List

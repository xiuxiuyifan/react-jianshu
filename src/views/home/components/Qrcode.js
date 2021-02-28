import React,{Component} from 'react';
import ZIcon from '../../../components/ZIcon/ZIcon';

class Qrcode extends Component{
	render() {
		return(
			<>
				<div className='qrcode'>
					<img className='img' src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png" alt=""/>
					<div className='info'>
						<div className='title'>下载简书手机App</div>
						<div className='desc'>随时随地发现和创作内容</div>
					</div>
				</div>
			</>
		)
	}
}

export default Qrcode

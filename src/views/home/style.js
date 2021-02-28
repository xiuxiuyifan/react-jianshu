import styled from 'styled-components'

export const HomeWrapper = styled.div`
	width: 960px;
  margin: 0 auto;
  display: flex;
  padding-top: 30px;
`
export const HomeLeft = styled.div`
	flex: 1;
  padding-left: 15px;
	li{
    min-height: 140px;
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
	}
	.content{
    padding-right: 165px;
		.title{
      margin: -7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
		}
		.description{
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
		}
	}
	.pic{
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 150px;
    height: 100px;
		img{
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
		}
	}
`
export const HomeRight = styled.div`
 width: 320px;
 padding-left: 40px;
	.topic{
		img{
      width: 100%;
      min-height: 50px;
      margin-bottom: 6px;
      border-radius: 4px;
		}
	}
`

export const QrcodeWrapper = styled.div`
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
	.img{
    width: 60px;
    height: 60px;
    opacity: .85;
	}
	.info{
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
		.title{
      font-size: 15px;
      color: #333;
		}
		.desc{
      margin-top: 4px;
      font-size: 13px;
      color: #999;
		}
	}
`

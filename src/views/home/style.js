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
			&:hover{
        text-decoration: underline;
			}
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
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
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

export const RecommendWrapper = styled.div`
	.author{
    font-size: 14px;
    color: #969696;
	}
	li{
		line-height: 20px;
		margin-top: 15px;
	}
	.avatar{
		float: left;
		width: 48px;
		height: 48px;
		margin-right: 10px;
		display: block;
		cursor: pointer;
		border: 1px solid #ddd;
		border-radius: 50%;
	}
	.add-icon{
		width: 13px;
		height: 13px;
		margin-right: 2px;
	}
	.concern{
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    font-weight: 400;
    line-height: normal;
		cursor: pointer;
		display: flex;
		align-items: center;
	}
	.name{
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
	}
	.desc{
    margin-top: 2px 0 10px 0;
    font-size: 12px;
    color: #969696;
	}
`

import styled from 'styled-components';

export const DetailWrapper = styled.div`
  width: 1000px;
  padding: 10px 16px;
  margin: 0 auto;
  display: flex;

  .operation {
    position: fixed;
    z-index: 98;
    top: 216px;
    left: calc((100vw - 1000px) / 2 - 78px);
    color: #969696;

    .item-wrapper {
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        width: 48px;
        height: 48px;
        font-size: 18px;
        border-radius: 50%;
        box-shadow: 0 2px 10px rgb(0 0 0 / 5%);
        background-color: #fff;

        .icon {
          width: 24px;
          height: 24px;
        }
      }

      .favour {
        margin-top: 10px;
        font-size: 14px;
        text-align: center;
        overflow: hidden;
        height: 19px;
      }
    }
  }

  .left-wrapper {
    margin-right: 10px;

    .left {
      flex: 1;
      background-color: #fff;
      border-radius: 4px;
      margin-bottom: 10px;
      padding: 32px;

      h1 {
        font-size: 30px;
        font-weight: 700;
        word-break: break-word;
        color: #404040;
        text-rendering: optimizelegibility;
        margin-bottom: 15px;
      }

      .user-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 32px;

        .avatar {
          display: block;
          border-radius: 50%;
          border: 1px solid #eee;
          min-width: 50px;
          min-height: 50px;
          width: 50px;
          height: 50px;
        }

        .user-desc {
          margin-left: 8px;

          .u-top {
            display: flex;
            align-items: center;
            margin-bottom: 6px;

            .u-img {
              width: 16px;
              height: 16px;
              min-width: 16px;
              min-height: 16px;
              margin: 0 8px;
            }

            button {
              color: #ec7259;
              background-color: #fff;
              border-color: #ec7259;
              position: relative;
              flex-shrink: 0;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              border-radius: 50px;
              touch-action: manipulation;
              cursor: pointer;
              background-image: none;
              white-space: nowrap;
              user-select: none;
              transition: all .2s cubic-bezier(.645, .045, .355, 1);
              font-size: 12px;
              padding: 2px 9px;
              border: 1px solid #ec7259;

              &:hover {
                color: #ec7259;
                background-color: #fef8f7;
                border-color: #ec7259;
              }
            }
          }

          .u-bottom {
            display: flex;
            align-items: center;
            color: #969696;
            font-size: 13px;
            height: 16px;
            line-height: 16px;

            .num1 {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              color: #ec7259;
              margin-right: 10px;

              .u-img {
                width: 16px;
                height: 16px;
                margin-right: 6px;
              }
            }

            .time, .word {
              margin-right: 10px;
            }
          }
        }
      }

      article {
        font-weight: 400;
        line-height: 1.8;
        margin-bottom: 20px;
        word-break: break-word;

        p {
          margin-bottom: 20px;
          word-break: break-word;
        }
      }
    }
  }

  .right {
    flex-shrink: 0;
    width: 260px;

    .top {
      background-color: #fff;
      border-radius: 4px;
      margin-bottom: 10px;
      padding: 16px;

      .follow {
        display: flex;
        align-items: center;
        position: relative;

        .avatar {
          display: block;
          border-radius: 50%;
          border: 1px solid #eee;
          min-width: 50px;
          min-height: 50px;
          width: 50px;
          height: 50px;
        }

        .user-desc {
          margin-left: 8px;

          .u-top {
            display: flex;
            align-items: center;
            margin-bottom: 6px;

            .u-img {
              width: 16px;
              height: 16px;
              min-width: 16px;
              min-height: 16px;
              margin: 0 8px;
            }

            button {
              color: #ec7259;
              background-color: #fff;
              border-color: #ec7259;
              flex-shrink: 0;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              border-radius: 50px;
              touch-action: manipulation;
              cursor: pointer;
              background-image: none;
              white-space: nowrap;
              user-select: none;
              transition: all .2s cubic-bezier(.645, .045, .355, 1);
              font-size: 12px;
              padding: 2px 9px;
              border: 1px solid #ec7259;
              position: absolute;
							right: 0;

							&:focus{
								outline: none;
							}
              &:hover {
                color: #ec7259;
                background-color: #fef8f7;
                border-color: #ec7259;
              }
            }
          }

          .u-bottom {
            display: flex;
            align-items: center;
            color: #969696;
            font-size: 13px;
            height: 16px;
            line-height: 16px;

            .num1 {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              color: #ec7259;
              margin-right: 10px;

              .u-img {
                width: 16px;
                height: 16px;
                margin-right: 6px;
              }
            }

            .time, .word {
              margin-right: 10px;
            }
          }
        }
      }

      .solid {
        width: 100%;
        height: 1px;
        margin: 16px 0;
        background-color: #eee;
      }

      .article {
        margin-top: 16px;

        .title {
          font-size: 14px;
          line-height: 22px;
          color: #2d2d2d;
          margin-bottom: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
        }

        .read {
          font-size: 12px;
          color: #969696;
        }
      }
    }

    .bottom {
      background-color: #fff;
      border-radius: 4px;
      padding: 16px;
			z-index: 10;
			h3{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        padding-left: 12px;
        border-left: 4px solid #ec7259;
        font-size: 16px;
        font-weight: 500;
        height: 20px;
        line-height: 20px;
        color: #404040;
        text-rendering: optimizelegibility;
			}
			.x-item{
        margin-bottom: 12px;
				.x-title{
          font-size: 14px;
          line-height: 22px;
          margin-bottom: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
				}
				.x-num{
          font-size: 12px;
          color: #969696;
				}
			}
    }
  }
`;

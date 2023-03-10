import styled from 'styled-components'

export const PlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 67px;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    position: absolute;
    left: 50%;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 47px;
    padding-left: 52px;
    transform: translateX(-50%);
  }
`
interface IBarControl {
  isPlaying: boolean
}
export const BarControl = styled.div<IBarControl>`
  display: flex;
  align-items: center;
  padding-right: 28px;

  .btn {
    cursor: pointer;
  }

  .prev,
  .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${(props) => (props.isPlaying ? '-165px' : '-204px')};
  }

  .next {
    background-position: -80px -130px;
  }
`
export const BarPlayerInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    position: relative;
    top: 2px;
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 10px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }

      .song-name {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        position: relative;
        top: 0;
        width: 466px;
        margin-right: 16px;
        cursor: default;

        .ant-slider-rail {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -5px;
          background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;

          &::before,
          &::after {
            display: none;
          }
        }
      }

      .time {
        position: relative;
        top: 3px;
        .current {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

interface IBarOperator {
  playMode: number
}
export const BarOperator = styled.div<IBarOperator>`
  display: flex;
  align-items: center;
  position: relative;
  left: 14px;
  top: 0;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .pip {
    background: url(${require('@/assets/img/pip_icon')});
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    margin-left: 8px;
    padding-left: 14px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: ${(props) => {
        switch (props.playMode) {
          case 1:
            return '-66px -248px'
          case 2:
            return '-66px -344px'
          default:
            return '-3px -344px'
        }
      }};
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`

export const HandlerWrapper = styled.div`
  position: fixed;
  z-index: 999;
  right: 0;
  bottom: 0;
  width: 67px;
  height: 52px;

  .left {
    position: absolute;
    top: -14px;
    right: 15px;
    width: 52px;
    height: 67px;
    background-position: 0 -380px;

    .btn {
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
      cursor: pointer;
      background-position: -100px -380px;

      &:hover {
        background-position: -100px -400px;
      }
    }
  }

  .right {
    position: absolute;
    top: -1px;
    right: 0;
    width: 15px;
    height: 54px;
    background-position: -52px -393px;
    pointer-events: none;
  }
`

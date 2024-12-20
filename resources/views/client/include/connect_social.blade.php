<div class="social-button">
  <div class="social-button-content">

    <a href="https://www.facebook.com/nguyensonarsenal.10" target="_blank" class="mes">
      <img src="{{ asset('client/assets/image/icon/messenger.png') }}" alt="Chat Messenger">
    </a>
    <a href="http://zalo.me/0964047698" target="_blank" class="zalo">
      <img src="{{ asset('client/assets/image/icon/zalo.png') }}" alt="Chat Zalo">
    </a>
  </div>
</div>

<style>
  .social-button {
    display: inline-grid;
    position: fixed;
    background-color: rgba(255, 255, 255, 0) !important;
    bottom: 42px;
    right: 10px;
    min-width: 45px;
    text-align: center;
    z-index: 99999;
  }
  @media (max-width: 767px) {
    .social-button {
      bottom: 122px;
    }
  }

  .social-button-content {
    display: inline-grid;
  }

  .social-button a {
    padding: 4px 0;
    cursor: pointer;
    position: relative;
  }

  .social-button i {
    width: 40px;
    height: 40px;
    background: #F05A5E;
    color: #fff;
    border-radius: 100%;
    font-size: 20px;
    text-align: center;
    line-height: 1.9;
    position: relative;
    z-index: 999;
  }

  .social-button span {
    display: none;
  }

  .mes:hover > span, .zalo:hover > span {
    display: block
  }

  .social-button a span {
    border-radius: 2px;
    text-align: center;
    background: #ffffff;
    padding: 9px;
    display: none;
    width: 180px;
    margin-right: 10px;
    position: absolute;
    color: #ffffff;
    z-index: 999;
    top: 9px;
    right: 20px;
  }
</style>

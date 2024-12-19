<aside class="left-sidebar" data-sidebarbg="skin5">
  <div class="scroll-sidebar">
    <nav class="sidebar-nav">
      <ul id="sidebarnav" class="p-t-30">
        <li class="sidebar-item {{ activeMenu('dashboard') ? 'selected' : '' }}">
          <a class="sidebar-link waves-effect waves-dark {{ activeMenu('dashboard') ? 'active' : '' }}"
             href="{{ cmsRoute('dashboard') }}">
            <i class="mdi mdi-view-dashboard"></i>
            <span class="hide-menu">Trang chủ</span>
          </a>
        </li>

        <li class="sidebar-item {{ activeMenu('khoa') ? 'selected' : '' }}">
          <a class="sidebar-link waves-effect waves-dark {{ activeMenu('khoa') ? 'active' : '' }}"
             href="{{ cmsRoute('khoa.index') }}">
            <i class="mdi mdi-view-dashboard"></i>
            <span class="hide-menu">Quản lý khoa</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link waves-effect waves-dark" href="{{ cmsRoute('logout') }}">
            <i class="mdi mdi-view-dashboard"></i>
            <span class="hide-menu">Đăng xuất</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</aside>

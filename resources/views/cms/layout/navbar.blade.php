<aside class="left-sidebar" data-sidebarbg="skin5">
  <!-- Sidebar scroll-->
  <div class="scroll-sidebar">
    <!-- Sidebar navigation-->
    <nav class="sidebar-nav">
      <ul id="sidebarnav" class="p-t-30">
        <li class="sidebar-item">
          <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{ route('cms.category.index') }}" aria-expanded="false">
            <i class="mdi mdi-view-dashboard"></i>
            <span class="hide-menu">Chuyên mục</span>
          </a>
        </li>

        @if (cmsCurrentUser()->isShowMenuPost())
          <li class="sidebar-item">
            <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{ route('cms.posts.index') }}"
               aria-expanded="false">
              <i class="mdi mdi-chart-bar"></i>
              <span class="hide-menu">Bài viết</span>
            </a>
          </li>
        @endif

        @if (cmsCurrentUser()->isSuperAdmin())
          <li class="sidebar-item">
            <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{ route('cms.authors.index') }}" aria-expanded="false">
              <i class="mdi mdi-account-key"></i>
              <span class="hide-menu">Tác giả</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{ route('cms.company_info.show') }}" aria-expanded="false">
              <i class="mdi mdi-pencil"></i>
              <span class="hide-menu">Thông tin công ty</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{ route('cms.contact.index') }}" aria-expanded="false">
              <i class="mdi mdi-receipt"></i>
              <span class="hide-menu">Liên hệ</span>
            </a>
          </li>
        @endif
        <li class="sidebar-item">
          <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{ route('cms.admins.index') }}" aria-expanded="false">
            <i class="mdi mdi-account-key"></i>
            <span class="hide-menu">Tài khoản</span>
          </a>
        </li>
        <li class="sidebar-item">
          <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{ route('cms.auth.logout') }}" aria-expanded="false">
            <i class="mdi mdi-move-resize-variant"></i>
            <span class="hide-menu">Đăng xuất</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- End Sidebar navigation -->
  </div>
  <!-- End Sidebar scroll-->
</aside>

<header class="topbar" data-navbarbg="skin5">
  <nav class="navbar top-navbar navbar-expand-md navbar-dark">
    <div class="navbar-header" data-logobg="skin5">
      <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)">
        <i class="ti-menu ti-close"></i>
      </a>
      <a class="navbar-brand" href="{{ cmsRoute('khoa.index') }}">
        <span class="logo-text ms-2">
          <img src="{{ asset('cms/image/khao-sat.webp') }}" alt="homepage" class="light-logo" style="width: 100px">
        </span>
      </a>
      <a class="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)"
         data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
         aria-expanded="false" aria-label="Toggle navigation"><i class="ti-more"></i></a>
    </div>
    <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
      <ul class="navbar-nav float-left mr-auto">
        <li class="nav-item d-none d-md-block">
          <a class="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)"
             data-sidebartype="mini-sidebar">
            <i class="mdi mdi-menu font-24"></i>
          </a>
        </li>
      </ul>

      @php
        $khoa = \App\Models\Khoa::where('id', cmsCurrentUser()->khoa_id)->first();
        $khoaName = empty($khoa) ? "" : "| " . $khoa->name;
      @endphp

      <ul class="navbar-nav float-right">
        <li style="padding: 0px 15px; color: white;
    font-size: 0.875rem;
    line-height: 64px;
    height: 64px;">{{ cmsCurrentUser()->email }} {{ $khoaName }}</li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href=""
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="{{ asset('cms/image/user/1.jpg') }}" alt="user" class="rounded-circle" width="31">
          </a>
          <div class="dropdown-menu dropdown-menu-right user-dd animated">
            <a class="dropdown-item" href="{{ cmsRoute('logout') }}"><i class="ti-user m-r-5 m-l-5"></i>Đăng xuất</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</header>

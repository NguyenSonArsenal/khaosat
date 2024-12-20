@switch(true)
    @case(session()->has('notification_success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert" style="margin-top: 15px">
            {{ session()->get('notification_success') }}
        </div>
    @break

    @case(session()->has('notification_warning'))
        <div class="alert alert-danger alert-dismissible fade show" role="alert" style="margin-top: 15px">
            {{ session()->get('notification_warning') }}
        </div>
    @break

    @case(session()->has('notification_error'))
        <div class="alert alert-danger alert-dismissible fade show" role="alert" style="margin-top: 15px">
            {{ session()->get('notification_error') }}
        </div>
    @break

    @case(session()->has('notification_warning_login_multi_device'))
        <div class="alert alert-danger alert-dismissible fade show" role="alert" style="margin-top: 15px">
            {{ session()->get('notification_warning_login_multi_device') }}
        </div>
    @break
@endswitch

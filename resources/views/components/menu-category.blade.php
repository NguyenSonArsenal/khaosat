@foreach($category_menu as $menu)
     <li class="{{ $menu->categories->count() > 0 ? "has-menu" : '' }}">
         <a href="{{ route('client.category_post.show', ['slug' =>$menu->slugs[0]->slug]) }}">
             <span>{{$menu->category_name}}</span>
         </a>
         @php
             $sub_categories = \App\Models\Category::with('slugs')->where('parent_id', $menu->id)->where('status', \App\Models\Category::APPROVED)->limit(4)->get();
         @endphp
        <div @class(["navbar-menu", 'no-sub' => !count($sub_categories)])>
            @foreach($sub_categories as $sub_cate)
                <div class="menu-item">
                    <a href="{{ route('client.category_post.show', ['slug' => $sub_cate->slugs[0]->slug]) }}"> <h2 class="item-title">{{$sub_cate->category_name}}</h2></a>
                    @php
                        $sub_sub_categories = \App\Models\Category::with('slugs')->where('parent_id', $sub_cate->id)->limit(6)->get();
                    @endphp
                    <ul class="list-menu">
                        @foreach($sub_sub_categories as $sub)
                            <li><a class="trans" href="{{ route('client.category_post.show', ['slug' => $sub->slugs[0]->slug]) }}">{{$sub->category_name}}</a></li>
                        @endforeach
                    </ul>
                </div>
            @endforeach
            <a class="menu-link trans" href="{{ route('client.category_post.show', ['slug' => $menu->slugs[0]->slug]) }}">Xem tất cả</a>
        </div>
    </li>
@endforeach

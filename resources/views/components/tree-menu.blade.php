<div class="category-block">
    @php
        $sub_cate = \App\Models\Category::where('parent_id', $menus->id)->where('status', \App\Models\Category::APPROVED)->get();
    @endphp
    <ol class="list-categories">
        <li>
            <h1 class="category-title">
                <span @class(['icon-toggle' => count($sub_cate),
                                'icon-circle' => !count($sub_cate),
                                'trans',])></span>
                <a class="category-link trans"
                   href="{{ route('client.category_post.show', ['slug' => getCategorySlug($menus)]) }}">{{$menus->category_name}}</a>
            </h1>
            <ol class="list-items">

                @foreach($sub_cate as $sub)
                    @php
                        $sub_sub_cate = \App\Models\Category::where('parent_id', $sub->id)->where('status', \App\Models\Category::APPROVED)->get();
                    @endphp
                    <li>
                        <h2 class="item-title is-active">

                            <span @class(['icon-toggle' => count($sub_sub_cate),
                                'icon-circle' => !count($sub_sub_cate),
                                'trans',])>

                            </span>
                            <a class="trans item-link"
                               href="{{ route('client.category_post.show', ['slug' => $sub->slugs[0]->slug]) }}">{{$sub->category_name}}</a>
                        </h2>

                        <ol class="list-sub-items">
                            @foreach($sub_sub_cate as $sub_sub)
                                <li><a class="item-sub-link"
                                       href="{{ route('client.category_post.show', ['slug' => $sub_sub->slugs[0]->slug]) }}">{{$sub_sub->category_name}}</a>
                                </li>
                            @endforeach
                        </ol>
                    </li>
                @endforeach
            </ol>
        </li>
    </ol>
</div>

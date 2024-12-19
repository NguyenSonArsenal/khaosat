<?php

namespace App\Service;

use GuzzleHttp\Client;

class WpBlog
{
    public function __construct()
    {
        $this->client = new Client();
        $this->params = [
            'headers' => [
                'Accept' => 'application/json'
            ]
        ];
    }

    public function getFeaturedImage($item)
    {
        if (!empty($item['_embedded']['wp:featuredmedia'][0])) {
            return [
                'alt' => arrayGet($item['_embedded']['wp:featuredmedia'][0], 'alt_text'),
                'src' => arrayGet($item['_embedded']['wp:featuredmedia'][0], 'source_url'),
            ];
        }
        return [];
    }

    public function getCategory($item)
    {
        $result = [];
        if (!empty($item['_embedded']['wp:term'][0])) {
            $list = $item['_embedded']['wp:term'][0];
            foreach ($list as $item) {
                $tmp = [
                    'id' => arrayGet($item, 'id'),
                    'name' => arrayGet($item, 'name'),
                    'slug' => arrayGet($item, 'slug'),
                ];
                $result[] = $tmp;
            }
        }
        return $result;
    }

    public function getData()
    {
        $url = getConstant('BLOG_WOWTOP') . "/wp-json/wp/v2/posts?_embed&filter[orderby]=modified&per_page=100&nopaging=true";

        try {
            $response = $this->client->request('GET', $url, $this->params);
            $body = $response->getBody()->getContents();
            $datum = [
                'body' => json_decode($body, true),
                'headers' => $response->getHeaders()
            ];
            $data = json_decode($body, true);
            foreach ($data as $key => $iData) {
                $data[$key]['avatar'] = $this->getFeaturedImage($iData);
                $data[$key]['category'] = $this->getCategory($iData);
                $data[$key]['title'] = $iData['title']['rendered'];
            }
            return $data;
        } catch (\Exception $e) {
            abort(500, $e->getMessage());
        }
    }

    public function getPostByCategory($id)
    {
        $url = getConstant('BLOG_WOWTOP') .  "/wp-json/wp/v2/posts?categories=$id&_embed&filter[orderby]=modified&per_page=100&nopaging=true";
        try {
            $response = $this->client->request('GET', $url, $this->params);
            $body = $response->getBody()->getContents();
            $datum = [
                'body' => json_decode($body, true),
                'headers' => $response->getHeaders()
            ];
            $data = json_decode($body, true);
            foreach ($data as $key => $iData) {
                $data[$key]['avatar'] = $this->getFeaturedImage($iData);
                $data[$key]['title'] = $iData['title']['rendered'];
            }
            return $data;
        } catch (\Exception $e) {
            abort(500, $e->getMessage());
        }
    }

    public function getPostDetailById($id)
    {
        $url = getConstant('BLOG_WOWTOP') .  "/wp-json/wp/v2/posts/$id";
        try {
            $response = $this->client->request('GET', $url, $this->params);
            $body = $response->getBody()->getContents();
            $data = json_decode($body, true);
            return $data;
        } catch (\Exception $e) {
            abort(500, $e->getMessage());
        }
    }

    /**
     * Reformat the content of an array of blog posts
     * @param  array $rawBlogs
     * @return array
     */
    public function reformatBlogList($data)
    {
        $blogs = [];
        foreach ($data as $rawBlog) {
            $blog = [];
            $blog['id'] = $rawBlog['id'];
            $blog['title'] = $rawBlog['title']['rendered'];
            $blog['date'] = date('d-m-Y H:i:s', strtotime($rawBlog['date']));
            $blog['excerpt'] = $rawBlog['excerpt']['rendered'];
            $blog['content'] = $rawBlog['content']['rendered'];
            $blogs[] = $blog;
        }

        dd($blogs);

        return $blogs;
    }

    /**
     * Reformat the contents of a single blog post
     * @param  array $rawBlog
     * @return obj
     */
//    public function reformatSingleBlog($rawBlog)
//    {
//        $blog = new stdClass;
//
//        $blog->id = $rawBlog['id'];
//        $blog->title = $rawBlog['title']['rendered'];
//        $blog->slug = $rawBlog['slug'];
//        $blog->date = Date::createFromFormat('Y-m-d\TH:i:s', $rawBlog['date']);
//        $blog->excerpt = $rawBlog['excerpt']['rendered'];
//        $blog->content = (new UtilLibrary)->reformatContent($rawBlog['content']['rendered']);
//
//        //seo_title
//        if (!empty($rawBlog['meta']['_yoast_wpseo_title'])) {
//            $blog->seo_title = str_replace([' %%sep%%', ' %%sitename%%'], '', $rawBlog['meta']['_yoast_wpseo_title'][0]);
//        } else {
//            $blog->seo_title = $rawBlog['title']['rendered'];
//        }
//
//        $blog->meta_description = $rawBlog['meta']['_yoast_wpseo_metadesc'][0] ?? null;
//        $blog->author = $rawBlog['_embedded']['author'][0];
//
//        $blog->featured_media =  (new ImageLibrary)->reformatFeaturedImage($rawBlog['_embedded']['wp:featuredmedia'][0]);
//
//        //tags en categorieen nog ophalen
//        $categories = [];
//        $tags = [];
//
//        foreach ($rawBlog['_embedded']['wp:term'] as $items) {
//            foreach ($items as $item) {
//                if ($item['taxonomy'] =='category') {
//                    $categories[] = $item;
//                } elseif ($item['taxonomy'] == 'post_tag') {
//                    $tags[] = $item;
//                }
//            }
//        }
//
//        $blog->categories = $categories;
//        $blog->tags = $tags;
//
//        //Comments
//        $comments = [];
//        if (isset($rawBlog['_embedded']['replies'][0])) {
//            $comments = (new CommentLibrary;)->getComments($rawBlog['_embedded']['replies'][0]);
//        }
//
//        $blog->comments = $comments;
//
//        return $blog;
//    }
}

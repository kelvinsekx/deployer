<?php

namespace App\Http\Controllers;
use Illuminate\Support\Str;


use Illuminate\Http\Request;
use App\Post;
// use App\User;

class AffiliateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function Index(){
         //get all the post passed
         //  $response = \Response::json($posts, 200);

         $allPosts = Post::all();
         return response()->json([ 
             'posts'=>$allPosts],200);
    }

    public function Show($slug){
        //get all just one post

        $thePost = Post::find($slug);
        //if post is not found
        if(!$thePost){
            $response = response()->json([
                'error'=>['message'=>'This post cannot be found.']
            ], 404);
            return $response;
        };
        return response()->json([ 
            'posts'=>$thePost],200);
   }

   /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function Store(Request $request)
    {
        $validatedData = $request->validate([
            'title' =>  'required',
            'summary'=> 'required',
            'content'=> 'required',
            'conclusion'=>'required',
          ]);

        
        $post =Post::create([
            'title'=>Str::title($validatedData['title']),
            'summary'=>$validatedData['summary'],
            'content'=>$validatedData['content'],
            'conclusion'=>$validatedData['conclusion'],
            'slug'=>Str::slug($validatedData['title'], '-'),
            ]);
        $post->save();

        $response=response()->json([
            'message'=>'The Post is created successfully',
            'data'=>$post->with('user'),
        ],201);
        return $response;

    }

}

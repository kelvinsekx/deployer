<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::get('/', 'PagesController@aff');
Route::get('/about', 'PagesController@abt');


Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

Route::view('/affiliate-marketing/{path?}','app');
// Route::get('/affiliate-marketing','PagesController@edit');

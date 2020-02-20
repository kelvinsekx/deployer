<?php

Route::get('/', 'PagesController@aff');
Route::get('/about', 'PagesController@abt');
Route::get('/what-is-affiliate-marketing', 'PagesController@what_is');













// ********************************************************************* 
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

Route::view('/affiliate-marketing/{path?}','layout.app2');
// Route::get('/affiliate-marketing','PagesController@edit');

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function aff(){
      return view('pages.affi');
    }
    public function abt(){
      return view('pages.about');
    }
    public function what_is(){
      return view('pages.what');
    }
    public function edit(){
      return view('pages.edit');
    }
}

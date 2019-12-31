<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $keyType    =  'string';
    protected $primaryKey = 'slug';
    public $incrementing  = false;

    //fillable
    protected $fillable = [
        'title','summary','content','conclusion','slug','user_id'
    ];
    public function user(){
        return $this->belongsTo('App\User');
    }
}

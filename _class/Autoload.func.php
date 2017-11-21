<?php
function __autoload( $e ){

    $file = "../_class/$e.class.php";
    if( file_exists( $file ) ){
        require_once $file;
    }

    $file = "../_controller/$e.php";
    if( file_exists( $file ) ){
        require_once $file;
    }

    $file = "../_model/$e.php";
    if( file_exists( $file ) ){
        require_once $file;
    }

}
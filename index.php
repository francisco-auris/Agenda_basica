<?php
//auto load de arquivos
function __autoload( $e ){

    $file = "_class/$e.class.php";
    if( file_exists( $file ) ){
        require_once $file;
    }

    $file = "_controller/$e.php";
    if( file_exists( $file ) ){
        require_once $file;
    }

    $file = "_model/$e.php";
    if( file_exists( $file ) ){
        require_once $file;
    }

}

require_once "_view/header.part.html";

$var = new ctrlAgenda( 'PHP' );

require_once "_view/footer.part.html";
?>
<?php
class modelQuery extends ctrlConexao {
    
    public function actionSelect( $script ){

        $qrScript = ( strlen(str_replace(" ","",$script)) > 0 ) ? $script : false ;
        if( $qrScript === false ){
            return false;
            exit;
        }
        //continue
       $query = $this->conn->query( $qrScript );
       if( $query and $query->rowCount() > 0 ){
            $fetch = $query->fetchAll( PDO::FETCH_OBJ );
            return $fetch;
       }
       else {
           return false; 
       }

    }

    public function actionInsert( $script ){

        $qrScript = ( strlen(str_replace(" ","",$script)) > 0 ) ? $script : false ;
        if( $qrScript === false ){
            return false;
            exit;
        }
        //continue
       $query = $this->conn->prepare( $qrScript );

       try {
           $query->Execute();
           return true;
       }
       catch( Exeception $e ){
            return $e->getMessage();
       }

    }

}
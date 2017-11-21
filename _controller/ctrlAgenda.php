<?php
if( isset($_POST['methodo']) ){ require_once "../_class/Autoload.func.php"; }

error_reporting(E_ALL);
ini_set('display_errors', 1);

class ctrlAgenda {

    private $dados;
    private $vt_funcoes = array('buscarTodos','buscarId','inserir','atualizar','excluir','buscar');
    
    function __construct( $sys ){
        if( $sys === "PHP" ){
            $this->mountWindow();
        }
        else {
            //joga dados do post na classe
            $this->dados = $sys;
        }
    }

    protected function mountWindow(){
        include_once "_view/agenda.html";
    }

    public function pushFunction( $fx ){
        //instacia classe de agenda
        $agenda = new Agenda();

        if( in_array($fx, $this->vt_funcoes ) ){
            $agenda->$fx();
        }
        else {
            echo 'BLOCKED';
            exit;
        }
    }

}

//trata acesso via ajax
if( isset($_POST['methodo']) and strlen( str_replace( " ","",$_POST['methodo'] ) ) > 0 )
{
    $ajax = new ctrlAgenda( $_POST );
    $ajax->pushFunction( $_POST['methodo'] );
}
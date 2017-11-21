<?php
class Agenda extends modelAgenda {


    public function buscar(){
        //code...
        $cond = ( isset($_POST['cond']) and strlen($_POST['cond']) ) ? $_POST['cond'] : false;
        $valor = ( isset($_POST['valor']) ) ? $_POST['valor'] : false;

        if( $cond === false or $valor === false ){
            echo 'NOT';
            exit;
        }
        else {

            $var = new modelQuery();
            $script = "SELECT * FROM contato WHERE {$cond} LIKE '%".$valor."%'";
            $retorno = $var->actionSelect( $script );

            if( $retorno != false ){

                $dados = $retorno;

                echo '<br><br><strong>Resultados encontrados para '.$cond.' com "<i>'.$valor.'</i>"</strong>';

                require_once "../_view/lista.part.php";

            }
            else {

                echo '<br><br><strong>Nenhum resultado encontrado.</strong>';

            }

        }

    }

    public function buscarTodos(){
        
        $dados = $this->todosContatos();

        if( $dados != false ){
            include_once "../_view/lista.part.php";
        }
            

    }

    public function buscarId(){

        $dados = $this->todosContatos();
        $id = ( isset($_POST['id']) and strlen(str_replace(" ","",$_POST['id'])) > 0 ) ? $_POST['id'] : false ;
        $json = '';

        if( $dados != false and $id != false ){
            for( $i=0; $i < count($dados); $i++ ){
                if( $dados[$i]->idcontato == $id ){
                    $json = json_encode( $dados[$i] );
                    break;
                }
            }
            echo $json;
            exit;
        }
        else {
            echo 'NOT';
        }

    }

    public function inserir(){

        $nome = ( isset($_POST['nome']) ) ? $_POST['nome'] : false ;
        $telefone = ( isset($_POST['fone']) ) ? $_POST['fone'] : false;
        $email = ( isset($_POST['email']) ) ? $_POST['email'] : false;
        $tipo = ( isset($_POST['tipo']) ) ? $_POST['tipo'] : false;
        $dataNasc = ( isset($_POST['data']) ) ? $_POST['data'] : false;
        $idade = ( isset($_POST['idade']) ) ? $_POST['idade'] : '';
        $atividade = ( isset($_POST['atividade']) ) ? $_POST['atividade'] : '';
        $funcao = ( isset($_POST['funcao']) ) ? $_POST['funcao'] : '';

        if( $nome === false or $telefone === false or $email === false or $tipo === false or $dataNasc === false ){
            echo 'Campos obrigatórios vazios.';
            exit;
        }
        else {

            $this->setNome( $nome );
            $this->setTelefone( $telefone );
            $this->setEmail( $email );
            $this->setTipo( $tipo );
            $this->setDataNasc( $dataNasc );
            $this->setIdade( $idade );
            $this->setAtividade( $atividade );
            $this->setFuncao( $funcao );

            $retorno = $this->actionCreate();

            if( $retorno != true ){
                echo $retorno;
                exit;
            }
            else {
                echo 'success';
            }

        }

    }

    public function excluir(){

        $id = ( isset($_POST['id']) and strlen(str_replace(" ","",$_POST['id'])) > 0 ) ? $_POST['id'] : false;

        if( $id === false ){
            echo 'Erro ao tentar excluír contato.';
            exit;
        }
        else {

            $this->setIdContato( $id );

            $retorno = $this->actionDelete();

            if( $retorno != true ){
                echo $retorno;
                exit;
            }
            else {
                echo 'success';
            }

        }

    }

    public function atualizar(){

        $nome = ( isset($_POST['nome']) ) ? $_POST['nome'] : false ;
        $telefone = ( isset($_POST['fone']) ) ? $_POST['fone'] : false;
        $email = ( isset($_POST['email']) ) ? $_POST['email'] : false;
        $tipo = ( isset($_POST['tipo']) ) ? $_POST['tipo'] : false;
        $dataNasc = ( isset($_POST['data']) ) ? $_POST['data'] : false;
        $idade = ( isset($_POST['idade']) ) ? $_POST['idade'] : '';
        $atividade = ( isset($_POST['atividade']) ) ? $_POST['atividade'] : '';
        $funcao = ( isset($_POST['funcao']) ) ? $_POST['funcao'] : '';
        $id = ( isset($_POST['id']) and strlen(str_replace(" ","",$_POST['id'])) > 0 ) ? $_POST['id'] : false ;

        if( $nome === false or $telefone === false or $email === false or $tipo === false or $dataNasc === false or $id === false){
            echo 'Campos obrigatórios vazios.';
            exit;
        }
        else {

            $this->setNome( $nome );
            $this->setTelefone( $telefone );
            $this->setEmail( $email );
            $this->setTipo( $tipo );
            $this->setDataNasc( $dataNasc );
            $this->setIdade( $idade );
            $this->setAtividade( $atividade );
            $this->setFuncao( $funcao );
            $this->setIdContato( $id );

            $retorno = $this->actionUpdate();

            if( $retorno != true ){
                echo $retorno;
                exit;
            }
            else {
                echo 'success';
            }

        }

    }
   

}
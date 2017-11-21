<?php
class modelAgenda extends ctrlConexao {
    
    private $nome;
    private $telefone;
    private $email;
    private $dataNasc;
    private $idade;
    private $tipo;
    private $funcao;
    private $atividade;
    private $idContato;

    //getters e setters
    public function setNome( $nome ) { $this->nome = $nome; }
    public function setTelefone( $fone ){ $this->telefone = $fone; }
    public function setEmail( $email ){ $this->email = $email; }
    public function setDataNasc( $data ){ $this->dataNasc = $data; }
    public function setIdade( $idade ){ $this->idade = $idade; }
    public function setTipo( $tipo ){ $this->tipo = $tipo; }
    public function setIdContato( $id ){ $this->idContato = $id; }
    public function setAtividade( $atividade ){ $this->atividade = $atividade; }
    public function setFuncao( $funcao ){ $this->funcao = $funcao; }

    public function getNome(){ return $this->nome; }
    public function getTelefone(){ return $this->telefone; }
    public function getEmail(){ return $this->email; }
    public function getDataNasc(){ return $this->dataNasc; }
    public function getIdade(){ return $this->idade; }
    public function getTipo(){ return $this->tipo; }
    public function getIdContato(){ return $this->idContato; }
    public function getAtividade(){ return $this->atividade; }
    public function getFuncao(){ return $this->funcao; }


    protected function actionCreate(){

        //variveis
        $nome       = $this->getNome();
        $email      = $this->getEmail();
        $data       = $this->getDataNasc();
        $idade      = $this->getIdade();
        $tipo       = $this->getTipo();
        $fone       = $this->getTelefone();
        $atividade  = $this->getAtividade();
        $funcao     = $this->getFuncao();

        $insert  = "INSERT INTO contato (nome,email,dataNasc,idade,tipo,fone,atividade,funcionario) VALUES (:nome, :email, :data, :idade, :tipo, :fone, :atividade, :funcao)";
        //$insert2 = "INSERT INTO contato_comercial()";

        $query = $this->conn->prepare( $insert );

        $query->bindParam( ":nome", $nome, PDO::PARAM_STR );
        $query->bindParam( ":email", $email, PDO::PARAM_STR );
        $query->bindParam( ":data", $data, PDO::PARAM_STR );
        $query->bindParam( ":idade", $idade, PDO::PARAM_INT );
        $query->bindParam( ":tipo", $tipo, PDO::PARAM_STR );
        $query->bindParam( ":fone", $fone, PDO::PARAM_STR );
        $query->bindParam( ":atividade", $atividade, PDO::PARAM_STR );
        $query->bindParam( ":funcao", $funcao, PDO::PARAM_STR );

        try {

            $query->Execute();
            return true;

        }
        catch( Exeception $e ){

            return $e->getMessage();

        }

    }

    protected function actionUpdate(){

        //variveis
        $nome       = $this->getNome();
        $email      = $this->getEmail();
        $data       = $this->getDataNasc();
        $idade      = $this->getIdade();
        $tipo       = $this->getTipo();
        $fone       = $this->getTelefone();
        $atividade  = $this->getAtividade();
        $funcao     = $this->getFuncao();
        $id         = $this->getIdContato();

        $update = "UPDATE contato SET nome= :nome,email= :email,dataNasc= :data,idade= :idade,tipo= :tipo,fone= :fone,atividade= :atividade,funcionario= :funcao WHERE idcontato = :id";

        $query = $this->conn->prepare( $update );
        //prepare statements
        $query->bindParam( ":nome", $nome, PDO::PARAM_STR );
        $query->bindParam( ":email", $email, PDO::PARAM_STR );
        $query->bindParam( ":data", $data, PDO::PARAM_STR );
        $query->bindParam( ":idade", $idade, PDO::PARAM_INT );
        $query->bindParam( ":tipo", $tipo, PDO::PARAM_STR );
        $query->bindParam( ":fone", $fone, PDO::PARAM_STR );
        $query->bindParam( ":atividade", $atividade, PDO::PARAM_STR );
        $query->bindParam( ":funcao", $funcao, PDO::PARAM_STR );
        $query->bindParam( ":id", $id, PDO::PARAM_INT );

        try {

            $query->Execute();
            return true;

        }
        catch( Exeception $e ){

            return $e->getMessage();

        }

    }

    protected function actionDelete(){

        $id = $this->getIdContato();
        
        $consulta = $this->conn->prepare("DELETE FROM contato WHERE idcontato=:id");

        $consulta->bindParam( ":id", $id, PDO::PARAM_INT );

        try {
            $consulta->Execute();
            return true;
        }
        catch( Exception $e ){
            return $e->getMessage();
        }

    }

    public function todosContatos(){

        $consulta = $this->conn->query("SELECT * FROM contato ORDER BY nome ASC");

        if( $consulta and $consulta->rowCount() > 0 ){

            $fetch = $consulta->fetchAll( PDO::FETCH_OBJ );
            return $fetch;

        }
        else {
            return false;
        }

    }

}
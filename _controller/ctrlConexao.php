<?php
class ctrlConexao {
	
	protected $conn;

	function __construct(){ $this->conn = $this->connLocal(); }

	const host = "localhost";
	const db = "agenda";
	const usr = "root";
	const pwd = "N3wG3r3nc1A";

	protected function connLocal(){
		try {
		  $conn = new PDO('mysql:host='.self::host.';dbname='.self::db, self::usr, self::pwd);
		    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		    return $conn;
		} catch(PDOException $e) {
			throw new PDOException($e);
		    return $e->getMessage();
		    exit;
		}
	}

}
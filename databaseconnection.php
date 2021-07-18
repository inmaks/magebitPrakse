<?php
class DB {
	public $servername="";
	public $username="";
	public $password="";
	public $dbname="";
	
	function __construct($servername, $username, $password, $dbname){
		$this->servername = $servername;
		$this->username = $username;
		$this->password = $password;
		$this->dbname = $dbname;
	}
	
	function connect(){
		return new mysqli($this->servername, $this->username, $this->password, $this->dbname);
	}
	
	function getData($dbase, $tableName){
		$sql = "SELECT * FROM " .$tableName;
		return $dbase->query($sql);
	}
	
	function insertData($dbase, $tableName, $email){
		$sql = "INSERT INTO " .$tableName ."(email) VALUES('" .$email ."');";
		$dbase->query($sql);
	}
}
?>
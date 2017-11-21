<br>
<br>
<table class="table">
<?php
for( $i=0; $i < count($dados); $i++ ){
    $tipo = ( $dados[$i]->tipo == "B" ) ? "Básico" : "Comercial";
    echo '<tr>';
        echo '<td>'.$dados[$i]->nome.'</td>';
        echo '<td>'.$dados[$i]->email.'</td>';
        echo '<td>'.$dados[$i]->fone.'</td>';
        echo '<td>'.$tipo.'</td>';
        echo '<td width="4%"><button class="btn btn-sm btn-primary" onclick=editar("'.$dados[$i]->idcontato.'");>Editar</button></td>';
        echo '<td width="4%"><button class="btn btn-sm btn-danger" onclick=excluir("'.$dados[$i]->idcontato.'");>Excluír</button></td>';
    echo '</tr>';
}
?>
</table>
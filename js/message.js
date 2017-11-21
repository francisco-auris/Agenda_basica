var message = new clsMessage;
//messages in modal application
function modalAddContato(){

    var tk = getToken();

    var modal = '';
    modal += '<div class="modal fade" id="modal_'+tk+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
    modal += '<div class="modal-dialog modal-md" role="document">';
    modal +=   '<div class="modal-content">';
    modal +=     '<div class="modal-header">';
    modal +=       '<h5 class="modal-title" id="exampleModalLabel">Novo Contato</h5>';
    modal +=       '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    modal +=          '<span aria-hidden="true">&times;</span>';
    modal +=      '</button>';
    modal +=     '</div>';
    modal +=     '<div class="modal-body">';
         modal += '<div class="form-group row">';
         modal += '<label for="inputEmail3" class="col-sm-2 col-form-label">Nome</label>';
         modal += '<div class="col-sm-10">';
         modal += '  <input type="text" name="nome_'+tk+'" class="form-control form-control-sm" id="inputEmail3" placeholder="Nome">';
         modal += '</div>';
         modal += '</div>';

         modal += '<div class="form-group row">';
         modal += '<label for="inputEmail3" class="col-sm-2 col-form-label">E-mail</label>';
         modal += '<div class="col-sm-10">';
         modal += '  <input type="email" name="email_'+tk+'" class="form-control form-control-sm" id="inputEmail3" placeholder="Email">';
         modal += '</div>';
         modal += '</div>';

         modal += '<div class="form-group row">';
         modal += '<label for="inputEmail3" class="col-sm-2 col-form-label">Telefone</label>';
         modal += '<div class="col-sm-4">';
         modal += '  <input type="text" name="fone_'+tk+'" class="form-control form-control-sm" id="inputEmail3" placeholder="(00) 00000 0000">';
         modal += '</div>';

         modal += '<label for="inputEmail3" class="col-sm-1 col-form-label">Nasc.</label>';
         modal += '<div class="col-sm-5">';
         modal += '  <input type="date" name="data_'+tk+'" class="form-control form-control-sm" id="inputEmail3" >';
         modal += '</div>';
         modal += '</div>';

         modal += '<div class="form-group row">';
            modal += '<label for="inputEmail3" class="col-sm-2 col-form-label">Idade</label>';
            modal += '<div class="col-sm-4">';
            modal += '  <input type="number" name="idade_'+tk+'" class="form-control form-control-sm" id="inputEmail3">';
            modal += '</div>';

            modal += '<label for="inputEmail3" class="col-sm-2 col-form-label">Tipo:</label>';
            modal += '<div class="col-sm-4">';
            modal += '  <select onchange="tipo(this);" data-token="'+tk+'" name="tipo_'+tk+'" class="form-control form-control-sm"><option value="BASICO">Básico</option><option value="COMERCIAL">Comercial</option></select>';
            modal += '</div>';
         modal += '</div>';

         modal += '<div class="form-group row">';
         modal += '<label for="inputEmail3" class="col-sm-2 col-form-label">Atividade</label>';
         modal += '<div class="col-sm-10">';
         modal += '  <input type="text" name="atividade_'+tk+'" class="form-control form-control-sm" id="inputEmail3" placeholder="Atividade" disabled>';
         modal += '</div>';
         modal += '</div>';

         modal += '<div class="form-group row">';
         modal += '<label for="inputEmail3" class="col-sm-3 col-form-label">Funcionário</label>';
         modal += '<div class="col-sm-9">';
         modal += '  <input type="text" name="funcao_'+tk+'" class="form-control form-control-sm" id="inputEmail3" placeholder="Funcionario" disabled>';
         modal += '</div>';
         modal += '</div>';

    modal +=     '</div>';
    modal +=     '<div class="modal-footer">';
    modal +=       '<button type="button" class="btn btn-primary btn-sm btn-block" onclick=salvar("'+tk+'");>Salvar</button>';
    modal +=     '</div>';
    modal +=   '</div>';
    modal += '</div>';
    modal += '</div>';

    $(modal).modal('show');

}

function modalUpdate( data ){
    
        var tk = getToken();
        var obj = JSON.parse(data);
        //variaveis
        var nome    = ( obj['nome'] != "" ) ? obj['nome'] : "";
        var email   = ( obj['email'] != "" ) ? obj['email'] : "";
        var fone    = ( obj['fone'] != "" || obj['fone'] == "undefined" ) ? obj['fone'] : "";
        var atividade = ( obj['atividade'] != "" || obj['atividade'] == "undefined" ) ? obj['atividade'] : "";
        var funcao = ( obj['funcionario'] != "" || obj['funcionario'] == "undefined" ) ? obj['funcionario'] : "";
    
        var modal = '';
        modal += '<div class="modal fade" id="modal_'+tk+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
        modal += '<div class="modal-dialog modal-md" role="document">';
        modal +=   '<div class="modal-content">';
        modal +=     '<div class="modal-header">';
        modal +=       '<h5 class="modal-title" id="exampleModalLabel">Novo Contato</h5>';
        modal +=       '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
        modal +=          '<span aria-hidden="true">&times;</span>';
        modal +=      '</button>';
        modal +=     '</div>';
        modal +=     '<div class="modal-body">';
             modal += '<div class="form-group row">';
             modal += '<label for="inputEmail3" class="col-sm-2 col-form-label">Nome</label>';
             modal += '<div class="col-sm-10">';
             modal += '  <input type="text" value="'+nome+'" name="nome_'+tk+'" class="form-control form-control-sm" id="inputEmail3" placeholder="Nome">';
             modal += '</div>';
             modal += '</div>';
    
             modal += '<div class="form-group row">';
             modal += '<label for="inputEmail3" class="col-sm-2 col-form-label">E-mail</label>';
             modal += '<div class="col-sm-10">';
             modal += '  <input type="email" value="'+email+'" name="email_'+tk+'" class="form-control form-control-sm" id="inputEmail3" placeholder="Email">';
             modal += '</div>';
             modal += '</div>';
    
             modal += '<div class="form-group row">';
             modal += '<label for="inputEmail3" class="col-sm-2 col-form-label">Telefone</label>';
             modal += '<div class="col-sm-4">';
             modal += '  <input type="text" value="'+fone+'" name="fone_'+tk+'" class="form-control form-control-sm" id="inputEmail3" placeholder="(00) 00000 0000">';
             modal += '</div>';
    
             modal += '<label for="inputEmail3" class="col-sm-1 col-form-label">Nasc.</label>';
             modal += '<div class="col-sm-5">';
             modal += '  <input type="date" value="'+obj['dataNasc']+'" name="data_'+tk+'" class="form-control form-control-sm" id="inputEmail3" >';
             modal += '</div>';
             modal += '</div>';
    
             modal += '<div class="form-group row">';
                modal += '<label for="inputEmail3" class="col-sm-2 col-form-label">Idade</label>';
                modal += '<div class="col-sm-4">';
                modal += '  <input type="number" value="'+obj['idade']+'" name="idade_'+tk+'" class="form-control form-control-sm" id="inputEmail3">';
                modal += '</div>';
    
                modal += '<label for="inputEmail3" class="col-sm-2 col-form-label">Tipo:</label>';
                modal += '<div class="col-sm-4">';
                modal += '  <select onchange="tipo(this);" data-token="'+tk+'" name="tipo_'+tk+'" class="form-control form-control-sm">';
                if( obj['tipo'] == "C" ){
                    modal += '<option value="B">Básico</option><option value="C" selected>Comercial</option>';
                }
                else {
                    modal += '<option value="B" selected>Básico</option><option value="C">Comercial</option>;'
                }  
                modal += '</select>';
                modal += '</div>';
             modal += '</div>';
    
             modal += '<div class="form-group row">';
             modal += '<label for="inputEmail3" class="col-sm-2 col-form-label">Atividade</label>';
             modal += '<div class="col-sm-10">';
             modal += '  <input type="text" value="'+atividade+'" name="atividade_'+tk+'" class="form-control form-control-sm" id="inputEmail3" placeholder="Atividade" disabled>';
             modal += '</div>';
             modal += '</div>';
    
             modal += '<div class="form-group row">';
             modal += '<label for="inputEmail3" class="col-sm-3 col-form-label">Funcionário</label>';
             modal += '<div class="col-sm-9">';
             modal += '  <input type="text" value="'+funcao+'" name="funcao_'+tk+'" class="form-control form-control-sm" id="inputEmail3" placeholder="Funcionario" disabled>';
             modal += '</div>';
             modal += '</div>';
    
        modal +=     '</div>';
        modal +=     '<div class="modal-footer">';
        modal +=       '<button type="button" class="btn btn-primary btn-sm btn-block" onclick=atualizar("'+tk+'","'+obj['idcontato']+'");>Atualizar</button>';
        modal +=     '</div>';
        modal +=   '</div>';
        modal += '</div>';
        modal += '</div>';
    
        $(modal).modal('show');
    
}

function clsMessage(){

    this.carrega = function( e ){
        if( e == 'on' ){
            $('.load').css('display','block');
        }else {
            $('.load').css('display','none');
        }
    }

}
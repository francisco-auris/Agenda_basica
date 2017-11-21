//core js application
$(document).ready(function(){
    //code initial
	loadLista();
	
	$('input[name=buscar]').keyup(function(){ //action buscar
		
		var valor = $('input[name=buscar]').val();
		 var estorn = valor.replace( /\s/g, '' );
		var cond = $('select[name=filtro] option:selected').val();
		
		if( estorn.length > 0 && cond != "" ){

			$.ajax({
				type: 'POST',
				url: '_controller/ctrlAgenda.php',
				data: {
					methodo: 'buscar',cond: cond,valor: valor
				},
				beforeSend: function(){
					message.carrega( 'on' );
				},
				complete: function(){
					message.carrega( 'off' );
				},
				success: function(data){
					$('#conteudo').html(data);
				}
			});

		}

	});

});

function getToken(){
    var obj = new Date();
	var str = obj.getMilliseconds()+''+obj.getMinutes()+''+obj.getSeconds()+''+obj.getHours();
	return str;
}

function loadLista(){

    $.ajax({
		type: 'POST',
		url: '_controller/ctrlAgenda.php',
		data: {
			methodo: 'buscarTodos'
		},
		beforeSend: function(){
			message.carrega( 'on' );
		},
		complete: function(){
			message.carrega( 'off' );
		},
		success: function(data){
			$('#conteudo').html(data);
		}
	});

}

function editar( id ){

	$.ajax({
		type: 'POST',
		url: '_controller/ctrlAgenda.php',
		data: {
			methodo: 'buscarId',id: id
		},
		beforeSend: function(){
			message.carrega( 'on' );
		},
		complete: function(){
			message.carrega( 'off' );
		},
		success: function(data){
			if( data == "NOT" ){
				alert("Nenhum resultado encontrado.");
			}
			else {
				modalUpdate( data );
			}
		}
	});

}

function atualizar( tk, id ){

	var nome = $('input[name=nome_'+tk+']').val();
		var snome = nome.replace( /\s/g, '' );
	var email = $('input[name=email_'+tk+']').val();
	var fone = $('input[name=fone_'+tk+']').val();
		var sfone = fone.replace( /\s/g, '' );
	var idade = $('input[name=idade_'+tk+']').val();
	var tipo = $('select[name=tipo_'+tk+'] option:selected').val();
	var atividade = $('input[name=atividade_'+tk+']').val();
	var funcao = $('input[name=funcao_'+tk+']').val();
	var data = $('input[name=data_'+tk+']').val();

	if( snome.length > 0 && sfone.length > 0  && id.length > 0 ){
		
		$.ajax({
			type: 'POST',
			url: '_controller/ctrlAgenda.php',
			data: {
				methodo: 'atualizar',nome: nome,email: email,idade: idade,fone: fone,tipo: tipo,data: data,atividade: atividade,funcao: funcao,id: id
			},
			beforeSend: function(){
				message.carrega( 'on' );
			},
			complete: function(){
				message.carrega( 'off' );
			},
			success: function(data){
				if( data == 'success' ){
					alert("Contato atualizado com sucesso.");
					loadLista();
					$('#modal_'+tk+'').modal('hide');
				}
				else {
					alert(data);
				}
			}
		});

	}
	else {
		alert("Campos de Nome e Telefone são obrigatórios.");
	}

}

function salvar( tk ){

	var nome = $('input[name=nome_'+tk+']').val();
		var snome = nome.replace( /\s/g, '' );
	var email = $('input[name=email_'+tk+']').val();
	var fone = $('input[name=fone_'+tk+']').val();
		var sfone = fone.replace( /\s/g, '' );
	var idade = $('input[name=idade_'+tk+']').val();
	var tipo = $('select[name=tipo_'+tk+'] option:selected').val();
	var atividade = $('input[name=atividade_'+tk+']').val();
	var funcao = $('input[name=funcao_'+tk+']').val();
	var data = $('input[name=data_'+tk+']').val();

	if( snome.length > 0 && sfone.length > 0 ){

		$.ajax({
			type: 'POST',
			url: '_controller/ctrlAgenda.php',
			data: {
				methodo: 'inserir',nome: nome,email: email,idade: idade,fone: fone,tipo: tipo,data: data,atividade: atividade,funcao: funcao
			},
			beforeSend: function(){
				message.carrega( 'on' );
			},
			complete: function(){
				message.carrega( 'off' );
			},
			success: function(data){
				if( data == 'success' ){
					alert("Contato salvo.");
					loadLista();
					$('#modal_'+tk+'').modal('hide');
				}
				else {
					alert(data);
				}
			}
		});

	}
	else {
		alert("Campos de Nome e Telefone são obrigatórios.");
	}

}

function excluir( id ){

	$.ajax({
		type: 'POST',
		url: '_controller/ctrlAgenda.php',
		data: {
			methodo: 'excluir', id: id
		},
		beforeSend: function(){
			message.carrega( 'on' );
		},
		complete: function(){
			message.carrega( 'off' );
		},
		success: function(data){
			if( data == 'success' ){
				alert("Contato excluído com sucesso.");
				loadLista();
			}
			else {
				alert(data);
			}
		}
	});

}

function tipo(e){

	if( e.value == "C" ){
		$('input[name=atividade_'+e.dataset.token+']').prop('disabled', false);
		$('input[name=funcao_'+e.dataset.token+']').prop('disabled', false);
	}
	else {
		$('input[name=atividade_'+e.dataset.token+']').prop('disabled', true);
		$('input[name=funcao_'+e.dataset.token+']').prop('disabled', true);
	}

}
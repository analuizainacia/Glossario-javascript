$(document).ready(function() {
  
  $.getJSON('', function(data) {
      var selectBox = $('#slc-topicos');
     
      $.each(data, function(index, item) {
          selectBox.append('<option value="' + item.id + '">' + item.titulo + '</option>');
      });
  });
});

function onSelectChange() {
  var selecionado = $('#slc-topicos').val();
  var descricao = $('#txt-desc');
  
  var itemSelecionado = seuJSON.find(function(item) {
      return item.id == selecionado;
  });
  

  descricao.val(itemSelecionado.descricao);
}
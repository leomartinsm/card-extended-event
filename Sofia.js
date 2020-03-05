function search_table() {
  var input, filter, table, tr, td, cell, i, j;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("generic_list_table");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    // Hide the row initially.
    tr[i].style.display = "none";
  
    td = tr[i].getElementsByTagName("td");
    for (var j = 0; j < td.length; j++) {
      cell = tr[i].getElementsByTagName("td")[j];
      if (cell) {
        if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        } 
      }
    }
  }
}


const $tableID = $('#generic_list_table');

// A few jQuery helpers for exporting only
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

function monta_data(pk){

    const $row = $(`#${pk}`)
    const headers = [];
    const data = [];

    // Get the headers (add special header logic here)
    $($('#cabecalio')).find('th:not(:empty)').each(function () {
        headers.push($(this).text().toLowerCase().trim());
    });

    // Turn all existing row into a loopable array
    $row.each(function () {
        const $td = $(this).find('td');
        const h = {};

        // Use the headers from earlier to name our hash keys
        headers.forEach((header, i) => {
            h[header] = $td.eq(i).text().trim();
        });
        data.push(h);
    });

    return JSON.stringify(data)
};


function salva_alteracao(pk){
  json_data = monta_data(pk)
  var el = document.getElementsByName("csrfmiddlewaretoken");
  csrf_value = el[0].getAttribute("value");
  data = {'data':json_data, 'pk':pk, csrfmiddlewaretoken: csrf_value}

  $.ajax({
    url: '/editar_exercicio',
    type: 'POST',
    data: data,
    dataType: 'json',

    success: function (data){
      toastr.success(data["msg"], data["titulo"])
    },
    error: function(data){
      toastr.error(data["responseJSON"]["msg"], data["responseJSON"]["titulo"])
    }
  });
}

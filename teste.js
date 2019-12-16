
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM"],
    datasets: [
      {
        fill: false,
        borderColor: "#673ab7",
        pointBackgroundColor: "#673ab7",
        data: [885, 884, 887, 883, 888, 889, 888]
      }
    ]
  },
  options: {
    responsive: false,
    legend: {
      display: false
    },
    elements: {
      line: {
        tension: 0.0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          padding: 15,
          height: 30
        }
      }],
      yAxes: [{
        gridLines: {
          drawBorder: false
        },
        ticks: {
            maxTicksLimit: 5,
            padding: 15,
            min: 880,
            max: 890
          }
      }]
    }
  }
});


$(document).ready ( function () {
    var $cardStatus = $('.card-status');

$(document).on ("click", ".card-status", function (e) {
    var $cardStatus = (this);
    var $tabelaCard = $('.tabela-card', this.parentElement.parentElement.parentElement.parentElement);

    e.preventDefault();
    if ( $cardStatus.getAttribute('data-state') == 'up' ) {
        $cardStatus.children[0].classList.remove('card-aberto')
        $cardStatus.children[0].classList.add('card-oculto')
        $cardStatus.children[1].classList.remove('card-oculto')
        $cardStatus.children[1].classList.add('card-aberto')
        $cardStatus.setAttribute('data-state', 'down')
        $tabelaCard.children()[2].classList.remove('linha-dia')
        $tabelaCard.children()[2].classList.add('linha-dia-oculto')
        $tabelaCard.children()[3].classList.remove('linha-mes')
        $tabelaCard.children()[3].classList.add('linha-mes-oculto')
    }
    else{
        $cardStatus.children[1].classList.remove('card-aberto')
        $cardStatus.children[1].classList.add('card-oculto')
        $cardStatus.children[0].classList.remove('card-oculto')
        $cardStatus.children[0].classList.add('card-aberto')
        $cardStatus.setAttribute('data-state', 'up')
        $tabelaCard.children()[2].classList.remove('linha-dia-oculto')
        $tabelaCard.children()[2].classList.add('linha-dia')
        $tabelaCard.children()[3].classList.remove('linha-mes-oculto')
        $tabelaCard.children()[3].classList.add('linha-mes')
    }

});
});
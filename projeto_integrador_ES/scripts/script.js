document.addEventListener("DOMContentLoaded", function() {
    const casosUrgencia = document.querySelectorAll(".caso-urgencia");

    casosUrgencia.forEach(elemento => {
        const estado = elemento.textContent.trim();

        switch (estado) {
            case "Não Urgente":
                elemento.style.backgroundColor = "green";
                break;
            case "Pouco Urgente":
                elemento.style.backgroundColor = "rgb(221, 221, 0)";
                break;
            case "Urgente":
                elemento.style.backgroundColor = "red";
                break;
            case "Muito Urgente":
                elemento.style.backgroundColor = "darkred";
                break;
            default:
                elemento.style.backgroundColor = "gray";
                break;
        }
    });
});

const totalNaoUrgentes = document.querySelector('.informs-cads.nao-urgente span');
const totalPoucoUrgentes = document.querySelector('.informs-cads.pouco-urgente span');
const totalUrgentes = document.querySelector('.informs-cads.urgente span');
const totalMuitoUrgentes = document.querySelector('.informs-cads.muito-urgente span');

function atualizarCores() {
  const naoUrgentes = parseInt(totalNaoUrgentes.textContent);
  const poucoUrgentes = parseInt(totalPoucoUrgentes.textContent);
  const urgentes = parseInt(totalUrgentes.textContent);
  const muitoUrgentes = parseInt(totalMuitoUrgentes.textContent);

  if (naoUrgentes >= muitoUrgentes) {
    totalMuitoUrgentes.classList.add('muito-urgente');
  } else if (urgentes >= poucoUrgentes) {
    totalUrgentes.classList.add('urgente');
  } else if (poucoUrgentes >= naoUrgentes) {
    totalPoucoUrgentes.classList.add('pouco-urgente');
  } else {
    totalNaoUrgentes.classList.add('nao-urgente');
  }
}

atualizarCores();
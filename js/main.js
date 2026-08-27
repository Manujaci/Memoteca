import ui from "./ui.js"
import api from "./api.js"

document.addEventListener('DOMContentLoaded', ()=>{
    ui.renderizarPensamentos()

    const formularioPensamento = document.getElementById("pensamento-form")
    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario)

})

async function manipularSubmissaoFormulario(event) {
    event.preventDefault()

    const id =  document.getElementById("pensamento-id").value
    const conteudo = document.getElementById("pensamento-conteudo").value
    const autoria = document.getElementById("pensamento-autoria").value

    try {
        await api.salvarPensamento({conteudo, autoria})
        ui.renderizarPensamentos()
    } catch {
        alert("Erro ao enviar formulário")
    }

}

    const cancelar = document.getElementById("botao-cancelar")
    cancelar.addEventListener("click", () => {
        let conteudo = document.getElementById("pensamento-conteudo")
        let autoria = document.getElementById("pensamento-autoria")

        conteudo.value = ""
        autoria.value = ""
    })
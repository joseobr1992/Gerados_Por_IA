let listaTarefas = [];

function adicionarTarefa() {
    let tarefaInput = document.getElementById('tarefaInput');
    let tarefaTexto = tarefaInput.value;

    if (tarefaTexto) {
        let novaTarefa = {
            texto: tarefaTexto,
            concluida: false
        };

        listaTarefas.push(novaTarefa);
        atualizarListaTarefas();
        tarefaInput.value = '';
    }
}

function atualizarListaTarefas() {
    let lista = document.getElementById('listaTarefas');
    lista.innerHTML = '';

    listaTarefas.forEach(function(tarefa, index) {
        let itemLista = document.createElement('li');
        itemLista.textContent = tarefa.texto;

        if (tarefa.concluida) {
            itemLista.classList.add('concluida');
        }

        itemLista.onclick = function() {
            marcarTarefaConcluida(index);
        };

        lista.appendChild(itemLista);
    });
}

function marcarTarefaConcluida(index) {
    listaTarefas[index].concluida = !listaTarefas[index].concluida;
    atualizarListaTarefas();
}

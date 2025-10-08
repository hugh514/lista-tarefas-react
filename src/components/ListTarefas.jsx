import React, { useState } from "react";

function ListTarefas() {
  let idGlobal = 1;
  const [listaTarefa, setTarefa] = useState([]);

  const adicionarTarefa = () => {
    const nomeTarefa = document.querySelector(".nome-tarefa").value;
    const statusTarefa = document.querySelector(".status").value;
    setTarefa((prevTarefa) => [
      ...prevTarefa,
      {
        id: (idGlobal += 1),
        nome: nomeTarefa,
        status: statusTarefa,
      },
    ]);
  };
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <span>
        Nome da Tarefa: <input type="text" className="nome-tarefa" />
      </span>
      <span>
        Status: <input type="text" className="status" />
      </span>
      <br />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ul>
        {listaTarefa.map((tarefa) => (
          <li key={tarefa.id}>
            Nome da tarefa: {tarefa.nome}
            <br />
            Status da Tarefa: {tarefa.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTarefas;

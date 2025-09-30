// Adiciona um "ouvinte" para o evento de clique no botão de confirmação.
document.getElementById("confirmarBtn").addEventListener("click", () => {
   // 1. Seleciona todos os inputs do tipo checkbox com o nome "servico" que estão marcados (:checked).
   const servicosSelecionados = document.querySelectorAll(
      'input[name="servico"]:checked'
   );

   const logAcoesLista = document.getElementById("log-acoes");
   logAcoesLista.innerHTML = ""; // Limpa os resultados anteriores

   if (servicosSelecionados.length === 0) {
      console.log("Nenhum serviço foi selecionado.");
      logAcoesLista.innerHTML = "<li>Nenhum serviço selecionado.</li>";
      return; // Para a execução se nada foi selecionado
   }
   // ...existing code...

   if (servicosSelecionados.length > 1) {
      const nomesSelecionados = Array.from(servicosSelecionados).map(
         (cb) => cb.value
      );
      const aviso = document.createElement("li");
      aviso.textContent = `Você selecionou múltiplos serviços: ${nomesSelecionados.join(
         ", "
      )}`;
      aviso.style.fontWeight = "bold";
      logAcoesLista.appendChild(aviso);
   }

   // ...existing code...
   console.log(
      `Iniciando processamento para ${servicosSelecionados.length} serviço(s)...`
   );

   // 2. Itera sobre cada checkbox selecionado usando forEach.
   // Para cada um, uma ação é executada, simulando "múltiplos eventos".
   servicosSelecionados.forEach((checkbox) => {
      const nomeDoServico = checkbox.value;

      // Permite múltiplos serviços: nada a alterar aqui, pois o querySelectorAll já retorna todos os selecionados.
      // Se quiser exibir todos os serviços selecionados juntos, pode fazer assim:
      // (mas o restante do código já suporta múltiplos serviços)

      // Exemplo de ação 1: Registrar no console
      console.log(`Processando o serviço: ${nomeDoServico}`);

      // Exemplo de ação 2: Chamar uma função específica para adicionar ao carrinho
      adicionarAoCarrinho(nomeDoServico);

      // Exemplo de ação 3: Exibir na tela a ação que foi executada
      const listItem = document.createElement("li");
      listItem.textContent = `Ação para "${nomeDoServico}" foi executada.`;
      logAcoesLista.appendChild(listItem);
   });

   console.log("Processamento finalizado.");
});

/**
 * Função de exemplo que poderia adicionar um serviço ao carrinho de compras.
 * @param {string} nomeServico O nome do serviço a ser processado.
 */
function adicionarAoCarrinho(nomeServico) {
   // Aqui iria sua lógica complexa, como uma chamada de API, etc.
   console.log(
      `-> Lógica 'adicionarAoCarrinho' executada para: ${nomeServico}`
   );
}

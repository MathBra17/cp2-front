// Ex3 — Grid simples

// Crie um `grid` com 2 colunas e 2 linhas, cada célula com fundo cinza claro e altura fixa de `80px`.

export default function Ex3() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex3 - Grid Simples</h1>
      <div Class="grid grid-cols-2 grid-rows-2 h-80 w-60 gap-4">
        <div Class=" bg-gray-300"></div>
        <div Class=" bg-gray-300"></div>
        <div Class=" bg-gray-300"></div>
        <div Class=" bg-gray-300"></div>
      </div>
    </div>
  );
}
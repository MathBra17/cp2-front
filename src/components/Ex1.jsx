// Ex1 — Botão estilizado com Tailwind

// Crie um botão centralizado com a cor azul, texto branco, padding, bordas arredondadas e efeito `hover` para escurecer a cor.

export default function Ex1() {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold mb-4">Ex1 - Botão Estilizado</h1>
      <div class="bg-blue-600 border-r-0 rounded-md  p-1.5 w-14 hover:bg-blue-700">
        <button class="text-white">Botão</button>
      </div>
    </div>
  );
}
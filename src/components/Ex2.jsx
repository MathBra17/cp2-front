// Ex2 — Flexbox básico

// Crie um container com `flex` que alinhe três quadrados coloridos (50x50px) lado a lado e centralizados horizontalmente.

export default function Ex2() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex2 - Flexbox Básico</h1>
        <div Class="flex gap-4 justify-center">
          <div class="bg-blue-600 w-50 h-50"></div>
          <div Class="bg-red-600 w-50 h-50"></div>
          <div Class="bg-green-600 w-50 h-50"></div>
        </div>
        
    </div>
  );
}

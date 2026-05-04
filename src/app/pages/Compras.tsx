import { Link } from "react-router-dom";
import { Book, BookOpenText } from "lucide-react";

export default function Compras() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#064E3B] via-[#065F46] to-[#064E3B] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-10 text-[#FACC15] hover:underline"
        >
          ← Voltar para o site
        </Link>

        <div className="text-center mb-14">
          <p className="inline-block bg-[#FACC15]/20 text-[#FACC15] px-5 py-2 rounded-full mb-6">
            Escolha sua versão
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Como você deseja acessar o livro?
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Escolha entre a versão digital com acesso imediato ou o livro físico
            para receber em casa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Ebook */}
          <div className="bg-white text-[#064E3B] rounded-3xl p-8 shadow-2xl h-full flex flex-col justify-between">
            <div className="mb-4">
              <BookOpenText className="w-12 h-12" />
            </div>

            <h2 className="text-3xl font-bold mb-4">Ebook</h2>

            <p className="text-[#444444] mb-6 leading-relaxed">
              Ideal para quem quer começar a leitura imediatamente em formato
              digital.
            </p>

            <ul className="space-y-3 text-[#444444] mb-8">
              <li>✅ Acesso imediato após pagamento</li>
              <li>✅ Leitura no celular, tablet ou computador</li>
              <li>✅ Sem frete</li>
            </ul>

            <a
              href="COLE_AQUI_LINK_KIWIFY"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#065F46] text-white py-4 rounded-2xl hover:bg-[#064E3B] transition shadow-xl"
            >
              <BookOpenText className="w-5 h-5" />
              Comprar Ebook
            </a>
          </div>

          {/* Físico */}
          <div className="bg-[#FACC15] text-[#064E3B] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-[#064E3B] text-white text-sm px-4 py-2 rounded-full">
              Mais tradicional
            </div>

            <div className="mb-4">
              <Book className="w-12 h-12" />
            </div>

            <h2 className="text-3xl font-bold mb-4">Livro físico</h2>

            <p className="text-[#064E3B]/80 mb-6 leading-relaxed">
              Para quem deseja ter a obra impressa, guardar, presentear ou
              colecionar.
            </p>

            <ul className="space-y-3 text-[#064E3B]/90 mb-8">
              <li>✅ Exemplar impresso</li>
              <li>✅ Envio para todo o Brasil</li>
              <li>✅ Ideal para presente</li>
            </ul>

            <a
              href="https://wa.me/5561991779096?text=Olá,%20quero%20comprar%20o%20livro%20físico%20BEM%20VIVER"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#064E3B] text-white py-4 rounded-2xl hover:bg-[#065F46] transition shadow-xl"
            >
              <Book className="w-5 h-5" />
              Comprar Livro Físico
            </a>
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="text-gray-200 mb-4">
            Ainda está em dúvida sobre qual versão escolher?
          </p>

          <a
            href="https://wa.me/61991779096?text=Olá%20tenho%20interesse%20no%20livro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white/10 border border-white/30 px-8 py-4 rounded-2xl hover:bg-white/20 transition"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}

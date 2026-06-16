import { Link } from "react-router-dom";
import { Book, BookOpenText } from "lucide-react";

export default function Compras() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#064E3B] via-[#065F46] to-[#064E3B] text-white px-4 sm:px-6 py-10 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-8 sm:mb-10 text-[#FACC15] hover:underline text-sm sm:text-base"
        >
          ← Voltar para o site
        </Link>

        <div className="text-center mb-10 sm:mb-14">
          <p className="inline-block bg-[#FACC15]/20 text-[#FACC15] px-4 sm:px-5 py-2 rounded-full mb-5 sm:mb-6 text-sm sm:text-base">
            Escolha sua versão
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-5 sm:mb-6 leading-tight">
            Como você deseja acessar o livro?
          </h1>

          <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Escolha entre a versão digital com acesso imediato ou o livro físico
            para receber em casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Ebook */}
          <div className="bg-white text-[#064E3B] rounded-3xl p-6 sm:p-8 shadow-2xl h-full flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <BookOpenText className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ebook</h2>

              <p className="text-[#444444] mb-6 leading-relaxed text-sm sm:text-base">
                Ideal para quem quer começar a leitura imediatamente em formato
                digital.
              </p>

              <ul className="space-y-3 text-[#444444] mb-8 text-sm sm:text-base">
                <li>✅ Acesso imediato após pagamento</li>
                <li>✅ Leitura no celular, tablet ou computador</li>
                <li>✅ Sem frete</li>
              </ul>
            </div>

            <a
              href="https://pay.kiwify.com.br/pSHVtkC"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#065F46] text-white py-4 px-4 rounded-2xl hover:bg-[#064E3B] transition shadow-xl text-sm sm:text-base font-semibold"
            >
              <BookOpenText className="w-5 h-5" />
              Comprar Ebook
            </a>
          </div>

          {/* Livro físico */}
          <div className="bg-[#FACC15] text-[#064E3B] rounded-3xl p-6 sm:p-8 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="absolute top-4 right-4 bg-[#064E3B] text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full">
                Mais tradicional
              </div>

              <div className="mb-4 pr-28">
                <Book className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Livro físico
              </h2>

              <p className="text-[#064E3B]/80 mb-6 leading-relaxed text-sm sm:text-base">
                Para quem deseja ter a obra impressa, guardar, presentear ou
                colecionar.
              </p>

              <ul className="space-y-3 text-[#064E3B]/90 mb-8 text-sm sm:text-base">
                <li>✅ Exemplar impresso</li>
                <li>✅ Envio para todo o Brasil</li>
                <li>✅ Ideal para presente</li>
              </ul>
            </div>

            <a
              href="https://wa.me/5561991779096?text=Olá,%20quero%20comprar%20o%20livro%20físico%20BEM%20VIVER"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#064E3B] text-white py-4 px-4 rounded-2xl hover:bg-[#065F46] transition shadow-xl text-sm sm:text-base font-semibold"
            >
              <Book className="w-5 h-5" />
              Comprar Livro Físico
            </a>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 text-center">
          <p className="text-gray-200 mb-4 text-sm sm:text-base">
            Ainda está em dúvida sobre qual versão escolher?
          </p>

          <a
            href="https://wa.me/5561991779096?text=Olá%20tenho%20interesse%20no%20livro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white/10 border border-white/30 px-6 sm:px-8 py-4 rounded-2xl hover:bg-white/20 transition text-sm sm:text-base"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}

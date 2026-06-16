import { Book, BookOpenText } from "lucide-react";
export default function BookSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#065F46]/10 text-[#065F46] px-5 py-2 rounded-full mb-6">
            O Livro
          </div>
          <h2 className="text-4xl lg:text-6xl text-[#064E3B] mb-6 max-w-4xl mx-auto leading-tight">
            Mais do que um livro, um convite para viver em harmonia com a
            natureza e a comunidade
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-[#FACC15] via-[#065F46] to-[#064E3B] rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/livro.jpg"
                  alt="Capa do livro BEM VIVER e viver bem"
                  className="w-full max-w-md rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <p className="text-2xl text-[#064E3B] leading-relaxed italic">
              "Uma obra que conecta a sabedoria ancestral dos povos indígenas
              com os desafios contemporâneos da sustentabilidade."
            </p>

            <p className="text-lg text-[#444444] leading-relaxed">
              André Fernando Baniwa compartilha sua jornada e aprendizados sobre
              como podemos viver em harmonia com a natureza e construir
              comunidades mais fortes e resilientes.
            </p>

            <div className="bg-gradient-to-br from-[#065F46]/5 to-[#064E3B]/5 rounded-2xl p-8 space-y-5">
              <h3 className="text-xl text-[#064E3B] mb-4">
                O que você vai encontrar:
              </h3>

              <div className="flex items-start gap-4 group/item">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FACC15] flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 text-[#064E3B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg text-[#444444]">
                  Sabedoria ancestral aplicada ao mundo contemporâneo
                </p>
              </div>

              <div className="flex items-start gap-4 group/item">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FACC15] flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 text-[#064E3B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg text-[#444444]">
                  Perspectivas únicas sobre sustentabilidade e desenvolvimento
                  comunitário
                </p>
              </div>

              <div className="flex items-start gap-4 group/item">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FACC15] flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 text-[#064E3B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg text-[#444444]">
                  Reflexões profundas sobre cultura indígena e identidade
                </p>
              </div>

              <div className="flex items-start gap-4 group/item">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FACC15] flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 text-[#064E3B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg text-[#444444]">
                  Caminhos práticos para viver o "Bem Viver" no dia a dia
                </p>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-green-600 font-semibold mb-4">
                Escolha como deseja acessar o livro
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Ebook */}
                <a
                  href="https://pay.kiwify.com.br/pSHVtkC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#065F46] text-white px-8 py-5 rounded-2xl text-center hover:scale-105 transition shadow-xl"
                >
                  <BookOpenText className="mx-auto mb-2" />
                  Comprar Ebook
                </a>

                {/* Físico */}
                <a
                  href="https://wa.me/5561991779096?text=Olá,%20quero%20comprar%20o%20livro%20físico%20BEM%20VIVER"
                  target="_blank"
                  rel="noopener noreferrer"
                 
                  className="flex-1 bg-[#FACC15] text-[#064E3B] px-8 py-5 rounded-2xl text-center hover:scale-105 transition shadow-xl"
                >
                  <Book className="mx-auto mb-2" />
                  Comprar Livro Físico
                </a>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Ebook: acesso imediato após o pagamento • Livro físico: envio
                para todo o Brasil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

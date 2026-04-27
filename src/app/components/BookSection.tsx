export default function BookSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#065F46]/10 text-[#065F46] px-5 py-2 rounded-full mb-6">
            O Livro
          </div>
          <h2 className="text-4xl lg:text-6xl text-[#064E3B] mb-6 max-w-4xl mx-auto leading-tight">
            Mais do que um livro, um convite para viver em harmonia com a natureza e a comunidade
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-[#FACC15] via-[#065F46] to-[#064E3B] rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/src/imports/SaveClip.App_625046841_18109186198676629_7099890049560644828_n.jpg"
                  alt="Capa do livro BEM VIVER e viver bem"
                  className="w-full max-w-md rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <p className="text-2xl text-[#064E3B] leading-relaxed italic">
              "Uma obra que conecta a sabedoria ancestral dos povos indígenas com os desafios contemporâneos da sustentabilidade."
            </p>

            <p className="text-lg text-[#444444] leading-relaxed">
              André Fernando Baniwa compartilha sua jornada e aprendizados sobre como podemos viver em harmonia com a natureza e construir comunidades mais fortes e resilientes.
            </p>

            <div className="bg-gradient-to-br from-[#065F46]/5 to-[#064E3B]/5 rounded-2xl p-8 space-y-5">
              <h3 className="text-xl text-[#064E3B] mb-4">O que você vai encontrar:</h3>

              <div className="flex items-start gap-4 group/item">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FACC15] flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-[#064E3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-[#444444]">Sabedoria ancestral aplicada ao mundo contemporâneo</p>
              </div>

              <div className="flex items-start gap-4 group/item">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FACC15] flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-[#064E3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-[#444444]">Perspectivas únicas sobre sustentabilidade e desenvolvimento comunitário</p>
              </div>

              <div className="flex items-start gap-4 group/item">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FACC15] flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-[#064E3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-[#444444]">Reflexões profundas sobre cultura indígena e identidade</p>
              </div>

              <div className="flex items-start gap-4 group/item">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FACC15] flex items-center justify-center group-hover/item:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-[#064E3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-[#444444]">Caminhos práticos para viver o "Bem Viver" no dia a dia</p>
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full sm:w-auto bg-[#FACC15] text-[#064E3B] px-12 py-6 rounded-2xl hover:bg-[#fcd34d] transition-all shadow-2xl hover:shadow-[#FACC15]/50 hover:scale-105 transform duration-300 group">
                <span className="flex items-center justify-center gap-3 text-xl">
                  <span>Comprar o livro agora</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Entrega rápida e segura
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

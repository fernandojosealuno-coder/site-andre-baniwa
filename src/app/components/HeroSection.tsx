export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#064E3B] via-[#065F46] to-[#064E3B] text-white py-24 lg:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#FACC15] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#065F46] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#FACC15]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#FACC15]/30">
              <div className="w-2 h-2 bg-[#FACC15] rounded-full animate-pulse"></div>
              <p className="text-[#FACC15] tracking-wide">Povo Baniwa • Sustentabilidade • Bem Viver</p>
            </div>

            <h1 className="text-5xl lg:text-7xl tracking-tight leading-tight">
              Uma voz indígena que conecta sabedoria ancestral com o futuro sustentável
            </h1>

            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
              André Fernando Baniwa - autor, empreendedor social e gestor ambiental comprometido com a transformação pela cultura indígena
            </p>

            <div className="space-y-4 pt-4">
              <button className="w-full sm:w-auto bg-[#FACC15] text-[#064E3B] px-10 py-5 rounded-2xl hover:bg-[#fcd34d] transition-all shadow-2xl hover:shadow-[#FACC15]/50 hover:scale-105 transform duration-300 group">
                <span className="flex items-center justify-center gap-2">
                  <span className="text-lg">Garantir meu exemplar</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
              <p className="text-sm text-gray-300 flex flex-wrap gap-4 items-center">
                <span className="flex items-center gap-2">
                  <span>📦</span> Envio para todo o Brasil
                </span>
                <span className="flex items-center gap-2">
                  <span>💳</span> Pix
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FACC15] to-[#065F46] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl max-w-md w-full transform group-hover:scale-105 transition-transform duration-300">
                <div className="aspect-[3/4] bg-gradient-to-br from-[#065F46] to-[#064E3B] rounded-2xl mb-6 overflow-hidden shadow-xl">
                  <img
                    src="/src/imports/SaveClip.App_625046841_18109186198676629_7099890049560644828_n.jpg"
                    alt="Livro BEM VIVER e viver bem - André Fernando Baniwa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl text-[#064E3B] mb-3">
                  BEM VIVER e viver bem
                </h3>
                <p className="text-[#444444] text-lg mb-6 leading-relaxed">
                  Segundo o povo Baniwa no Noroeste Amazônico Brasileiro
                </p>
                <button className="w-full bg-[#064E3B] text-white py-4 rounded-xl hover:bg-[#065F46] transition-all shadow-lg hover:shadow-xl group/btn">
                  <span className="flex items-center justify-center gap-2">
                    <span>Adquirir agora</span>
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

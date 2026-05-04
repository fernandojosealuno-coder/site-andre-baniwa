export default function SobreSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block bg-[#FACC15]/20 text-[#064E3B] px-5 py-2 rounded-full text-sm sm:text-base">
              Quem sou
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl text-[#064E3B] leading-tight">
              Minha missão é levar o conhecimento ancestral indígena para o
              mundo contemporâneo
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-[#FACC15] to-[#065F46] rounded-full"></div>

            <p className="text-lg sm:text-xl text-[#064E3B] leading-relaxed">
              André Fernando Baniwa - liderança indígena brasileira comprometida
              com a preservação cultural e ambiental.
            </p>

            <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
              Nascido no território Baniwa, na região do Alto Rio Negro (AM),
              dedico minha vida à construção de pontes entre a sabedoria
              ancestral e os desafios contemporâneos. Como gestor ambiental e
              empreendedor social, desenvolvo projetos que promovem o
              desenvolvimento sustentável de comunidades indígenas.
            </p>

            <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
              Minha atuação abrange educação, sustentabilidade, gestão
              territorial e fortalecimento de identidades culturais, impactando
              positivamente centenas de famílias em diferentes regiões do
              Brasil.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6">
              <div className="bg-gradient-to-br from-[#065F46]/10 to-[#064E3B]/5 p-5 sm:p-6 rounded-2xl border border-[#065F46]/20 hover:shadow-xl transition-shadow">
                <p className="text-3xl sm:text-4xl text-[#065F46] mb-2">10+</p>
                <p className="text-[#444444] text-sm sm:text-base">
                  Anos de atuação
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#065F46]/10 to-[#064E3B]/5 p-5 sm:p-6 rounded-2xl border border-[#065F46]/20 hover:shadow-xl transition-shadow">
                <p className="text-3xl sm:text-4xl text-[#065F46] mb-2">500+</p>
                <p className="text-[#444444] text-sm sm:text-base">
                  Famílias impactadas
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#065F46]/10 to-[#064E3B]/5 p-5 sm:p-6 rounded-2xl border border-[#065F46]/20 hover:shadow-xl transition-shadow">
                <p className="text-3xl sm:text-4xl text-[#065F46] mb-2">100+</p>
                <p className="text-[#444444] text-sm sm:text-base">
                  Palestras realizadas
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#065F46] to-[#FACC15] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <img
                src="/andre1.jpg"
                alt="André Baniwa palestrando"
                className="w-full max-h-[560px] object-cover"
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl">
              <p className="text-[#064E3B] italic text-sm sm:text-base">
                "Compartilhando conhecimento e inspirando transformação através
                da cultura indígena"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

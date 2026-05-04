import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#064E3B] to-[#065F46] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-[#FACC15] rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* TEXTO */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl leading-tight">
              Transforme sua forma de ver o mundo através do Bem Viver
            </h2>

            <p className="text-base sm:text-xl lg:text-2xl text-gray-200 leading-relaxed">
              Adquira agora o livro "BEM VIVER e viver bem" e descubra como a
              sabedoria ancestral pode guiar um futuro mais sustentável e
              harmonioso.
            </p>

            <div className="space-y-5 sm:space-y-6">
              {[
                {
                  title: "Entrega rápida para todo Brasil",
                  desc: "Receba em sua casa com total segurança",
                },
                { title: "Formas de pagamento", desc: "Pix" },
                {
                  title: "Apoie a causa indígena",
                  desc: "Parte da renda apoia projetos comunitários",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FACC15] flex items-center justify-center mt-1">
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
                  <div>
                    <h3 className="text-base sm:text-xl mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/comprar" className="block w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#FACC15] text-[#064E3B] px-8 sm:px-12 py-4 sm:py-6 rounded-2xl hover:bg-[#fcd34d] transition-all shadow-2xl hover:scale-105 duration-300 group mt-6 sm:mt-8">
                <span className="flex items-center justify-center gap-3 text-base sm:text-xl">
                  <span>Ver opções de compra</span>
                  <svg
                    className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </Link>

            <p className="text-xs sm:text-sm text-gray-300 flex items-center gap-2">
              🔒 Compra 100% segura e protegida
            </p>
          </div>

          {/* IMAGEM */}
          <div className="relative group">
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-[#FACC15] to-white rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-6 sm:mb-8">
                <img
                  src="/livro.jpg"
                  alt="Livro BEM VIVER e viver bem"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl mb-2 sm:mb-3">
                  BEM VIVER e viver bem
                </h3>
                <p className="text-gray-200 text-base sm:text-lg mb-4 sm:mb-6">
                  André Fernando Baniwa
                </p>

                <Link to="/comprar">
                  <button className="w-full bg-white text-[#064E3B] py-3 sm:py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg">
                    <span className="flex items-center justify-center gap-2 text-sm sm:text-lg">
                      Comprar agora
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

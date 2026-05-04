import { Link } from "react-router-dom";
export default function CTASection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-[#064E3B] to-[#065F46] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FACC15] rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl leading-tight">
              Transforme sua forma de ver o mundo através do Bem Viver
            </h2>

            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
              Adquira agora o livro "BEM VIVER e viver bem" e descubra como a
              sabedoria ancestral pode guiar um futuro mais sustentável e
              harmonioso.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
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
                  <h3 className="text-xl mb-2">
                    Entrega rápida para todo Brasil
                  </h3>
                  <p className="text-gray-300">
                    Receba em sua casa com total segurança
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
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
                  <h3 className="text-xl mb-2">Formas de pagamento</h3>
                  <p className="text-gray-300">Pix</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
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
                  <h3 className="text-xl mb-2">Apoie a causa indígena</h3>
                  <p className="text-gray-300">
                    Parte da renda apoia projetos comunitários
                  </p>
                </div>
              </div>
            </div>
            <Link to= "/comprar">
            <button className="w-full sm:w-auto bg-[#FACC15] text-[#064E3B] px-12 py-6 rounded-2xl hover:bg-[#fcd34d] transition-all shadow-2xl hover:shadow-[#FACC15]/50 hover:scale-105 transform duration-300 group mt-8">
              <span className="flex items-center justify-center gap-3 text-xl">
                <span>Ver opções de compra</span>
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform"
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
            <p className="text-sm text-gray-300 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#FACC15]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Compra 100% segura e protegida
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-r from-[#FACC15] to-white rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 shadow-2xl">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img
                  src="/livro.jpg"
                  alt="Livro BEM VIVER e viver bem"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center">
                <h3 className="text-3xl mb-3">BEM VIVER e viver bem</h3>
                <p className="text-gray-200 text-lg mb-6">
                  André Fernando Baniwa
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <svg className="w-6 h-6 fill-[#FACC15]" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-6 h-6 fill-[#FACC15]" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-6 h-6 fill-[#FACC15]" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-6 h-6 fill-[#FACC15]" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-6 h-6 fill-[#FACC15]" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300">
                    Leitura transformadora e essencial
                  </p>
                </div>
                <Link to="/comprar">
                <button className="w-full bg-white text-[#064E3B] py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl group/btn">
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-lg">Comprar agora</span>
                    <svg
                      className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
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

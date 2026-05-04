import { Link } from "react-router-dom";
export default function TestimonialSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-[#065F46]/5 via-white to-[#FACC15]/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FACC15] to-[#065F46] rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/andrelivro.jpg"
                alt="André Baniwa apresentando o livro BEM VIVER e viver bem"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-block bg-[#FACC15]/20 text-[#064E3B] px-5 py-2 rounded-full">
              O que dizem
            </div>

            <div className="space-y-6">
              <svg className="w-16 h-16 text-[#FACC15]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <h3 className="text-3xl lg:text-5xl text-[#064E3B] leading-tight">
                Uma leitura que transforma a forma de ver o mundo
              </h3>

              <p className="text-xl text-[#444444] leading-relaxed">
                Este livro é mais do que uma obra literária - é um encontro com uma nova perspectiva de vida. Através das páginas, André nos convida a repensar nossa relação com a natureza, com as comunidades e com nós mesmos.
              </p>

              <div className="bg-gradient-to-br from-[#065F46]/10 to-[#064E3B]/5 p-8 rounded-2xl border-l-4 border-[#FACC15]">
                <p className="text-lg text-[#444444] italic mb-4">
                  "A sabedoria do povo Baniwa oferece respostas urgentes para os desafios do nosso tempo. Este livro é essencial para quem busca um caminho mais sustentável e harmonioso."
                </p>
                <div className="flex items-center gap-2 text-[#065F46]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <Link to="/comprar">
              <button className="bg-[#FACC15] text-[#064E3B] px-10 py-5 rounded-2xl hover:bg-[#fcd34d] transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300 group">
                <span className="flex items-center gap-3 text-lg">
                  <span>Quero meu exemplar</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

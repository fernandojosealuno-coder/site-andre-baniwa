import { Leaf, Users, Presentation } from 'lucide-react';

export default function WorkSection() {
  const cards = [
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Desenvolvimento de projetos que integram preservação ambiental com desenvolvimento econômico sustentável para comunidades indígenas.',
      color: '#065F46',
      gradient: 'from-[#065F46]/10 to-[#065F46]/5'
    },
    {
      icon: Users,
      title: 'Povos indígenas',
      description: 'Fortalecimento de identidades culturais, promoção de autonomia e defesa dos direitos dos povos originários em todo o Brasil.',
      color: '#064E3B',
      gradient: 'from-[#064E3B]/10 to-[#064E3B]/5'
    },
    {
      icon: Presentation,
      title: 'Educação e palestras',
      description: 'Compartilhamento de conhecimentos sobre bem viver, sustentabilidade e cultura indígena através de palestras e formações.',
      color: '#FACC15',
      gradient: 'from-[#FACC15]/20 to-[#FACC15]/5'
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block bg-[#065F46]/10 text-[#065F46] px-5 py-2 rounded-full mb-6">
            Áreas de atuação
          </div>
          <h2 className="text-4xl lg:text-6xl text-[#064E3B] mb-6 leading-tight">
            Três pilares para transformação
          </h2>
          <p className="text-xl text-[#444444] max-w-3xl mx-auto leading-relaxed">
            Meu trabalho se concentra em áreas fundamentais que conectam tradição, natureza e futuro sustentável
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#065F46] via-[#FACC15] to-[#064E3B] rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                <div className={`relative bg-gradient-to-br ${card.gradient} border border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full`}>
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg"
                    style={{ backgroundColor: card.color }}
                  >
                    <Icon
                      className="w-10 h-10 text-white"
                    />
                  </div>

                  <h3
                    className="text-2xl lg:text-3xl mb-4"
                    style={{ color: card.color }}
                  >
                    {card.title}
                  </h3>

                  <div className="h-1 w-16 rounded-full mb-6" style={{ backgroundColor: card.color }}></div>

                  <p className="text-[#444444] text-lg leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#065F46]/5 via-[#FACC15]/10 to-[#064E3B]/5 rounded-3xl p-12 border border-[#065F46]/20">
            <h3 className="text-2xl lg:text-3xl text-[#064E3B] mb-6">
              Leve essa mensagem para sua organização
            </h3>
            <p className="text-lg text-[#444444] mb-8 max-w-2xl mx-auto">
              Palestras e workshops sobre sustentabilidade, cultura indígena e desenvolvimento comunitário
            </p>
            <button className="bg-[#064E3B] text-white px-10 py-5 rounded-2xl hover:bg-[#065F46] transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300 group">
              <span className="flex items-center gap-3 text-lg">
                <span>Solicitar palestra</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

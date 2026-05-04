import { MessageCircle, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-[#064E3B] via-[#065F46] to-[#064E3B] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FACC15] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#065F46] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FACC15]/20 backdrop-blur-sm text-[#FACC15] px-5 py-2 rounded-full mb-6 border border-[#FACC15]/30">
            Contato
          </div>

          <h2 className="text-4xl lg:text-6xl mb-8 leading-tight">
            Quer adquirir o livro ou levar essa mensagem para mais pessoas?
          </h2>

          <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Entre em contato para adquirir o livro, agendar palestras,
            consultorias ou conhecer projetos de impacto social
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <a
            href="https://wa.me/5561991779096"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute -inset-1 bg-[#FACC15] rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-[#FACC15] text-[#064E3B] px-8 py-6 rounded-2xl hover:bg-[#fcd34d] transition-all shadow-2xl flex items-center justify-center gap-4">
              <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-sm opacity-80">Converse comigo</p>
                <p className="text-xl">WhatsApp</p>
              </div>
            </div>
          </a>

          <a
            href="https://www.instagram.com/andrebaniwa"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute -inset-1 bg-white/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-6 rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-7 h-7 group-hover:scale-110 transition-transform"
              />

              <div className="text-left">
                <p className="text-sm opacity-80">Acompanhe no</p>
                <p className="text-xl">Instagram</p>
              </div>
            </div>
          </a>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 mb-16">
          <h3 className="text-2xl mb-6 text-center">
            Outras formas de contato
          </h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FACC15]/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#FACC15]" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <p className="text-lg">contato@andrebaniwa.com.br</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FACC15]/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#FACC15]" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Telefone</p>
                <p className="text-lg">+55 (61) 99177-9096</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block mb-8">
            <img
              src="/andre1.jpg"
              alt="André Baniwa"
              className="w-24 h-24 rounded-full border-4 border-[#FACC15]/30 shadow-2xl object-cover"
            />
          </div>
          <p className="text-gray-300 text-lg mb-2">André Fernando Baniwa</p>
          <p className="text-gray-400">
            Autor, Empreendedor Social e Gestor Ambiental
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-300">
            © 2026 André Fernando Baniwa Hipattairi. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </section>
  );
}

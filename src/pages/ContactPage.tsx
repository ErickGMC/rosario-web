import { useState } from 'react';
import { Mail, Send, CheckCircle, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setTimeout(() => {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      }, 500);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="bg-white/95 border-2 border-amber-300 p-8 rounded-3xl wobbly-bubble-1 shadow-[8px_12px_0px_0px_rgba(30,58,138,0.1)] mb-12 text-center max-w-2xl mx-auto animate-cozy-float relative">
        <div className="absolute -top-3 -right-3 text-amber-400 animate-magic">
          <Sparkles size={36} />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 flex items-center justify-center gap-3">
          <Mail className="text-amber-500" size={32} />
          ¿Charlamos?
        </h1>
        <p className="mt-3 text-blue-800 text-sm font-medium">
          ¡Escribime, no te quedes con la duda! Si querés armar algo copado juntos, mandame un mensaje.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto items-stretch">
        {/* Info Box */}
        <div className="bg-white/90 border-2 border-amber-300 p-6 md:p-8 rounded-3xl wobbly-bubble-2 shadow-[4px_6px_0px_0px_rgba(30,58,138,0.1)] flex flex-col justify-center gap-6 animate-cozy-float-slow">
          <h2 className="text-2xl font-extrabold text-blue-900">
            ¡Hagamos magia!
          </h2>
          <p className="text-blue-800 text-sm leading-relaxed font-medium">
            Posta, me encanta compartir ideas, planificaciones o resolver dudas. Si querés conectar para hacer proyectos re copados o simplemente saludar, este es el lugar.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="p-3 bg-amber-100 text-amber-600 rounded-2xl border-2 border-amber-300 shadow-[2px_2px_0px_0px_rgba(251,191,36,0.5)]">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs text-blue-600 font-mono font-bold uppercase tracking-wider">Mi correo</p>
              <a href="mailto:hola@missrosi.com" className="text-sm font-semibold hover:underline text-blue-900 break-all">
                hola@missrosi.com
              </a>
            </div>
          </div>
        </div>

        {/* Form Box */}
        <div className="bg-white/90 border-2 border-amber-300 p-6 md:p-8 rounded-3xl wobbly-bubble-3 shadow-[4px_6px_0px_0px_rgba(30,58,138,0.1)] animate-cozy-float">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <CheckCircle className="text-green-500 animate-bounce" size={48} />
              <h3 className="text-xl font-bold text-blue-900">¡Mensaje re copado enviado!</h3>
              <p className="text-blue-700 text-xs max-w-xs font-medium">
                Gracias por escribirme. Te respondo apenas termine de planificar la clase. ✨
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-4 py-2 text-xs font-bold text-amber-600 hover:underline cursor-pointer"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 font-mono">
                  Nombre
                </label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-blue-50/50 border-2 border-amber-200 px-4 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-medium text-blue-900" 
                  placeholder="Tu nombre (¡sin timidez!)"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 font-mono">
                  Correo Electrónico
                </label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-blue-50/50 border-2 border-amber-200 px-4 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-medium text-blue-900" 
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 font-mono">
                  Mensaje
                </label>
                <textarea 
                  id="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-blue-50/50 border-2 border-amber-200 px-4 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 font-medium text-blue-900" 
                  placeholder="¡Hola! Te escribo porque..."
                />
              </div>
              <button 
                type="submit"
                className="w-full flex justify-center items-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-blue-900 rounded-2xl font-extrabold border-2 border-amber-500 shadow-[3px_4px_0px_0px_rgba(30,58,138,0.2)] hover:translate-y-0.5 active:translate-y-1 active:shadow-[1px_2px_0px_0px_rgba(30,58,138,0.2)] transition-all cursor-pointer"
              >
                <Send size={16} />
                <span>Mandar Mensaje</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

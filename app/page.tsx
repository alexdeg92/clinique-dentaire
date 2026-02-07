"use client";

import Image from "next/image";
import { useState } from "react";

/* ─── NAV ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#apropos", label: "À propos" },
    { href: "#equipe", label: "Équipe" },
    { href: "#rendez-vous", label: "Rendez-vous" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <div>
              <span className="text-lg font-bold text-gray-900 leading-tight block">Clinique Dentaire</span>
              <span className="text-xs text-cyan-600 font-medium tracking-wide">des Laurentides</span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-cyan-600 transition-colors">{l.label}</a>
            ))}
            <a href="#rendez-vous" className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5">
              Prendre RDV
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-gray-700 hover:text-cyan-600">{l.label}</a>
          ))}
          <a href="#rendez-vous" onClick={() => setOpen(false)} className="block text-center bg-cyan-600 text-white py-2.5 rounded-full font-semibold mt-2">Prendre RDV</a>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-teal-50" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-200/20 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            Accepte de nouveaux patients
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
            Votre sourire,{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">notre passion</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            Des soins dentaires d&apos;excellence dans un environnement chaleureux et moderne. Votre confort est notre priorité depuis plus de 15 ans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#rendez-vous" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Prendre rendez-vous
            </a>
            <a href="tel:5147089087" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-cyan-300 hover:text-cyan-700 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (514) 708-9087
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-500">Années d&apos;expérience</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">5000+</div>
              <div className="text-sm text-gray-500">Patients satisfaits</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4.9★</div>
              <div className="text-sm text-gray-500">Google Reviews</div>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=900&fit=crop" alt="Clinique dentaire moderne" width={800} height={900} className="w-full h-[600px] object-cover" unoptimized />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">Rendez-vous confirmé</div>
              <div className="text-xs text-gray-500">Dr. Martin — 14h30</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
function Services() {
  const services = [
    { icon: "🦷", title: "Examen & Nettoyage", desc: "Examens complets, radiographies numériques et nettoyage professionnel pour maintenir une santé buccodentaire optimale.", price: "À partir de 85$" },
    { icon: "✨", title: "Blanchiment dentaire", desc: "Retrouvez un sourire éclatant grâce à nos traitements de blanchiment professionnels en cabinet ou à domicile.", price: "À partir de 350$" },
    { icon: "🔧", title: "Couronnes & Ponts", desc: "Restaurations sur mesure fabriquées avec des matériaux de haute qualité pour un résultat naturel et durable.", price: "Sur évaluation" },
    { icon: "😁", title: "Orthodontie", desc: "Alignement dentaire avec gouttières transparentes Invisalign® ou appareils traditionnels pour tous les âges.", price: "Consultation gratuite" },
    { icon: "🏥", title: "Urgences dentaires", desc: "Service d'urgence disponible pour les douleurs aiguës, fractures et autres situations urgentes.", price: "Sans rendez-vous" },
    { icon: "💎", title: "Facettes en porcelaine", desc: "Transformez votre sourire avec des facettes ultra-minces pour un résultat naturel et harmonieux.", price: "À partir de 900$" },
  ];
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm tracking-widest uppercase">Nos services</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">Des soins complets pour <span className="text-cyan-600">toute la famille</span></h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Nous offrons une gamme complète de services dentaires avec les technologies les plus avancées.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group p-8 rounded-2xl border border-gray-100 hover:border-cyan-200 bg-white hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 mb-4 leading-relaxed">{s.desc}</p>
              <div className="text-cyan-600 font-semibold text-sm">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  return (
    <section id="apropos" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop" alt="Salle de soins moderne" width={800} height={600} className="w-full h-[450px] object-cover" unoptimized />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden lg:block">
            <Image src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300&h=300&fit=crop" alt="Équipement dentaire" width={300} height={300} className="w-full h-full object-cover" unoptimized />
          </div>
        </div>
        <div>
          <span className="text-cyan-600 font-semibold text-sm tracking-widest uppercase">À propos de nous</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">Une clinique à la fine pointe de la <span className="text-cyan-600">technologie</span></h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Fondée en 2009, la Clinique Dentaire des Laurentides s&apos;engage à fournir des soins dentaires exceptionnels dans un environnement accueillant et moderne. Notre équipe de professionnels passionnés met tout en œuvre pour que chaque visite soit une expérience agréable.
          </p>
          <div className="mt-8 space-y-4">
            {["Équipements numériques de dernière génération", "Stérilisation aux normes les plus strictes", "Approche douce et personnalisée", "Plans de paiement flexibles disponibles"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <a href="#rendez-vous" className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5">
            Découvrir notre clinique
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── TEAM ─── */
function Team() {
  const members = [
    { name: "Dre. Sophie Martin", role: "Dentiste généraliste", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face", desc: "15 ans d'expérience en dentisterie familiale et esthétique." },
    { name: "Dr. Jean-Philippe Côté", role: "Orthodontiste", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face", desc: "Spécialiste Invisalign® certifié Platine." },
    { name: "Dre. Marie-Ève Tremblay", role: "Parodontiste", img: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&h=400&fit=crop&crop=face", desc: "Experte en traitement des gencives et implants dentaires." },
  ];
  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm tracking-widest uppercase">Notre équipe</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">Des professionnels <span className="text-cyan-600">dévoués</span></h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Une équipe expérimentée et chaleureuse à votre service.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {members.map((m) => (
            <div key={m.name} className="group text-center">
              <div className="relative w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-cyan-100 group-hover:ring-cyan-300 transition-all">
                <Image src={m.img} alt={m.name} width={400} height={400} className="w-full h-full object-cover" unoptimized />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{m.name}</h3>
              <p className="text-cyan-600 font-medium mb-2">{m.role}</p>
              <p className="text-gray-500 text-sm max-w-xs mx-auto">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── APPOINTMENT ─── */
function Appointment() {
  return (
    <section id="rendez-vous" className="py-24 bg-gradient-to-br from-cyan-600 via-cyan-700 to-teal-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-white">
          <span className="text-cyan-200 font-semibold text-sm tracking-widest uppercase">Rendez-vous</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">Prenez rendez-vous en quelques clics</h2>
          <p className="mt-6 text-lg text-cyan-100 leading-relaxed">
            Réservez votre prochain rendez-vous en ligne, par téléphone ou par courriel. Notre équipe vous répondra dans les plus brefs délais.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <div className="font-semibold">(514) 708-9087</div>
                <div className="text-cyan-200 text-sm">Lun-Ven 8h-17h</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <div className="font-semibold">alex@perroquet.io</div>
                <div className="text-cyan-200 text-sm">Réponse en 24h</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Demande de rendez-vous</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition" placeholder="Jean" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition" placeholder="Tremblay" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Courriel</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition" placeholder="jean@exemple.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition" placeholder="(514) 555-1234" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service souhaité</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition text-gray-500">
                <option>Examen & Nettoyage</option>
                <option>Blanchiment dentaire</option>
                <option>Couronnes & Ponts</option>
                <option>Orthodontie / Invisalign</option>
                <option>Urgence dentaire</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message (optionnel)</label>
              <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition resize-none" placeholder="Décrivez brièvement votre besoin..." />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5">
              Envoyer la demande
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  const reviews = [
    { name: "Marie-Claude L.", text: "Un service exceptionnel! L'équipe est attentionnée et les locaux sont magnifiques. Je recommande à 100%.", stars: 5 },
    { name: "Patrick B.", text: "Dre. Martin est incroyable. J'avais peur du dentiste depuis des années, mais elle m'a mis en confiance dès la première visite.", stars: 5 },
    { name: "Isabelle R.", text: "Mon blanchiment s'est super bien passé. Résultat impressionnant! Merci à toute l'équipe.", stars: 5 },
  ];
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm tracking-widest uppercase">Témoignages</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">Ce que disent <span className="text-cyan-600">nos patients</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
              <div className="font-semibold text-gray-900">{r.name}</div>
              <div className="text-sm text-gray-400">Patient(e) vérifié(e)</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT / MAP ─── */
function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm tracking-widest uppercase">Contact</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">Nous <span className="text-cyan-600">trouver</span></h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { icon: "📍", title: "Adresse", lines: ["1234, boul. du Curé-Labelle", "Blainville, QC J7C 2P2"] },
            { icon: "🕐", title: "Heures d'ouverture", lines: ["Lundi - Vendredi: 8h - 17h", "Samedi: 9h - 14h", "Dimanche: Fermé"] },
            { icon: "📞", title: "Coordonnées", lines: ["(514) 708-9087", "alex@perroquet.io"] },
          ].map((c) => (
            <div key={c.title} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-cyan-50 transition-colors">
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">{c.title}</h3>
              {c.lines.map((line) => (
                <p key={line} className="text-gray-600">{line}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44654.95839285104!2d-73.89!3d45.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc922b5e7329091%3A0x5043e7e58d3e0a0!2sBlainville%2C%20QC!5e0!3m2!1sfr!2sca!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation de la clinique"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <span className="text-xl font-bold text-white">Clinique Dentaire des Laurentides</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Des soins dentaires d&apos;excellence pour toute la famille dans un environnement moderne et chaleureux à Blainville.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {["Services", "À propos", "Équipe", "Rendez-vous", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase().replace("à propos","apropos").replace("é","e").replace(" ","-")}`} className="hover:text-cyan-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Heures</h4>
            <ul className="space-y-2 text-sm">
              <li>Lun-Ven: 8h - 17h</li>
              <li>Samedi: 9h - 14h</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; 2025 Clinique Dentaire des Laurentides. Tous droits réservés.</p>
          <p className="text-sm">Conçu par <a href="mailto:alex@perroquet.io" className="text-cyan-400 hover:text-cyan-300">Perroquet.io</a></p>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer />
    </main>
  );
}

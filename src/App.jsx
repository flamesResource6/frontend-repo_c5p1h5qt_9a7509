import React from 'react'
import Spline from '@splinetool/react-spline'
import { Wrench, BatteryCharging, KeyRound, Fuel, LifeBuoy, Clock, MapPin, Phone, ShieldCheck, ArrowRight, Star } from 'lucide-react'

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold tracking-tight text-gray-900">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  )
}

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/60 group-hover:to-indigo-50/40 transition-colors"></div>
      <div className="relative">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center shadow-md">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 rounded-2xl border border-white/30 bg-white/70 backdrop-blur-xl shadow-lg">
            <div className="flex items-center justify-between px-6 py-4">
              <a href="#" className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white font-bold">A</div>
                <div className="leading-tight">
                  <p className="text-sm uppercase tracking-widest text-blue-700">AVA AUTOLINE</p>
                  <p className="text-xs text-gray-600">Roadside Emergency Care</p>
                </div>
              </a>

              <nav className="hidden md:flex items-center gap-8">
                <a href="#services" className="text-sm text-gray-700 hover:text-blue-700 transition">Services</a>
                <a href="#coverage" className="text-sm text-gray-700 hover:text-blue-700 transition">Coverage</a>
                <a href="#why-us" className="text-sm text-gray-700 hover:text-blue-700 transition">Why Us</a>
                <a href="#contact" className="text-sm text-gray-700 hover:text-blue-700 transition">Contact</a>
              </nav>

              <div className="hidden md:flex items-center gap-3">
                <div className="hidden lg:flex items-center text-sm text-gray-600 mr-2">
                  <MapPin className="h-4 w-4 text-blue-600 mr-1" /> Jacksonville, FL
                </div>
                <a href="tel:+19045551234" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700 transition">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>

              <div className="md:hidden">
                <a href="tel:+19045551234" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700 transition">
                  <Phone className="h-4 w-4" /> Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <section className="relative min-h-[88vh] flex items-center" id="hero">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/dRBdpY8aSqcdPO2y/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-white pointer-events-none"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center pt-36 pb-20">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-blue-700 shadow-sm">
                <MapPin className="h-3.5 w-3.5" /> Jacksonville’s on-demand roadside help
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                Fast roadside assistance when you need it most
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-700 max-w-2xl">
                Dead battery? Locked out? Flat tire? AVA Autoline gets you back on the road quickly anywhere in Jacksonville, Florida.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="tel:+19045551234" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 transition">
                  <Phone className="h-5 w-5" /> Call 24/7 Dispatch
                </a>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-blue-700 font-semibold shadow-sm ring-1 ring-blue-200 hover:bg-blue-50 transition">
                  Explore Services <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 sm:grid-cols-3 gap-6 max-w-lg">
                <Stat value="15-45 min" label="Typical ETA" />
                <Stat value="4.9/5" label="Customer Rating" />
                <Stat value="24/7" label="Year-Round Support" />
              </div>
            </div>

            <div className="lg:col-span-5 mt-6 lg:mt-0">
              <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white/30 p-5 shadow-lg">
                <div className="flex items-center gap-2 text-sm text-gray-600"><LifeBuoy className="h-4 w-4 text-blue-600" /> Instant help request</div>
                <form className="mt-4 grid grid-cols-1 gap-3">
                  <input className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200" placeholder="Your name" />
                  <input className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200" placeholder="Phone number" />
                  <input className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200" placeholder="Location (Jacksonville area)" />
                  <select className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200">
                    <option>Dead battery / Jump start</option>
                    <option>Locked out</option>
                    <option>Flat tire</option>
                    <option>Out of fuel / Fuel delivery</option>
                    <option>Other roadside issue</option>
                  </select>
                  <button type="button" className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 transition">
                    Request Callback
                  </button>
                  <p className="text-xs text-gray-500">Submitting this form will prompt a direct call from our dispatcher.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Emergency roadside services</h2>
            <p className="mt-3 text-gray-600">Professional help for the unexpected, delivered fast with care.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard icon={BatteryCharging} title="Jump starts" description="Quick, safe battery boosts to get you moving again." />
            <ServiceCard icon={KeyRound} title="Car lockout" description="Locked keys inside? We unlock vehicles damage-free." />
            <ServiceCard icon={Wrench} title="Flat tire change" description="Spare tire installs and tire assistance roadside." />
            <ServiceCard icon={Fuel} title="Fuel delivery" description="Ran out of gas? We deliver fuel to your location." />
            <ServiceCard icon={Clock} title="Emergency towing" description="Coordinated towing when roadside repair isn’t possible." />
            <ServiceCard icon={ShieldCheck} title="Safety check" description="We ensure you’re safe and ready before you drive off." />
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700">
                <MapPin className="h-3.5 w-3.5" /> Service Area
              </div>
              <h3 className="mt-4 text-3xl font-extrabold tracking-tight">Jacksonville, Florida coverage</h3>
              <p className="mt-3 text-gray-600">From Downtown to the Beaches, Southside to Northside, we’ve got the Jacksonville metro covered including surrounding communities.</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div> Downtown & Riverside</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div> Southside & St. Johns</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div> Northside & Airport</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div> Jax Beach, Neptune, Atlantic</li>
              </ul>
            </div>
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl border border-white/30 bg-white p-3 shadow-lg">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-xl">
                  <img alt="Jacksonville skyline" src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=1400&auto=format&fit=crop" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-20 bg-gradient-to-b from-blue-50/60 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Why choose AVA Autoline</h3>
            <p className="mt-3 text-gray-600">Trusted locally, focused on safety, and ready around the clock.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-white p-6 border border-white/30 shadow-sm">
              <div className="text-blue-600 font-semibold">Rapid response</div>
              <p className="mt-2 text-sm text-gray-600">Average arrival in 15–45 minutes depending on location and traffic.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-white/30 shadow-sm">
              <div className="text-blue-600 font-semibold">Certified techs</div>
              <p className="mt-2 text-sm text-gray-600">Experienced professionals with the right tools for modern vehicles.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-white/30 shadow-sm">
              <div className="text-blue-600 font-semibold">Upfront pricing</div>
              <p className="mt-2 text-sm text-gray-600">Clear quotes before service begins—no surprises.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-white/30 shadow-sm">
              <div className="text-blue-600 font-semibold">Safety first</div>
              <p className="mt-2 text-sm text-gray-600">We prioritize you and your vehicle’s safety at every step.</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Star className="h-5 w-5 text-yellow-500" /> 4.9 average rating
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-300" />
            <div className="flex items-center gap-2 text-gray-700">
              <ShieldCheck className="h-5 w-5 text-blue-600" /> Licensed & insured
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-blue-600 to-indigo-600 p-8 sm:p-12 text-white">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Stuck on the road? We’re one call away.</h3>
                <p className="mt-3 text-white/90">Direct line to our dispatcher, 24 hours a day across Jacksonville.</p>
              </div>
              <div className="lg:col-span-4">
                <a href="tel:+19045551234" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-blue-700 font-semibold shadow-sm hover:bg-blue-50 transition">
                  <Phone className="h-5 w-5" /> Call +1 (904) 555-1234
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white font-bold">A</div>
              <span>AVA Autoline • Jacksonville, Florida</span>
            </div>
            <div className="flex items-center gap-4">
              <a className="hover:text-blue-700" href="#services">Services</a>
              <a className="hover:text-blue-700" href="#coverage">Coverage</a>
              <a className="hover:text-blue-700" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

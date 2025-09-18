import { useState } from "react";
import { Shield, Globe2, Clock, MessageCircle, Users2, Zap, CheckCircle2, Lock, FileText, CreditCard, ChevronDown, ChevronUp } from "lucide-react";

export default function LandingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const faqs = [
    {
      q: "Who is this for?",
      a: "Verified luxury watch dealers, traders, and brokers looking to access daily deal flow and a trusted global network.",
    },
    {
      q: "How fast is access?",
      a: "Instant. Once approved and payment in USDT is confirmed, you receive invites to the selected WhatsApp groups immediately.",
    },
    {
      q: "What do I need to join?",
      a: "Company documents, personal identification of the director, and one or more references from existing members. If you're new, we can help verify that your company is active and you are a reliable dealer.",
    },
    {
      q: "What's included in the fee?",
      a: "12 months access to curated WhatsApp groups, 24/7/365 deal flow, member support, and entry to the largest community for verified luxury watch dealers (est. 2018).",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/80 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <Shield className="h-6 w-6" />
            <span>Watch Dealer Group</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#benefits" className="hover:opacity-80">Benefits</a>
            <a href="#pricing" className="hover:opacity-80">Pricing</a>
            <a href="#requirements" className="hover:opacity-80">Requirements</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
          </nav>
          <a href="#apply" className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-4 py-2 text-sm font-semibold hover:bg-white/90">Apply Now <Zap className="h-4 w-4" /></a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-green-400/90">
                Established 2018 <span className="h-1 w-1 rounded-full bg-green-400 inline-block" /> Verified Network
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Are you a watch dealer?
                <span className="block text-green-400">Join the largest watch communities of verified dealers.</span>
              </h1>
              <p className="mt-6 text-neutral-300 text-lg max-w-xl">
                Access thousands of trusted dealers worldwide with daily deals 24/7/365 across Rolex, Patek, AP, and Richard Mille. Instant access once verified. USDT only.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#pricing" className="rounded-2xl bg-green-500 text-neutral-900 px-5 py-3 font-semibold hover:bg-green-400">View Pricing</a>
                <a href="#benefits" className="rounded-2xl ring-1 ring-white/15 px-5 py-3 font-semibold hover:bg-white/5">See Benefits</a>
              </div>
              <ul className="mt-8 grid sm:grid-cols-3 gap-4 text-sm text-neutral-300">
                <li className="flex items-center gap-2"><Globe2 className="h-4 w-4" /> Global network</li>
                <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> 24/7/365 deal flow</li>
                <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Moderated chats</li>
              </ul>
            </div>
            <div className="lg:pl-8">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 shadow-2xl">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "Rolex", stat: "500+ daily", sub: "Listings" },
                    { label: "AP & Patek", stat: "200+ daily", sub: "Listings" },
                    { label: "RM & Others", stat: "100+ daily", sub: "Listings" },
                    { label: "Countries", stat: "40+", sub: "Active" },
                  ].map((c) => (
                    <div key={c.label} className="rounded-2xl bg-white/5 p-4">
                      <p className="text-sm text-neutral-300">{c.label}</p>
                      <p className="text-2xl font-bold">{c.stat}</p>
                      <p className="text-xs text-neutral-400">{c.sub}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-neutral-400">*Illustrative volumes. Actual deal flow varies by season and market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Users2,
              title: "Access to industry professionals",
              desc: "Connect with 1000s of vetted dealers, traders, and suppliers worldwide.",
            },
            {
              icon: Shield,
              title: "Safe & secure transactions",
              desc: "Buying & selling chats are monitored by experienced admins.",
            },
            {
              icon: MessageCircle,
              title: "Customized advice & support",
              desc: "Get guidance from senior members and ongoing support from the team.",
            },
            {
              icon: Zap,
              title: "Instant access after approval",
              desc: "Onboarding is streamlined so you can start trading immediately.",
            },
            {
              icon: Globe2,
              title: "Latest market news",
              desc: "Discover pricing trends and hot opportunities in real time.",
            },
            {
              icon: Lock,
              title: "Exclusive & limited",
              desc: "Established in 2018 with limited places to preserve quality.",
            },
          ].map((b) => (
            <div key={b.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <b.icon className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-neutral-300 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white/5 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold">Yearly Access Pricing</h2>
            <p className="mt-3 text-neutral-300">USDT payments only · Instant access after verification</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[{
              name: "10 WhatsApp Groups",
              price: "$1,000",
              features: [
                "Instant access (after approval)",
                "Buying & selling chats",
                "Monitored for safety",
                "24/7/365 global deal flow",
              ],
            }, {
              name: "16 WhatsApp Groups",
              price: "$1,450",
              features: [
                "Everything in 10 Groups",
                "Priority onboarding",
                "Early access to new groups",
                "Partner perks & invites",
              ],
            }].map((p, i) => (
              <div key={p.name} className={`rounded-3xl p-6 border ${i===1? 'border-green-400/40 bg-green-500/5' : 'border-white/10 bg-neutral-900'}`}>
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-2 text-4xl font-extrabold">{p.price}<span className="text-base font-medium text-neutral-400"> / year</span></p>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> {f}</li>
                  ))}
                </ul>
                <a href="#apply" className={`mt-6 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 font-semibold ${i===1 ? 'bg-green-500 text-neutral-900 hover:bg-green-400' : 'ring-1 ring-white/15 hover:bg-white/5'}`}>Apply & Pay in USDT</a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-neutral-400">Access to Rolex, Patek Philippe, Audemars Piguet, and Richard Mille deal flow. *Memberships are non-transferable and subject to approval and rules of conduct.*</p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="mt-4 text-neutral-300">
              Our mission is to ensure the highest quality and transparency in the watch market by providing a reliable platform for buyers and sellers. Buying and selling chats are carefully monitored to ensure safe and secure transactions. Join us to navigate the world of watches with confidence and security!
            </p>
          </div>
          <div id="requirements" className="rounded-3xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-2xl font-bold">Requirements to Join</h3>
            <ul className="mt-4 space-y-3 text-neutral-300">
              <li className="flex items-start gap-3"><FileText className="h-5 w-5 mt-0.5" /> Company documents</li>
              <li className="flex items-start gap-3"><Lock className="h-5 w-5 mt-0.5" /> Personal identification of the director involved in the business</li>
              <li className="flex items-start gap-3"><Users2 className="h-5 w-5 mt-0.5" /> One or more references from existing members in the chat</li>
            </ul>
            <p className="mt-4 text-sm text-neutral-300">
              Alternatively, if you're just starting out, we can help verify that your company is active and that you are a reliable dealer.
            </p>
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="bg-gradient-to-b from-neutral-900 to-neutral-950 border-t border-white/10">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h3 className="text-3xl font-extrabold">Ready to join Watch Dealer Group?</h3>
          <p className="mt-3 text-neutral-300">Limited places · USDT only · Instant access after verification</p>
          <div className="mt-8 grid gap-4">
            <a href="https://wa.me/3197010280548?text=Hello%2C%20I%20would%20like%20to%20apply%20for%20Watch%20Dealer%20Group%20membership.%20Please%20provide%20USDT%20payment%20details%20and%20let%20me%20know%20what%20documents%20are%20needed." className="rounded-2xl bg-green-500 text-neutral-900 px-6 py-4 font-semibold hover:bg-green-400 inline-flex items-center justify-center gap-2 mx-auto w-full">
              <CreditCard className="h-5 w-5" /> Apply via WhatsApp & Receive USDT Address
            </a>
            <p className="text-xs text-neutral-400">Direct WhatsApp contact: +31 97010280548 for immediate assistance.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
        <div className="space-y-3">
          {faqs.map((f, idx) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5">
              <button onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)} className="w-full flex items-center justify-between px-4 py-4 text-left">
                <span className="font-semibold">{f.q}</span>
                {openFAQ === idx ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {openFAQ === idx && (
                <div className="px-4 pb-4 text-neutral-300 text-sm">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Watch Dealer Group · The largest community for verified luxury watch dealers · Est. 2018</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" onClick={(e)=>{e.preventDefault(); setShowPrivacy(true);}} className="hover:opacity-80">Privacy Policy</a>
            <a href="#apply" className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-3 py-2 font-semibold hover:bg-white/90">
              Join Now <Zap className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="w-full max-w-2xl rounded-3xl bg-neutral-950 border border-white/10 p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold">Privacy Policy</h4>
              <button onClick={()=>setShowPrivacy(false)} className="rounded-xl ring-1 ring-white/15 px-3 py-1 text-sm hover:bg-white/5">Close</button>
            </div>
            <div className="mt-4 space-y-3 text-sm text-neutral-300">
              <p>
                We respect your privacy. We collect only the information required to verify your business and enable access to our WhatsApp groups. This may include company documents, director identification, and references. We may also collect contact details to deliver service updates.
              </p>
              <p>
                Data is stored securely and accessed only by authorized personnel for verification and support. We do not sell your data. Limited information may be shared with administrators solely for onboarding and compliance.
              </p>
              <p>
                Payments are accepted exclusively in USDT. We do not store crypto private keys or exchange credentials. You are responsible for sending funds to the provided address. Membership activation occurs after on-chain confirmation.
              </p>
              <p>
                By applying, you agree to our rules of conduct and moderation policies. For deletion or data access requests, contact privacy@watchdealergroup.com.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

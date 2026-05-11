export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          DMCA Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Content Theft.<br />
          <span className="text-[#58a6ff]">Automate Your DMCA Takedowns.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          DMCA Legal Shield monitors the web for stolen blog posts, articles, and course content — then instantly generates legally compliant takedown notices so you can reclaim your work without hiring a lawyer.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Protecting for $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts. No lawyers needed.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🔍', title: 'Web Monitoring', desc: 'Continuously scans the web for copies of your registered content.' },
            { icon: '⚖️', title: 'Legal Templates', desc: 'Auto-fills DMCA notices with your info and the infringing URL.' },
            { icon: '📬', title: 'Auto Delivery', desc: 'Sends takedown requests directly to hosts and Google on your behalf.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Flat Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#6e7681] mb-6">Everything you need to protect your content</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Monitor up to 50 URLs',
              'Unlimited DMCA notices',
              'Google & host auto-delivery',
              'Violation dashboard',
              'Email alerts on new matches',
              'Legal notice templates'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#3fb950] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is a DMCA notice legally binding?',
              a: 'Yes. Under the Digital Millennium Copyright Act, a properly filed takedown notice legally obligates hosts and platforms to remove infringing content or face liability themselves.'
            },
            {
              q: 'How does the monitoring work?',
              a: 'We use search APIs and fingerprinting to scan the web for text that matches your registered content. When a match exceeds our threshold, you are alerted and a notice is prepared automatically.'
            },
            {
              q: 'Do I need to be a US resident to use this?',
              a: 'No. DMCA protections apply globally for content hosted on US-based platforms. Anyone with original content can file a DMCA notice regardless of their country.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} DMCA Legal Shield. Not a law firm. Not legal advice.
      </footer>
    </main>
  )
}

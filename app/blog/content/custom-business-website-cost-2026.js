export default function PostContent() {
  return (
    <>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Anyone shopping for a new business website in 2026 runs into the same problem: pricing is all over the place. A Fiverr designer will quote you $300, a local agency will quote $12,000, and a freelancer in your inbox just sent over a $4,800 number with no breakdown. Here's what's actually behind those numbers and what you should expect at each tier.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The three real pricing tiers</h2>
      <p className="mb-4">
        Strip away the marketing language and most professionally-built business websites in 2026 fall into one of three tiers. The big variable is not "design" — it's what the site is actually doing for your business.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Tier 1: Brochure site ($500 – $2,500)</h3>
      <p className="mb-4">
        A clean, mobile-responsive site with a handful of pages — Home, About, Services, Contact. This is what most local businesses actually need to get started. At this tier you should expect a custom design (not a template), real on-page SEO, contact form integration, and Google Business Profile setup. Anything cheaper and you're almost certainly getting a Wix or Squarespace template with a markup on top.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Tier 2: Lead-generation site ($2,500 – $7,500)</h3>
      <p className="mb-4">
        Everything in Tier 1 plus the pieces that actually generate leads: dedicated landing pages for each service, location pages if you serve multiple cities, written content (blog posts, FAQs, guides) targeting the keywords your customers search, conversion tracking, and proper schema markup. This is the tier where a website starts paying for itself within a year.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Tier 3: Tool-driven site ($7,500 – $20,000+)</h3>
      <p className="mb-4">
        Sites built around an interactive tool — a calculator, configurator, quote builder, or booking system. These sites rank exceptionally well because Google rewards utility, and they convert visitors at 3-5x the rate of brochure sites because users get value before they ever fill out a form. Examples in the wild include{' '}
        <a href="https://rightdumpster.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">RightDumpster</a> (dumpster sizing calculator) and{' '}
        <a href="https://remodelcalculators.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">RemodelCalculators</a> (70+ construction estimators).
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">What's not included in those numbers</h2>
      <p className="mb-4">
        Most quotes exclude four ongoing costs that catch business owners by surprise:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Hosting:</strong> $0–$30/month depending on stack. Static Next.js sites on Vercel or Netlify are free up to real traffic. WordPress hosting starts around $25/month done properly.</li>
        <li><strong>Domain:</strong> $12–$20/year for a .com. Skip the registrar upsells.</li>
        <li><strong>Content updates:</strong> Plan for ~2 hours/month if you want to keep ranking. New blog posts, updated photos, fresh testimonials.</li>
        <li><strong>SEO maintenance:</strong> Either you do it (free + your time) or someone does it for you ($300–$1,500/month depending on aggressiveness).</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Where the price actually comes from</h2>
      <p className="mb-4">
        Almost every line item on a website quote is labor. Design takes ~10 hours. A solid 5-page custom build takes ~25–40 hours including development, content, and testing. A tool-driven site can easily be 80+ hours. Multiply hours by hourly rate ($75–$200 for a competent freelancer or small studio in the US) and you have your number.
      </p>
      <p className="mb-4">
        If a quote feels too low, the corners being cut are almost always one of: using a page builder template (so it looks like everyone else's site), no SEO work (so it never ranks), or no testing (so it breaks on mobile or in Safari).
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">My honest recommendation</h2>
      <p className="mb-4">
        For most local businesses I work with, Tier 2 is the right starting point. A Tier 1 brochure site rarely generates leads on its own — you need the lead-gen pieces to actually get the phone ringing. Tier 3 makes sense once you know what tool would help your customers (we usually figure this out by looking at what questions they ask before they buy).
      </p>
      <p className="mb-4">
        If you're shopping around right now, two questions to ask every developer:
      </p>
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        <li><strong>"Can you show me three sites you built and the traffic they get?"</strong> Anyone can show a portfolio. Almost nobody will show you traffic numbers because most of their work doesn't rank.</li>
        <li><strong>"What's the page speed score on your own site?"</strong> If their own site loads slow, yours will too. Run it through PageSpeed Insights.</li>
      </ol>

      <p className="mb-4">
        These are the same numbers I weigh when deciding whether a build is worth my own time. If you're pricing one out and want to compare notes, <a href="/#contact" className="text-blue-600 hover:underline">get in touch</a>.
      </p>
    </>
  );
}

export default function PostContent() {
  return (
    <>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Wix and Squarespace solved a real problem: in 2010, getting any kind of business website online was a nightmare. In 2026, the problem they solve is mostly gone — but the trade-offs they introduced are catching up to local businesses that took them seriously. Here's why more business owners I talk to are moving off in 2026.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The case for template builders (when it actually works)</h2>
      <p className="mb-4">
        I'll start fair: Wix and Squarespace are still the right choice for a lot of use cases. If you're a hobbyist, a side project, or a brand-new business that genuinely doesn't know yet whether it'll exist in six months, the monthly fee is cheaper than committing capital to a custom build. The drag-and-drop is friendly. The hosting is included.
      </p>
      <p className="mb-4">
        Where I see businesses regret the choice is the next phase — when the business is actually working and the website needs to do more than exist.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Where template builders start to break down</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">1. Performance ceilings</h3>
      <p className="mb-4">
        Template builders ship a lot of code your site doesn't actually use. The average Wix homepage in 2026 ships 4–6 MB of JavaScript on first load. A well-built custom site ships under 200 KB. Google's Core Web Vitals are now a documented ranking factor, and slow sites get pushed down regardless of how good the content is. This shows up most for mobile users on cellular data — which is most of your customers.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">2. SEO limits</h3>
      <p className="mb-4">
        You can do basic SEO on Wix and Squarespace — set page titles, write meta descriptions, add a blog. What you generally can't do well: custom schema markup for your specific business type, dynamic landing pages per service or location, fine-grained control over internal linking, or custom canonical tags when you need them. If you're competing for high-intent local keywords against custom-built competitors, you're playing a game where they have more tools.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">3. Lock-in</h3>
      <p className="mb-4">
        Try exporting a Wix site. You can't, really — you can get the content but not the design, structure, or any of the integrations. Every month you stay, the cost of leaving grows. Squarespace exports are better but still ship with limitations (no e-commerce data, limited template fidelity).
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">4. Pricing trajectory</h3>
      <p className="mb-4">
        Both platforms have raised prices steadily over the last five years. A Wix Business Elite plan is now $159/month. A Squarespace Advanced Commerce plan is $72/month. Over a 5-year span on Business Elite, that's $9,540 — money that would have funded a Tier 2 custom build with budget to spare.
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">5. The "looks like a template" problem</h3>
      <p className="mb-4">
        This one is squishier but real. Customers can usually tell when a site is built on a template — the same hero sections, the same blocky layouts, the same stock photography. For businesses that compete partly on professionalism (lawyers, accountants, custom-build contractors), a template aesthetic actively hurts.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">When the math flips</h2>
      <p className="mb-4">
        The trigger I see most often is when a business owner realizes they're paying a template platform $50–$200 per month while losing leads to a competitor whose site ranks better and loads faster. At that point the math is straightforward: a one-time $3,500–$7,500 build pays for itself in 18–36 months in saved subscription fees alone, before you count the additional leads.
      </p>
      <p className="mb-4">
        The other common trigger: an interactive tool the business needs — a calculator, configurator, quote builder, booking system. Wix and Squarespace can host static iframes from third parties but cannot natively build the kind of custom tools that actually rank and convert. See{' '}
        <a href="https://rightdumpster.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">RightDumpster</a> or{' '}
        <a href="https://remodelcalculators.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">RemodelCalculators</a> for what this looks like in practice.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">How to know if it's time</h2>
      <p className="mb-4">
        A simple checklist. If three or more of these are true, a custom build will probably pay for itself within two years:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>You're paying $50+/month for hosting or a builder subscription</li>
        <li>Your site's PageSpeed mobile score is below 70</li>
        <li>You have competitors out-ranking you for the keywords you care about</li>
        <li>You've thought "we should have a calculator/tool/configurator" and ruled it out because the platform can't do it</li>
        <li>You're hesitant to scale ad spend because you don't trust the site to convert</li>
        <li>You can't easily integrate with your CRM, booking system, or ERP</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The honest counterpoint</h2>
      <p className="mb-4">
        A custom build is only better if it's <em>actually</em> built well. A bad custom site is worse than a decent template site. If you're going custom, ask the developer for their own page speed scores, their portfolio's traffic data, and the SEO work they include by default. If they can't answer those questions, the template might be the safer call.
      </p>
      <p className="mb-4">
        Considering a switch? <a href="/#contact" className="text-blue-600 hover:underline">I do this kind of build</a> — happy to take a look at your current site and give you an honest opinion on whether moving makes sense.
      </p>
    </>
  );
}

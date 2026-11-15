export default function PostContent() {
  return (
    <>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        A week after{' '}
        <a href="https://truedrivecost.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">TrueDriveCost</a>{' '}
        went live, the <a href="/blog/launching-truedrivecost/" className="text-blue-600 hover:underline">day-one build log</a> described 11 calculators and a plan for per-vehicle and by-state pages. That plan is now built. The site went from a set of calculator boxes to a structured, sourced database of what specific cars actually cost to own — and this is the teardown of what got added and the discipline behind it.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">From a calculator to an answer engine</h2>
      <p className="mb-4">
        A calculator makes a reader do the work: they bring the car, the numbers, and the question. The upgrade here was to pre-compute the answers. TrueDriveCost now carries a <strong>124-vehicle dataset</strong>, and every verified vehicle gets its own cost-to-own page at <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">/cost-to-own/[make]/[model]</code> — a 5-year true-cost breakdown for that exact car, modeled from its real MSRP and EPA efficiency rather than a generic national average.
      </p>
      <p className="mb-4">
        The 11 calculators didn't go anywhere; they're the interactive layer on top. But the center of gravity moved from &ldquo;here's a tool, go compute&rdquo; to &ldquo;here's the Honda CR-V's five-year number, and here's how we got it.&rdquo; That's the difference between a utility and a reference — and references are what rank, get cited, and get linked.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The TrueDriveCost Score, and the honesty tax</h2>
      <p className="mb-4">
        Each vehicle carries a <strong>TrueDriveCost Score</strong> built from three deliberately price-neutral factors: <strong>value retention (38%)</strong>, <strong>mechanical dependability (32%)</strong>, and <strong>fuel &amp; energy cost (30%)</strong>. Price-neutral is the whole point — a cheap car isn't automatically a good one to own, and the score is there to surface the cars that quietly cost less over five years regardless of sticker.
      </p>
      <p className="mb-4">
        Here's the part most sites would hide. Of the 124 vehicles, <strong>49 are fully rated</strong> and <strong>75 are provisional</strong> — and the site says so, on the page. The single thing gating a full rating is RepairPal mechanical-dependability data, which simply doesn't exist yet for most brand-new nameplates and EVs at any source that fits the methodology. So rather than invent a number to fill the gap, a provisional vehicle is labeled provisional. On a money-adjacent site, admitting what you can't yet measure is more credible than a suspiciously complete table — and it's the same rule the rest of the network runs on: <a href="/blog/how-i-keep-money-sites-accurate/" className="text-blue-600 hover:underline">a wrong number is a broken promise</a>.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">A comparison engine, not a comparison page</h2>
      <p className="mb-4">
        People don't shop one car; they shop one car against another. So the per-vehicle data feeds a comparison engine: a live <strong>/compare</strong> tool where you pick any two vehicles, plus roughly <strong>319 pre-built comparison pages</strong> — <strong>298 cross-brand matchups</strong> generated automatically (each car against its closest same-size, cross-brand rivals) and <strong>21 hand-picked same-brand pairs</strong> for the comparisons people actually type: RAV4 vs. Highlander, Civic vs. Accord, F-150 vs. Ranger.
      </p>
      <p className="mb-4">
        The same-brand set is curated, not combinatorial, and that restraint is the point. The library of 124 vehicles makes 445 same-brand pairings mathematically possible, but nobody cross-shops a Corolla against a Sequoia. Generating all 445 would be textbook doorway spam; shipping the 21 that have real search demand is the opposite. Every comparison page is built from the same sourced per-vehicle data, with a narrative that names <em>why</em> one car costs less — usually depreciation — instead of just printing two numbers side by side.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The by-state layer</h2>
      <p className="mb-4">
        Ownership cost isn't national — insurance, sales tax, and registration fees swing hard by state. The launch post filed this under &ldquo;in the plan.&rdquo; It's now live across <strong>all 50 states</strong> (D.C. is pending one data point), with three page types each: cost-to-own, car-insurance-cost, and registration-fees. That's <strong>150 state pages</strong>, and not one of them is a template with a state name swapped in — each publishes only when its sales-tax rate, full-coverage insurance average, and dealer doc fee are all present, sourced, and dated. A state missing a verified field doesn't get a thin page; it gets no page. That's the exact <a href="/blog/programmatic-seo-without-spam/" className="text-blue-600 hover:underline">programmatic-SEO-without-the-spam</a> line the network holds everywhere: real data per page, or no page.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The connective tissue</h2>
      <p className="mb-4">
        Around the data sit the pages that make it browsable: a <strong>rankings</strong> hub and a <strong>cars-that-hold-their-value</strong> page that turn the dataset into lists worth landing on, make and model hubs for navigation, <strong>five editorial guides</strong>, and a single <strong>how-we-calculate</strong> page that lays out every formula and every national-average default in one place. The sources behind all of it are named and dated: <strong>AAA, the EIA, the FHWA, the EPA, and RepairPal</strong>.
      </p>
      <p className="mb-4">
        Add it up and TrueDriveCost is now <strong>north of 600 pages</strong> — 124 vehicle pages, 319 comparisons, 150 state pages, 11 calculators, 5 guides, plus the hubs — all generated from a handful of sourced datasets, none of them hand-written filler. That's the whole programmatic thesis in one site: structured, verifiable data scaled into pages, with the discipline to not publish the ones you can't stand behind.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The honest status, again</h2>
      <p className="mb-4">
        The build is done; the traffic story is not. These pages are new and still in the <a href="/blog/how-long-to-rank-new-site-2026/" className="text-blue-600 hover:underline">indexing lull</a> — there's no ranking or revenue report to make yet, and I won't fabricate one. What there is, is depth: a site that went from eleven calculators to a sourced car-ownership database in a week, and earns its place in the portfolio on the strength of the build. The numbers get published when there are numbers. The rest of the network's are in the{' '}
        <a href="/blog/" className="text-blue-600 hover:underline">build logs</a>.
      </p>
    </>
  );
}

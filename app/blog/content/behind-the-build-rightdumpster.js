export default function PostContent() {
  return (
    <>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Most dumpster sizing tools online get one thing wrong: they only ask about volume. The result is contractors and homeowners regularly overshoot or undershoot — and overage fees on a 20-yard dumpster can run $100+ per ton. RightDumpster was built to fix that, and the engineering decisions behind it ended up being a useful case study in what a "calculator site" actually requires to rank and convert.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The problem with most dumpster calculators</h2>
      <p className="mb-4">
        If you search "what size dumpster do I need" you'll find dozens of pages that tell you a 10-yard dumpster holds X cubic yards and a 20-yard holds Y. Useful as a starting point — useless once you load it with concrete or shingles.
      </p>
      <p className="mb-4">
        A 20-yard dumpster might be rated for 4,000 lbs. Concrete weighs ~4,000 lbs <em>per cubic yard</em>. Fill that same dumpster a quarter of the way with concrete and you're already at the weight limit. Past it, you're paying $80–$120 per ton in overage fees.
      </p>
      <p className="mb-4">
        Every existing calculator I checked ignored this entirely. So the first design decision for{' '}
        <a href="https://rightdumpster.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">RightDumpster</a>{' '}
        was: ask about <em>material</em>, not just project type. Roofing tear-off, concrete, dirt, household debris, yard waste — each one has a different weight-per-volume profile that drives a different sizing recommendation.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The calculator architecture</h2>
      <p className="mb-4">
        Under the hood, the calculator is a small decision engine that does three things in sequence:
      </p>
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        <li><strong>Estimate volume.</strong> Take the user's project inputs (room size, roof square footage, etc.) and translate to cubic yards using industry-standard waste factors.</li>
        <li><strong>Estimate weight.</strong> Apply the material's density profile to the volume estimate. Roofing shingles run 4–6 lbs/sqft; concrete is closer to 150 lbs/cubic foot.</li>
        <li><strong>Pick the constraint.</strong> Recommend the smallest dumpster that satisfies <em>both</em> the volume and weight requirements — whichever is the limiting factor.</li>
      </ol>
      <p className="mb-4">
        The result: a 200-square-foot roof tear-off gets recommended a different size than 200 square feet of concrete demolition, even though the volumes are similar. That's the entire pitch.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">SEO architecture for a tool site</h2>
      <p className="mb-4">
        A calculator alone doesn't rank. Google's quality system wants to see that a tool site has context — guides, city-level information, FAQ content. So RightDumpster has three SEO layers:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>The tool itself</strong> on the homepage — instant utility, low bounce rate.</li>
        <li><strong>City pages</strong> for local search ("dumpster rental in Phoenix") with city-specific permit and pricing info.</li>
        <li><strong>Guide content</strong> covering the questions people search before they rent — what fits in a 20-yard, what can't go in a dumpster, do you need a permit.</li>
      </ul>
      <p className="mb-4">
        Each layer cross-links to the calculator. So whether someone lands on a guide post, a city page, or the homepage, they're one click away from the tool.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">What I'd do differently</h2>
      <p className="mb-4">
        If I were starting RightDumpster over, the biggest change would be launching with the city pages already populated rather than waiting until traffic justified them. Local search intent is enormous in this space and Google rewards sites that have city coverage from day one.
      </p>
      <p className="mb-4">
        The other thing I'd change: more aggressive prompting toward the calculator on guide pages. People reading "what size dumpster for a kitchen remodel" want the answer in 5 seconds, not 5 paragraphs.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Why this matters for your business</h2>
      <p className="mb-4">
        If you sell anything where customers have to do math before buying — flooring, fencing, roofing, paint, mulch, concrete, dumpster rental — a calculator-first site is almost always the best SEO + conversion play. It ranks because it's useful. It converts because users feel competent before they ever talk to you.
      </p>
      <p className="mb-4">
        Curious whether your business has a tool worth building? <a href="/#contact" className="text-blue-600 hover:underline">Send me a note</a> — happy to look at your category and tell you whether a calculator angle would work.
      </p>
    </>
  );
}

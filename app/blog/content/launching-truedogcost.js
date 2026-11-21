export default function PostContent() {
  return (
    <>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        The adoption fee is the smallest number you'll ever pay for a dog. What a dog actually costs is food, vet care, insurance, grooming, and boarding — a decade or more of it — and almost nobody adds that up before they bring one home. So I built{' '}
        <a href="https://truedogcost.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">TrueDogCost</a>{' '}
        to do it for them. It's the eighth site in the network, it just went live, and this is the day-one build log.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">What it is</h2>
      <p className="mb-4">
        TrueDogCost is 5 free calculators built around one honest number: what a dog really costs over its life. The flagship is a <strong>Cost to Own a Dog</strong> calculator — pick a breed and a state and it totals food, vet care, insurance, grooming, and boarding across the dog's whole lifespan, then reports it back three ways: per year, per month, and per day. The headline it tends to produce — a typical dog runs about <strong>$32,431 over its life, roughly $216 a month</strong> — is the number almost no one sees before they adopt.
      </p>
      <p className="mb-4">
        Around that flagship sit four more tools across two clusters:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Cost to Own</strong> — the Cost to Own calculator above, plus a First-Year Dog Cost tool (adoption or breeder price, first vet visits and supplies, and twelve months of food and care), a Monthly Dog Budget that climbs as the dog ages into its senior years, and a Breed Cost Comparison that puts up to three breeds side by side on identical assumptions.</li>
        <li><strong>Pet Insurance</strong> — an Is Pet Insurance Worth It? calculator that finds the vet bill at which a policy pays for itself, by breed, age, and state.</li>
      </ul>
      <p className="mb-4">
        Each one answers a decision someone is already searching for — not a vague "how much is a dog" box, but "is pet insurance worth it," "what will my first year with a puppy cost," "which of these breeds is cheaper to own." High-intent, decision-stage questions are exactly where an interactive tool out-earns an article — the same bet behind every calculator site in the network.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Why this niche, and why now</h2>
      <p className="mb-4">
        Pet spending is a big, boring, recession-resistant category, and the search behind it is high-intent and emotional at once — people price out a dog right before they commit to one. Yet most existing tools hand back a single national average with no breed, no state, and no sources. There's room to be the one that personalizes the number and shows where it came from.
      </p>
      <p className="mb-4">
        It's also the obvious sibling to <a href="https://truedrivecost.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">TrueDriveCost</a>. Same template — take a purchase everyone underprices, total the true lifetime cost, and show the math — pointed at the other big thing households take on for emotional reasons and then pay for over the next decade. TrueDriveCost proved the "true cost of owning X" format works; TrueDogCost is that format aimed at a niche that's less adversarial to rank in and genuinely underserved on real data.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Show your work, again</h2>
      <p className="mb-4">
        The network rule carried straight over: every calculator spells out its formula and its assumptions, and every default is sourced and dated. The breed and state numbers aren't invented — they come from <strong>MoneyGeek's 2026 state estimates, NAPHIA for insurance, Rover for care pricing, and a study of 584,734 dogs for a 12.5-year median lifespan</strong>, each labeled with where it came from and when it was checked. Where there isn't a sourced figure yet, the site says so instead of guessing — which, on a topic where most calculators quietly make the numbers up, is the whole differentiator.
      </p>
      <p className="mb-4">
        There's real range to expose, too. On identical assumptions a Pug runs about $2,366 a year and an Akita about $3,955, and MoneyGeek's state estimates swing from $2,757 in North Dakota to $3,541 in California. Breed pages and a full 51-state ranking are the programmatic-SEO play here — one dataset, a real number per breed and per state, not thin doorway pages — the same approach behind <a href="https://figuremoney.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">FigureMoney</a>'s paycheck pages and TrueDriveCost's by-state cost-to-own.
      </p>
      <p className="mb-4">
        The footer is equally plain that these are planning estimates, not financial or veterinary advice. On a money-adjacent topic that disclaimer isn't throat-clearing — it's part of being accurate about what the tool can and can't tell you.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The honest day-one status</h2>
      <p className="mb-4">
        The site is live and the calculators work. That's the whole report. There's no traffic yet, no revenue, no rankings — it was just submitted for indexing. If you've read the <a href="/blog/how-long-to-rank-new-site-2026/" className="text-blue-600 hover:underline">ranking-timeline post</a>, you know the next few months are the indexing lull, and the interesting numbers don't show up until long-tail pages start catching. I publish those when there's a real change to report, same as every other property.
      </p>
      <p className="mb-4">
        For now it earns its spot in the portfolio on the strength of the build, not the stats. The rest of the teardowns and the network numbers are in the{' '}
        <a href="/blog/" className="text-blue-600 hover:underline">build logs</a>.
      </p>
    </>
  );
}

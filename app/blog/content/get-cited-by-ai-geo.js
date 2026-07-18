export default function PostContent() {
  return (
    <>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        A growing share of my sites' traffic never sees a Google results page. People ask ChatGPT, Perplexity, or Google's AI overview a question, get an answer with a couple of citations, and click one — or don't click at all. That shift has a name now — Generative Engine Optimization, or GEO — and it changes what "ranking" means. Here's how I'm setting up the whole network to get <em>cited</em> by AI, not just indexed by search.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">GEO isn't a new SEO — it's a second audience</h2>
      <p className="mb-4">
        The mistake is treating AI search as a separate discipline with its own tricks. It isn't. An AI model recommends the same kind of page a good search engine ranks: specific, accurate, well-structured, and clearly attributable to a real author. Most of what earns citations is what already earns rankings.
      </p>
      <p className="mb-4">
        What <em>is</em> new is that you now have a second reader — a language model — parsing your page with different priorities than a human. It doesn't scroll, it doesn't admire your hero image, and it can't run your JavaScript. It extracts claims, sources, and structure. GEO is mostly about making your existing quality legible to that reader.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">1. Answer the question in the first two sentences</h2>
      <p className="mb-4">
        Models favor content they can lift a clean, self-contained answer from. If the direct answer to "what size dumpster for a garage cleanout" is buried in paragraph six behind a personal anecdote, the model has to work to extract it — and often won't. Lead with the answer, then explain. This is the old inverted-pyramid rule, and it matters more for machines than it ever did for people.
      </p>
      <p className="mb-4">
        The practical version: each page should have one primary question it answers unambiguously, near the top, in plain declarative sentences. Everything the calculator sites do — one tool per real question, the number first, the methodology below — is already shaped this way.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">2. Show the source — models cite what they can verify</h2>
      <p className="mb-4">
        AI systems are under real pressure not to state things they can't back up, so they lean toward content that names its evidence. A page that publishes the formula, the constant, and the authoritative source behind a number is far more citable than one that just asserts the number. This is the same "show your work" architecture behind{' '}
        <a href="https://figuremoney.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">FigureMoney</a>{' '}
        — built for a "Your Money or Your Life" niche where trust is the whole game, and it turns out that verifiability is exactly what an AI wants to cite too. Optimizing for the strictest human trust bar and optimizing for machine citation are the same project.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">3. Structured data does double duty</h2>
      <p className="mb-4">
        Clean JSON-LD schema was always about rich results in Google. Now it's also how you hand a model unambiguous facts: this is an <code>Article</code>, here's the <code>author</code>, here's the <code>HowTo</code>, here are the <code>FAQ</code> pairs. Structured data removes the guesswork — the model doesn't have to infer who wrote something or what type of content it is when the page states it explicitly.
      </p>
      <p className="mb-4">
        The <code>FAQPage</code> and <code>HowTo</code> types are especially worth it, because they map directly onto the question-and-answer shape AI responses are built from. You're pre-formatting your content into the unit the model actually wants.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">4. A consistent author entity across the network</h2>
      <p className="mb-4">
        Models weigh who is behind a claim, not just the claim. Across all six of my sites, every page references the <em>same</em> David Miles author entity — one stable identity, linked from each property back to a single author profile on this hub. That tells both Google and an AI crawler that one real operator stands behind the whole network, which is a stronger signal than six anonymous sites each asserting expertise in isolation.
      </p>
      <p className="mb-4">
        If you publish across multiple properties, unify the author identity deliberately. A scattered, inconsistent byline is a missed trust signal in a world where "who says so" is part of the ranking.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">5. Give crawlers a map: llms.txt, robots, and a live sitemap</h2>
      <p className="mb-4">
        There's an emerging convention — <code>/llms.txt</code> — that gives AI crawlers a plain-text, curated map of a site: what it is, who runs it, and the pages worth reading. I generate this hub's{' '}
        <a href="https://modernsitebuilders.com/llms.txt" target="_blank" rel="noopener" className="text-blue-600 hover:underline">llms.txt</a>{' '}
        at build time from the same registries that drive the site, so it lists every owned property with a description, splits the blog into build logs and guides, and names David Miles as the operator of all of them. Because it's generated, not hand-maintained, it can never drift out of sync — publish a post and it's in the file on the next build.
      </p>
      <p className="mb-4">
        Two supporting pieces make it discoverable: <code>robots.txt</code> welcomes crawlers, points to the sitemap, and references the llms.txt file; and the sitemap itself is self-updating — it discovers routes from the filesystem at build time rather than being a hand-kept list, so a new page can't be silently left out. The theme across all three: automate the plumbing so coverage is a property of the build, not a chore you have to remember.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">6. Don't hide your best content behind scripts</h2>
      <p className="mb-4">
        Many AI crawlers don't execute JavaScript. If your key content only appears after a client-side render, or your methodology is fetched into the DOM on click, a model may never see it. The fix I use everywhere: keep the substance in the server-rendered HTML, and hide detail with CSS when you want a clean UI — collapsed, not absent. The crawler gets the full depth; the human gets the tidy layout. You never trade one for the other.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">What I'm still watching</h2>
      <p className="mb-4">
        GEO is early and the measurement is genuinely hard — the analytics for "how often does an AI cite me" are far behind the tooling for "where do I rank." Referral data from AI tools is thin, and citations often produce zero clicks even when they shape the buyer's decision. So I'm not chasing GEO with special-purpose tactics. I'm doing the durable things — answer-first structure, verifiable sourcing, clean schema, a unified author, and machine-readable site maps — that pay off whether the reader is a person, Google, or a model.
      </p>
      <p className="mb-4">
        That's the reassuring part: there's no separate GEO checklist that trades against SEO. The content that earns a citation is the content that earned a ranking. Build for the strict reader — human or machine — and you're covered either way. The rest of the build logs are <a href="/blog/" className="text-blue-600 hover:underline">here</a>.
      </p>
    </>
  );
}

export default function PostContent() {
  return (
    <>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        MeetBackdrops started from a simple observation: every "virtual background" site on the internet looks the same. Endless grids of stock photos — beaches, libraries, neutral home offices — none of them designed to actually look good on a webcam under fluorescent office lighting. Here's how the site was built differently, and what the design decisions tell you about productizing a creative inventory.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The problem with stock backgrounds</h2>
      <p className="mb-4">
        Most virtual background sites are quantity plays. Thousands of generic photos, sorted into broad categories, with the assumption that you'll find one you like if you scroll long enough. The result is uniformly mediocre — and on a video call, a mediocre background actively distracts. Bad bokeh, weird perspective, lighting that doesn't match the room, telltale stock-photo composition.
      </p>
      <p className="mb-4">
        The pitch behind{' '}
        <a href="https://meetbackdrops.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">MeetBackdrops</a>{' '}
        was inversion: fewer backgrounds, but every one of them composed specifically for camera. Studio lighting, correct focal length, neutral mid-ground depth so your face is the focal point. Designed as <em>sets</em>, not as photos.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Category structure as positioning</h2>
      <p className="mb-4">
        The category navigation isn't accidental — it mirrors the situations people actually use video backgrounds for, not abstract visual themes. The categories are:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Bookshelves</strong> — credibility signal for academics, consultants, executives.</li>
        <li><strong>Offices</strong> — the "I'm in a serious workplace" set.</li>
        <li><strong>Wall Shelves</strong> — modern, designed, not stuffy.</li>
        <li><strong>Living Rooms</strong> — warm, approachable, for sales calls and intros.</li>
        <li><strong>Seasonal</strong> — Christmas, Halloween, Valentine's, spring/summer.</li>
      </ul>
      <p className="mb-4">
        That's a productized inventory. You don't browse aimlessly; you pick the context, then pick the variant. Conversion is much higher than "scroll until you find one."
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The HD vs free split</h2>
      <p className="mb-4">
        Free virtual background sites monetize through ads or hidden upsells. MeetBackdrops splits the inventory: a generous free tier (1456×816, still usable for most calls) and an HD tier upgraded to 2912×1632, suitable for 4K displays, recorded video, and high-stakes presentations.
      </p>
      <p className="mb-4">
        The economics are simple. Free downloads drive traffic and brand discovery. HD purchases monetize the small fraction of users who care about image quality on calls — which turns out to be the exact users with budgets for the rest of their professional toolkit.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Branded backgrounds: where most of the revenue lives</h2>
      <p className="mb-4">
        The biggest realization in the first year was that companies — not individuals — are the actual market for premium virtual backgrounds. A 50-person sales org wants every rep on Zoom calls with a clean, on-brand background. They don't want to find one; they want one made.
      </p>
      <p className="mb-4">
        Branded backgrounds are a higher-ticket service product layered on top of the catalog. Same site, different conversion funnel. Catalog purchases convert visitors at $5-$20; branded background commissions convert a fraction of organizations at $500-$5,000+ per engagement.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">SEO architecture</h2>
      <p className="mb-4">
        Image-heavy commerce sites have a known SEO problem: thin pages. A page that's mostly an image gallery is the kind of page Google's quality system tends to deprioritize unless something contextualizes it. So every category page on MeetBackdrops has real written content — usage guides, lighting tips, situations the category is right for — and every individual background has a contextual description, alt text, and download metadata.
      </p>
      <p className="mb-4">
        The blog layer adds even more topical authority: setup guides, common mistakes, job-interview-specific tips, comparison posts. Each post links to the relevant category pages; each category page links back to relevant blog posts. The internal-link graph is dense enough that Google understands what the site is about and what it's competent at.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">What this means for productized services</h2>
      <p className="mb-4">
        MeetBackdrops is a useful case study because it shows what happens when you take a service business idea (custom branded backgrounds for companies) and front-load it with a product (a free / paid catalog). The free catalog is your top-of-funnel; the service is your high-ticket back end. People discover you for one and become customers for the other.
      </p>
      <p className="mb-4">
        Plenty of categories work like this. Photographers can have a print catalog → custom shoot funnel. Designers can have a template store → custom design funnel. Consultants can have a tool or assessment → engagement funnel.
      </p>
      <p className="mb-4">
        Thinking about productizing a service? <a href="/#contact" className="text-blue-600 hover:underline">Reach out</a> — I'm happy to look at your business and tell you whether a catalog-style funnel would work for what you sell.
      </p>
    </>
  );
}

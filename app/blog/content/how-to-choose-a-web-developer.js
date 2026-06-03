export default function PostContent() {
  return (
    <>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Hiring a web developer is one of those decisions where the cost of picking wrong is high and the cues for picking right are subtle. Portfolios all look fine. Reviews are mostly five stars. Pricing varies by 10x with no obvious reason. Here are the questions I'd ask before signing a contract — informed by being on both sides of this transaction many times.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">1. "Can you show me a site you built and the traffic it gets?"</h2>
      <p className="mb-4">
        Every developer has a portfolio. Almost none can show you Google Analytics or Search Console data on the sites in that portfolio. Be skeptical of any developer who can show you the design but can't tell you whether the site actually performs. Building a pretty site is a craft. Building one that ranks and converts is a different (harder) craft.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">2. "What's the PageSpeed mobile score on your own website?"</h2>
      <p className="mb-4">
        Run their own site through <a href="https://pagespeed.web.dev" target="_blank" rel="noopener" className="text-blue-600 hover:underline">PageSpeed Insights</a>. If their own site scores below 70 on mobile, yours will too. Page speed is a documented Google ranking factor, and the engineers who care about it bake it in by default. The ones who don't care will ship you a beautiful site that loads in 8 seconds on a phone — and most of your customers are on phones.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">3. "Will I own the site when we're done?"</h2>
      <p className="mb-4">
        Surprisingly common gotcha. Some agencies build on proprietary platforms or lease arrangements where if you leave them, you lose the site. The answer should be: "Yes, you own the code, the domain stays in your name, and the hosting account is in your name." Anything else, walk.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">4. "What's your handoff process if I want to bring someone else in later?"</h2>
      <p className="mb-4">
        A good answer involves a Git repository, documentation, a list of any third-party services with credentials, and a brief technical readme. A bad answer involves "we'd be happy to keep working with you." Lock-in is a smell.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">5. "What technology will the site be built on, and why?"</h2>
      <p className="mb-4">
        The technology matters less than the reasoning. Next.js, WordPress, Astro, plain HTML — any of these can be the right answer depending on what the site needs to do. What you're really listening for: do they know what they're building, or are they running the same template for every client regardless of fit? A developer who builds every site on Wix or Webflow regardless of the business is a developer who isn't actually engineering anything — they're decorating.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">6. "What does your SEO work include by default?"</h2>
      <p className="mb-4">
        Real answer should include: page-level meta titles and descriptions, schema markup for the business type, an XML sitemap, robots.txt configuration, image alt text, page speed optimization, mobile responsiveness testing, and submission to Google Search Console. If the answer is "we do basic SEO," ask for specifics. If they can't name half of those, SEO is not part of the build.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">7. "How are revisions handled, and when does scope creep become a change order?"</h2>
      <p className="mb-4">
        Reasonable: "You get unlimited copy revisions during the writing phase, two rounds of design revisions, and structural changes after final design approval are billed at our hourly rate." Unreasonable: vague answers or no answer at all. The point isn't to nickel-and-dime — it's to make sure both sides know what's included.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">8. "Who writes the content?"</h2>
      <p className="mb-4">
        This trips up half the projects I see go sideways. If the developer expects you to write all the content, your project will sit half-finished for months while you procrastinate. If the developer writes the content with no involvement from you, it won't sound like you and won't reflect what you actually do. Best answer: a structured interview where they pull the substance out of you and then write the copy, with your review and final approval.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">9. "What happens after launch?"</h2>
      <p className="mb-4">
        Sites need updates. Security patches, content additions, fixing broken links, adding new pages. Two acceptable models: (1) you take it over and the developer is available hourly for changes, (2) a monthly retainer for ongoing changes. Either is fine. What's not fine is "we'll let you know if anything comes up" — that means nobody is responsible for keeping your site current.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">10. "What's the realistic timeline, including the things on my plate?"</h2>
      <p className="mb-4">
        Honest developers will tell you the project takes 4–8 weeks <em>and</em> that the timeline depends on how fast you respond to drafts, send photos, approve revisions. Anyone promising you a finished site in two weeks with no caveats is either skipping work or hasn't done a project like yours before.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Red flags to walk away from</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>No written contract.</strong> Verbal agreements on $5,000+ projects end badly.</li>
        <li><strong>100% upfront payment.</strong> Standard is 30–50% upfront, balance on completion.</li>
        <li><strong>No references they'll let you call.</strong> Anyone can collect testimonials. A live reference call tells you what they're like to work with.</li>
        <li><strong>Vagueness on technology.</strong> "We'll figure out the platform once we start" means they don't have a default playbook.</li>
        <li><strong>Pressure to decide today.</strong> Web development is not a flash sale.</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">The shortcut version</h2>
      <p className="mb-4">
        If you don't want to go through all 10 questions, here's the compressed test: ask them for one site they're proud of and the analytics on it, run their own site through PageSpeed, and ask what's in their default SEO scope. Anyone who answers all three confidently is in the top quartile of developers you can hire.
      </p>
      <p className="mb-4">
        I'm happy to be on the receiving end of those questions any time. <a href="/#contact" className="text-blue-600 hover:underline">Get in touch</a> if you want to start a conversation.
      </p>
    </>
  );
}

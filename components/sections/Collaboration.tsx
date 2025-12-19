"use client";

import BracketFactsWrapper from "../BracketFactsWrapper";
import BracketTitle from "../BracketTitle";
import FactItem from "./FactItem";
import Link from "next/link";
export default function CollaborationSection() {
  return (
    <main className="bg-[#f5f3ef] text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative h-[88vh] bg-black">
        <img
          src="/images/collaboration/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Hero"
        />
        <div className="relative z-10 max-w-[1200px] mx-auto h-full flex items-center px-6">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold leading-tight">
              Keep Going
            </h1>
            <p className="mt-4 text-lg font-bold text-[#ffFFFF]/90" >
              Transforming Communities • Empowering Women • Strengthening Education • Connecting Local to Global.
            </p> 
            <p className="mt-4 text-lg font-bold">
              <span className="text-[#FF9933]">My Country</span>
              <span className="text-white"> | </span>
              <span className="text-white">My Responsibility</span>
              <span className="text-white"> | </span>
              <span className="text-[#138808]">My Pride</span>
            </p>
            <button className="mt-8 bg-yellow-400 text-black px-6 py-3 font-semibold">
              Watch the video
            </button>
          </div>
        </div>
      </section>

      {/* ================= 25 YEARS ================= */}
      <section className="bg-[#2c3a46] text-white text-center py-20 px-6">
        <BracketTitle text="12 Years of Progress" />
        <p className="mt-6 max-w-3xl mx-auto text-white/80">
          Measuring impact across health, climate, education, and women empowerment initiatives.
        </p>
        <button className="mt-10 bg-yellow-400 text-black px-6 py-3 font-semibold">
          <Link href="/our-story">Explore timeline</Link>
        </button>
      </section>
      {/* ================= FEATURE STORY ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-semibold">Rural Village Woman</h3>
            <p className="mt-6 text-lg text-gray-600">
              Keep Growing: Progress Begins at the Grassroots—But Belongs to the Nation.
              India stands at an inflection point where climate challenges, youth migration, economic disparities, and cultural erosion demand bold, unified action.
              The Gnarly Troop Global Federation (GTGF) emerges as a national catalyst—strengthening communities, empowering women, modernizing education, and connecting India’s diverse talent to global opportunities.
              
            </p>
            <button className="mt-6 border-b border-black font-semibold">
              <Link href="/rural-village">Read story</Link>
              
            </button>
          </div>
          <img
            src="/images/collaboration/story-1.jpg"
            className="w-full rounded-xl"
            alt="Story"
          />
        </div>
      </section>

      {/* ================= ECONOMIC OPPORTUNITY ================= */}
      <section className="py-24 px-6 bg-[#f5f3ef] text-center">
        <h3 className="text-4xl font-bold">URBAN–RURAL CULTURAL EXCHANGE HUBS</h3>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700">
          GTGF connects rural artisans, SHGs, and young entrepreneurs with national and global markets through Urban–Rural Cultural Exchange Platforms.
        </p>
        <button className="mt-8 bg-yellow-400 px-6 py-3 font-semibold">
          <Link href="/how-we-are">How we’re supporting</Link>        
        </button>
      </section>

      {/* ================= FEATURE GRID ================= */}
<section className="py-24 px-6">
  <div className="max-w-[1200px] mx-auto grid md:grid-cols-12 gap-8">
    {/* Left Column 70% */}
    <div className="md:col-span-8">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <a href="/ideas/articles/typhoid-hpv-vaccines-children/">
          <img
            src="/images/collaboration/talk.jpg"
            alt="WOMEN EMPOWERMENT: INDIA’S STRONGEST ECONOMIC FORCE."
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </a>
        <div className="p-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            <a href="/ideas/articles/typhoid-hpv-vaccines-children/" className="hover:underline">
              Talk Shows for Inspirational Story of Transformative Leadership
            </a>
          </h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            WOMEN EMPOWERMENT: INDIA’S STRONGEST ECONOMIC FORCE.
          </p>
        </div>
      </div>
    </div>

    {/* Right Column 30% */}
    <div className="md:col-span-4 flex flex-col gap-6">
      {/* Article 1 */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <a href="/ideas/articles/mosquito-net-innovation-malaria/">
          <img
            src="/images/collaboration/grid2.jpg"
            alt="RURAL DEVELOPMENT CENTRES (RDCs)"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </a>
        <div className="p-4">
          <h3 className="text-xl font-semibold">
            <a href="/ideas/articles/mosquito-net-innovation-malaria/" className="hover:underline">
              RURAL DEVELOPMENT CENTRES (RDCs)
            </a>
          </h3>
          <p className="mt-2 text-gray-700 text-sm">
            RURAL DEVELOPMENT CENTRES (RDCs)
          </p>
        </div>
      </div>

      {/* Article 2 */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <a href="/ideas/articles/tuberculosis-tb-community-treatment/">
          <img
            src="/images/collaboration/grid3.jpg"
            alt="Nandipha Titana"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </a>
        <div className="p-4">
          <h3 className="text-xl font-semibold">
            <a href="/ideas/articles/tuberculosis-tb-community-treatment/" className="hover:underline">
              YOUTH ENTREPRENEURSHIP & RURAL STARTUP PROGRAMS
            </a>
          </h3>
          <p className="mt-2 text-gray-700 text-sm">
            GTGF trains youth to become entrepreneurs, innovators, and climate-resilient leaders.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="bg-[#f5f3ef] py-24 px-6">
        <BracketFactsWrapper> 
          <FactItem
            label=""
            value="1%"
            description=""
          />
          <FactItem
            label="FACT:"
            value=""
            description="A 1% increase in agricultural per-capita Gross Domestic Product (GDP) reduces the poverty gap five times more than a 1% increase in GDP in other sectors, especially amongst the poorest."
          />
        </BracketFactsWrapper>
      </section>

      {/* ================= MOTHERS & BABIES ================= */}
      <section className="py-24 px-6 bg-white text-center">
        <h3 className="text-4xl font-bold">Adopt- Educate- Train- for Self-reliant & Vibrant Bharat.</h3>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
          To transform Rural Bharat into Vibrant Bharat by establishing 28 Gnarly Troop Cultural Village Centres—one in each state of India—serving as hubs of cultural pride, entrepreneurial growth, and global connectivity.

        </p>
        <button className="mt-8 bg-yellow-400 px-6 py-3 font-semibold">
          Learn more
        </button>
      </section>
{/* ================= FEATURE PROMO (50/50) ================= */}
<section
  className="promo-50-50 component promo-50-50--left w-full py-20 bg-[#F5F3ED]"
  style={{ "--gate-color": "#F5F3ED" } as React.CSSProperties}
>
  <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* IMAGE */}
    <figure className="promo-50-50__media">
      <a href="/ideas/articles/pph-drape-early-detection/">
        <img
          src="/images/collaboration/p1.jpg"
          alt="A nurse manager demonstrates how to use a drape to prevent postpartum hemorrhage (PPH)."
          className="rounded-xl w-full object-cover"
        />
      </a>
    </figure>

    {/* CONTENT */}
    <div className="promo-50-50__details">
      <h4 className="text-3xl md:text-4xl font-bold leading-tight">
        The Way of Troops Work in Village for Sustainable Development:
      </h4>

      <p className="mt-6 text-lg text-gray-700">
Mission : Together, we support communities in overcoming difficult issues where we are working to change the odds so that today's leaders can lay a stronger foundation for tomorrow's leaders. We are ensuring that every child has a strong start in life, that teenagers have the resources to learn and grow, and that young adults thrive in the job market with a comprehensive approach to education that spans from cradle to career.

The goal of the troops is to improve health, education, and economic opportunity because these are the foundations of a happy life and a vibrant community.
      </p>

      <a
        href="/troop-village"
        className="inline-block mt-6 font-semibold border-b border-black hover:opacity-70 transition"
      >
        Learn more
      </a>
    </div>

  </div>
</section>
<section className="py-20 bg-white text-center">
  <div className="max-w-3xl mx-auto px-6">

    {/* Eyebrow */}
    <div className="text-sm uppercase tracking-wide text-gray-500">
      Infectious Diseases
    </div>

    {/* Title */}
    <h2 className="mt-3 text-4xl font-bold">
      25 years against disease
    </h2>

    {/* Description */}
    <div className="mt-6 text-lg text-gray-700 space-y-4">
      <p>
        From longtime scourges such as malaria, tuberculosis, and polio to newer
        threats such as HIV and COVID-19, preventable infectious diseases still
        afflict communities all over the world.
      </p>
      <p>
        Since 2000, our foundation has helped build a global coalition of partners
        to fight the spread of these deadly diseases and ensure every child gets
        the vaccines they need.
      </p>
    </div>

    {/* CTA */}
    <div className="mt-8">
      <a
        href="/ideas/progress/infectious-diseases"
        className="inline-block font-semibold border-b-2 border-black pb-1 hover:opacity-70 transition"
      >
        Read all stories
      </a>
    </div>

  </div>
</section>

{/* ================= FEATURE PROMO GRID (70/30) ================= */}
<section className="py-24 px-6">
  <div className="max-w-[1200px] mx-auto grid md:grid-cols-12 gap-8">
    {/* Left Column 70% */}
    <div className="md:col-span-8">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <a href="/ideas/articles/typhoid-hpv-vaccines-children/">
          <img
            src="/images/collaboration/grid4.jpg"
            alt="EDUCATION: THE EMPOWERING TOOL FOR NATION-BUILDING"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </a>
        <div className="p-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            <a href="/ideas/articles/typhoid-hpv-vaccines-children/" className="hover:underline">
              EDUCATION: THE EMPOWERING TOOL FOR NATION-BUILDING
            </a>
          </h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            GTGF makes education the foundation of future leadership, ensuring children and youth are globally aware, technologically skilled, and socially responsible.
            Education becomes a weapon against poverty, inequality, and climate vulnerability.
          </p>
        </div>
      </div>
    </div>

    {/* Right Column 30% */}
    <div className="md:col-span-4 flex flex-col gap-6">
      {/* Article 1 */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <a href="/ideas/articles/mosquito-net-innovation-malaria/">
          <img
            src="/images/collaboration/grid5.jpg"
            alt="The next-generation mosquito net bringing new hope in the fight against malaria"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </a>
        <div className="p-4">
          <h3 className="text-xl font-semibold">
            <a href="/ideas/articles/mosquito-net-innovation-malaria/" className="hover:underline">
              DIGITAL AWARENESS & INCLUSION FOR EVERY FAMILY
            </a>
          </h3>
          <p className="mt-2 text-gray-700 text-sm">
            A Digital Bharat Must Empower the Last Mile
            No family should remain excluded from India’s digital rise.

          </p>
        </div>
      </div>

      {/* Article 2 */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <a href="/ideas/articles/tuberculosis-tb-community-treatment/">
          <img
            src="/images/collaboration/grid6.jpg"
            alt="Nandipha Titana"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </a>
        <div className="p-4">
          <h3 className="text-xl font-semibold">
            <a href="/ideas/articles/tuberculosis-tb-community-treatment/" className="hover:underline">
              LOCAL TO GLOBAL MARKET EXPANSION
            </a>
          </h3>
          <p className="mt-2 text-gray-700 text-sm">
            Every Artisan, Every District, Every Skill—Ready for the World
            GTGF enhances market visibility and demand through branding, storytelling, and export facilitation.

          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="bg-[#f5f3ef] py-24 px-6">
        <BracketFactsWrapper> 
          <FactItem
            label="FACT"
            value="3.5M+"
            description="Vaccines save between 3.5 to 5 million lives a year, every year."
          />
          <FactItem
            label="FACT:"
            value="$54"
            description="A 1% increase in agricultural per-capita Gross Domestic Product (GDP) reduces the poverty gap five times more than a 1% increase in GDP in other sectors, especially amongst the poorest."
          />
        </BracketFactsWrapper>
      </section>
      {/* ================= NEWSLETTER ================= */}
      <section className="bg-yellow-400 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <h3 className="text-3xl font-bold">
            Sign up for the Optimist Newsletter
          </h3>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="secretary@gnarlytroop.org"
              className="px-4 py-3 w-full"
            />
            <button className="bg-black text-white px-6 font-semibold">
              <Link href="/donation">Donate Us</Link>
            </button>
          </div>
        </div>
      </section>

      {/* ================= PORTRAITS ================= */}
      <section className="py-24 px-6 bg-white">
        <h3 className="text-3xl font-bold mb-10">
          Portraits of the People Who Keep Going
        </h3>
        <div className="grid md:grid-cols-4 gap-8">
          <img src="/images/collaboration/p5.jpg" className="rounded-xl" alt="Person 1" />
          <img src="/images/collaboration/p2.jpg" className="rounded-xl" alt="Person 2" />
          <img src="/images/collaboration/p3.jpg" className="rounded-xl" alt="Person 3" />
          <img src="/images/collaboration/p4.jpg" className="rounded-xl" alt="Person 4" />
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#2c3a46] text-white py-24 px-6 text-center">
        <h3 className="text-4xl font-bold">
          Interested in Supporting Our Collaborations?
        </h3>
        <button className="mt-8 bg-yellow-400 text-black px-6 py-3 font-semibold">
          Learn how to help
        </button>
      </section>

    </main>
  );
}

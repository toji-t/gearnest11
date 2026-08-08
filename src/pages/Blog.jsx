export default function Blog() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">
        GearNest Magazine
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Stay updated with the latest tech trends, AI news, Apple updates,
        gaming, laptops, smartphones, and buying advice.
      </p>

      <div className="grid gap-6">

        <article className="border rounded-xl p-6 hover:shadow-lg transition">
          <span className="text-sm text-blue-600 font-semibold">
            Trending Tech
          </span>

          <h2 className="text-2xl font-bold mt-2">
            Best Back-to-School Tech for Students in 2026
          </h2>

          <p className="mt-3 text-gray-600">
            Discover the best laptops, headphones, keyboards, and accessories
            every student should consider before going back to school.
          </p>

          <a
  href="https://medium.com/"
  className="mt-5 inline-block bg-black text-white px-5 py-2 rounded-lg"
>
  Read Article
</a>
        </article>

      </div>
    </main>
  );
}

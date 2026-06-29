export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-3xl font-bold text-red-600">
            ImgGallery
          </h1>

          <input
            type="text"
            placeholder="Search Images..."
            className="w-96 border rounded-full px-5 py-2 outline-none"
          />
        </div>
      </header>

      <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-20 text-center">
        <h2 className="text-5xl font-bold">
          Discover Amazing Images
        </h2>

        <p className="mt-5 text-xl">
          Download Free HD Images & Videos
        </p>
      </section>

      <section className="max-w-7xl mx-auto py-10 px-5">
        <h2 className="text-3xl font-bold mb-6">
          Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Nature",
            "Animals",
            "Cars",
            "Technology",
            "AI",
            "Travel",
            "Food",
            "Wallpapers",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition"
            >
              <h3 className="font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

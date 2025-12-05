import { AnimatedHero } from "@/components/home/AnimatedHero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedHero />
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose UniDataHub?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholders for features */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Feature {i}</h3>
                <p className="text-slate-600">
                  Detailed analytics and insights to help you make the best decision for your future.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

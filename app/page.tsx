import { Hero3D } from "@/components/home/Hero3D"
import { WhyChoose } from "@/components/home/WhyChoose"
import { Features } from "@/components/home/Features"
import { HowItWorks } from "@/components/home/HowItWorks"
import { PopularPrograms } from "@/components/home/PopularPrograms"
import { universities } from "@/data/universities"
import { UniversityCard } from "@/components/university/UniversityCard"
import Link from "next/link"
import { BookOpen, Users, Globe, TrendingUp, Award, Building2, Target, Search, Quote, Zap, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function Home() {
  // Calculate statistics
  const totalUniversities = universities.length
  const totalPrograms = universities.reduce((sum, uni) => sum + (uni.programs?.length || 0), 0)
  const cities = new Set(universities.map(u => u.location)).size

  // Get top 3 universities by ranking (exclude those with ranking = 0)
  const topUniversities = universities
    .filter(u => u.ranking > 0)
    .sort((a, b) => a.ranking - b.ranking)
    .slice(0, 3)

  return (
    <div className="min-h-screen">
      <Hero3D />

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{totalUniversities}</div>
              <div className="text-slate-600">Университетов</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{totalPrograms}+</div>
              <div className="text-slate-600">Академических программ</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Globe className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{cities}</div>
              <div className="text-slate-600">Городов Казахстана</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <WhyChoose />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Popular Programs Section */}
      <PopularPrograms />

      {/* Top Universities Section */}
      {topUniversities.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Топ университеты</h2>
              <p className="text-slate-600">Лучшие образовательные учреждения Казахстана</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {topUniversities.map((uni) => (
                <UniversityCard key={uni.id} university={uni} />
              ))}
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">
                <Link href="/catalog">Посмотреть все университеты</Link>
              </Button>
            </div>
          </div>
        </section>
      )}


      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Ответы на популярные вопросы о платформе</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Откуда берутся данные о университетах?',
                a: 'Мы собираем информацию напрямую с официальных сайтов университетов и проверяем её актуальность каждый день.'
              },
              {
                q: 'Можно ли доверять рейтингам университетов?',
                a: 'Мы используем официальные национальные и международные рейтинги, такие как QS World Rankings и рейтинги Министерства образования РК.'
              },
              {
                q: 'Как работает функция сравнения?',
                a: 'Вы можете добавить до 4 университетов в список сравнения и увидеть их параметры side-by-side: стоимость, программы, рейтинг и многое другое.'
              },
              {
                q: 'Бесплатна ли платформа UniDataHub?',
                a: 'Да, все функции UniDataHub абсолютно бесплатны для студентов и абитуриентов.'
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-all duration-300">
                <summary className="cursor-pointer font-semibold text-lg text-slate-900 flex items-center justify-between">
                  {faq.q}
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed pl-2">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Готовы найти свой идеальный университет?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Присоединяйтесь к тысячам студентов, которые уже нашли своё призвание с помощью UniDataHub
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 h-14 px-10 text-lg rounded-full shadow-2xl" asChild>
                <Link href="/catalog">Начать поиск</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-blue-400 hover:bg-white/10 h-14 px-10 text-lg rounded-full" asChild>
                <Link href="/compare">Сравнить университеты</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { SectionTitle } from '@/components/SectionTitle'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const team = [
  ['Alex Morgan', 'Executive Director', 'Sets the strategic direction of Lead by Her and leads our partnerships with communities and supporters.'],
  ['Jordan Williams', 'Programs Director', 'Designs and oversees our education, leadership and skills programs from planning to delivery.'],
  ['Taylor Okafor', 'Community Partnerships Lead', 'Builds relationships with schools, local leaders and partner organisations in the communities we serve.'],
  ['Sam Adeyemi', 'Finance & Operations Lead', 'Manages finances, logistics and reporting so every contribution is used responsibly and transparently.'],
] as const

const board = [
  ['Dr. Jamie Carter', 'Board Chair', 'Leads the board in providing independent oversight and long-term strategic guidance.'],
  ['Morgan Bello', 'Board Treasurer', 'Oversees financial governance, budgeting and accountability on behalf of our donors.'],
  ['Chris Johnson', 'Board Secretary', 'Ensures sound governance, accurate records and compliance with our policies.'],
] as const

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-stone-100">
        <div className="container">
          <Reveal>
            <div className="text-xs font-bold tracking-[0.16em] text-primary uppercase">About Us</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="serif mt-3 max-w-3xl text-[clamp(48px,7vw,78px)] leading-[1]">
              People, purpose, and a commitment to women and girls.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Learn about the people, principles, and governance behind Lead by Her Empowerment Initiative.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container grid items-center gap-14 md:grid-cols-2">
          <Reveal className="relative h-[340px] overflow-hidden rounded-3xl sm:h-[440px]">
            <Image
              src="/images/gallery/community-book-handout.jpg"
              alt="Lead by Her team distributing books to a community of women and girls"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </Reveal>
          <Reveal delay={150} className="grid gap-5">
            <SectionTitle eyebrow="Who We Are" title="Built around people and possibility." />
            <p className="text-[17px] leading-8 text-muted-foreground">
              Lead by Her Empowerment Initiative was founded on a simple belief: when women and girls have access to
              education, mentorship and opportunity, whole communities rise with them. We work alongside schools,
              families and local leaders in Nigeria — distributing books, supporting students, building leadership
              skills and providing welfare support — so that every girl we reach can stay in school and step confidently
              into her future.
            </p>
            <p className="text-[17px] leading-8 text-muted-foreground">
              Our mission:{' '}
              <strong className="text-foreground">
                To empower women and young girls through education, leadership, welfare, wellbeing and skills
                development.
              </strong>
            </p>
            <p className="text-[17px] leading-8 text-muted-foreground">
              Our vision:{' '}
              <strong className="text-foreground">
                A world where every woman and girl has the opportunity, confidence and support to lead.
              </strong>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-stone-100">
        <div className="container">
          <SectionTitle eyebrow="Leadership" title="The people guiding our work." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(([n, r, bio], i) => (
              <Reveal key={n} delay={i * 80}>
                <Card className="rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-5">
                    <div className="h-56 rounded-2xl bg-gradient-to-br from-forest-200 to-sage-100" />
                    <h3 className="serif mt-4 mb-1 text-2xl">{n}</h3>
                    <div className="text-xs font-bold tracking-[0.16em] text-primary uppercase">{r}</div>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{bio}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Board of Directors" title="Independent governance and accountability." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {board.map(([n, r, bio], i) => (
              <Reveal key={n} delay={i * 80}>
                <Card className="rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-5 size-[92px] rounded-full bg-gradient-to-br from-forest-200 to-sage-100" />
                    <h3 className="serif text-2xl">{n}</h3>
                    <div className="mt-1.5 text-xs font-bold tracking-[0.16em] text-primary uppercase">{r}</div>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{bio}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Governance CTA */}
      <section className="bg-gradient-to-br from-forest-900 via-forest-700 to-sage-500 py-20 text-white">
        <Reveal className="container max-w-2xl">
          <Badge className="bg-sage-400/90 text-forest-950 hover:bg-sage-400/90">Transparency & Governance</Badge>
          <h2 className="serif mt-3 text-[clamp(34px,5vw,52px)] leading-[1.05]">Trust is built through accountability.</h2>
          <p className="mt-3.5 text-[17px] leading-7 text-forest-50/90">
            Access annual reports, financial information, policies, and governance documents.
          </p>
          <Button asChild size="lg" className="mt-7 rounded-full bg-white text-forest-800 transition-transform hover:-translate-y-0.5 hover:bg-forest-50">
            <Link href="/contact">Contact us</Link>
          </Button>
        </Reveal>
      </section>
    </>
  )
}

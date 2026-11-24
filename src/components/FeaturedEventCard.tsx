import Image from 'next/image'
import { ArrowUpRight, CalendarDays, MapPin, Ticket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatEventDate, type FeaturedEvent } from '@/lib/events'

export function FeaturedEventCard({ event }: { event: FeaturedEvent }) {
  return (
    <Card className="overflow-hidden rounded-3xl py-0">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden bg-forest-800">
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-10">
          <Badge className="w-fit bg-sage-200 text-forest-800 hover:bg-sage-200">Upcoming · Charity Walk</Badge>
          <h3 className="serif mt-3 text-4xl leading-tight">{event.title}</h3>
          <p className="serif mt-1 text-lg text-primary italic">{event.tagline}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{event.description}</p>

          <ul className="mt-6 grid gap-3 text-sm">
            <li className="flex items-center gap-3">
              <CalendarDays size={18} className="shrink-0 text-primary" />
              <span>{formatEventDate(event.date)}</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="shrink-0 text-primary" />
              <span>{event.location}</span>
            </li>
            <li className="flex items-center gap-3">
              <Ticket size={18} className="shrink-0 text-primary" />
              <span>
                Registration fee: <strong>{event.fee}</strong>
              </span>
            </li>
          </ul>

          <Button asChild size="lg" className="mt-8 w-fit rounded-full transition-transform hover:-translate-y-0.5">
            <a href={event.registerUrl} target="_blank" rel="noopener noreferrer">
              Register now <ArrowUpRight size={17} />
            </a>
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">Secure registration via Selar.</p>
        </div>
      </div>
    </Card>
  )
}

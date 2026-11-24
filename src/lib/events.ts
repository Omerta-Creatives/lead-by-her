export type FeaturedEvent = {
  title: string
  tagline: string
  description: string
  /** ISO date (YYYY-MM-DD) */
  date: string
  location: string
  fee: string
  image: string
  imageAlt: string
  registerUrl: string
}

export const tenKWalk: FeaturedEvent = {
  title: '10K Walk for a Cause',
  tagline: 'Every step counts. Every contribution matters.',
  description:
    'Walk with us as we raise awareness and funds to support women and girls in underserved communities through education and empowerment initiatives. Your registration secures your spot and covers essential event expenses.',
  date: '2026-12-12',
  location: 'In-person · venue shared with registered participants',
  fee: '₦2,500',
  image: '/images/events/10k-walk-for-a-cause.jpg',
  imageAlt: 'Lead by Her 10K Walk for a Cause flyer — Saturday, December 12, 2026',
  registerUrl: 'https://selar.com/593239h053',
}

/** Formats an ISO date without timezone drift (e.g. "Saturday, December 12, 2026"). */
export function formatEventDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-NG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export function eventDateParts(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  const month = new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-NG', { month: 'short', timeZone: 'UTC' })
  return { day: d, month: month.toUpperCase(), year: y }
}

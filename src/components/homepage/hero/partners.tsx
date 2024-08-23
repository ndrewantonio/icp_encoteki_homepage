import { InfiniteMovingImages } from '@/components/ui/infinite-moving-images'

export default function Partners() {
  const partnersWording = 'As seen on various medias'
  const partners = [
    {
      path: '/assets/partners/altcoinbuzz.png',
    },
    {
      path: '/assets/partners/coindeskindonesia.jpg',
    },
    {
      path: '/assets/partners/coinvestasi.png',
    },
    {
      path: '/assets/partners/icryptomedia.png',
    },
    {
      path: '/assets/partners/jelajahcoin.png',
    },
    {
      path: '/assets/partners/karirlab.png',
    },
    {
      path: '/assets/partners/republika.png',
    },
    {
      path: '/assets/partners/satechainmedia.png',
    },
    {
      path: '/assets/partners/thelocalenablers.png',
    },
    {
      path: '/assets/partners/wartaekonomi.png',
    },
    {
      path: '/assets/partners/yahoofinance.png',
    },
    {
      path: '/assets/partners/vivacoid.webp',
    },
  ]
  return (
    <>
      <div className="text-center font-inter text-base font-normal desktop:pt-2 desktop:text-lg">
        {partnersWording}
      </div>
      <div className="antialiase relative flex flex-col items-center justify-center overflow-hidden rounded-md desktop:pb-6">
        <InfiniteMovingImages
          items={partners}
          direction="right"
          speed="normal"
        />
      </div>
    </>
  )
}

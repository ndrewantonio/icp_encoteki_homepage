import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effects'
import Image from 'next/image'
import HeroImage from '@/assets/hero-image.svg'
import EncotekiLogo from '@/assets/encoteki-icon.png'
import Partners from './partners'

export default function Hero() {
  const heading = [
    {
      text: 'Welcome',
    },
    {
      text: 'to',
    },
    {
      text: 'Encoteki.',
      className: 'text-primary-green',
    },
  ]
  const desc =
    'Mint, earn, and make a difference. Our animal-themed NFTs fuel non-profit projects that aim to build a better world through technology and community-driven sustainability.'

  return (
    <div className="m-auto w-[calc(100%-32px)] tablet:w-[calc(100%-64px)] desktop:max-w-[1440px]">
      <div className="m-auto text-center tablet:w-[786px]">
        <Image
          src={EncotekiLogo}
          alt={'Encoteki'}
          width={46}
          className="block tablet:hidden"
        />
        <TypewriterEffectSmooth words={heading} />
        <span className="w-full font-inter text-base font-normal tablet:text-lg">
          {desc}
        </span>
      </div>

      <Image
        src={HeroImage}
        alt={'The Satwas Band'}
        className="m-auto my-10 w-full desktop:w-[959px] desktop:py-12"
      />
      <Partners />
    </div>
  )
}

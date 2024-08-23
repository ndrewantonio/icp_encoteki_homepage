import Image from 'next/image'

import Animal from '@/assets/benefits/Animal.svg'
import Map from '@/assets/benefits/Map.svg'
import MoneyMobile from '@/assets/benefits/Money-Mobile.svg'

export default function BenefitsMobile({
  benefits,
}: {
  benefits: {
    title: string
    subtitle: string
  }[]
}) {
  return (
    <div className="flex flex-col gap-4 tablet:hidden">
      <div className="relative h-36 rounded-2xl bg-khaki-99 p-4">
        <Image
          src={Map}
          alt={benefits[0].title}
          width={128}
          className="absolute right-0 top-0 m-4"
        />
        <div className="absolute bottom-0 left-0 m-4">
          <h1 className="mb-1 text-xl font-medium">{benefits[0].title}</h1>
          <span className="text-sm">{benefits[0].subtitle}</span>
        </div>
      </div>

      <div className="relative h-36 rounded-2xl bg-khaki-99 p-4">
        <Image
          src={MoneyMobile}
          alt={benefits[1].title}
          width={128}
          className="absolute right-0 top-0 m-4"
        />
        <div className="absolute bottom-0 left-0 m-4">
          <h1 className="mb-1 text-xl font-medium">{benefits[1].title}</h1>
          <span className="text-sm">{benefits[1].subtitle}</span>
        </div>
      </div>

      <div className="relative h-36 rounded-2xl bg-khaki-99 p-4">
        <Image
          src={Animal}
          alt={benefits[2].title}
          width={161}
          className="absolute bottom-0 right-0 m-4"
        />
        <div className="absolute left-0 top-0 m-4">
          <h1 className="mb-1 text-xl font-medium">{benefits[1].title}</h1>
          <span className="text-sm">{benefits[1].subtitle}</span>
        </div>
      </div>

      <div className="h-18 rounded-2xl bg-khaki-99 p-4">
        <h1 className="mb-1 text-xl font-medium">{benefits[2].title}</h1>
        <span className="text-sm">{benefits[2].subtitle}</span>
      </div>

      <div className="h-18 rounded-2xl bg-khaki-99 p-4">
        <h1 className="mb-1 text-xl font-medium">{benefits[3].title}</h1>
        <span className="text-sm">{benefits[3].subtitle}</span>
      </div>

      <div className="h-18 rounded-2xl bg-khaki-99 p-4">
        <h1 className="mb-1 text-xl font-medium">{benefits[4].title}</h1>
        <span className="text-sm">{benefits[4].subtitle}</span>
        <button className="mt-4 block rounded-[32px] border border-primary-green bg-white px-6 py-2 duration-300 hover:bg-green-90">
          <span className="text-sm text-primary-green">View Offers</span>
        </button>
      </div>
    </div>
  )
}

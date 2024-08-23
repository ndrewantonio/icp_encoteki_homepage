import Image from 'next/image'

import Animal from '@/assets/benefits/Animal.svg'
import Map from '@/assets/benefits/Map.svg'
import Money from '@/assets/benefits/Money.svg'

export default function BenefitsDesktop({
  benefits,
}: {
  benefits: {
    title: string
    subtitle: string
  }[]
}) {
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="relative h-[302px] rounded-[32px] bg-khaki-99 p-8">
          <Image
            src={Map}
            alt={benefits[0].title}
            className="absolute right-0 top-0 m-8"
          />
          <div className="absolute bottom-0 left-0 m-8 w-[200px]">
            <h1 className="mb-1 text-[32px] font-medium">Secure</h1>
            <p className="text-base font-normal">{benefits[0].subtitle}</p>
          </div>
        </div>

        <div className="relative h-[302px] rounded-[32px] bg-khaki-99 p-8">
          <Image
            src={Money}
            alt={benefits[1].title}
            className="absolute right-0 top-0 m-8"
          />
          <div className="absolute bottom-0 left-0 m-8 w-[200px]">
            <h1 className="mb-1 text-[32px] font-medium">Secure</h1>
            <p className="text-base font-normal">{benefits[1].subtitle}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="relative h-[356px] rounded-[32px] bg-khaki-99 p-8">
          <div className="absolute left-0 top-0 m-8">
            <h1 className="mb-1 text-[32px] font-medium">
              {benefits[2].title}
            </h1>
            <p className="text-base font-normal">{benefits[2].subtitle}</p>
          </div>
          <Image
            src={Animal}
            alt={benefits[2].title}
            className="absolute bottom-0 left-0 m-8"
          />
        </div>

        <div className="grid h-[356px] grid-rows-2 gap-3">
          <div className="relative rounded-[32px] bg-khaki-99 p-8">
            <div className="absolute left-0 top-0 m-8">
              <h1 className="mb-1 text-[32px] font-medium">
                {benefits[3].title}
              </h1>
              <p className="text-base font-normal">{benefits[3].subtitle}</p>
            </div>
          </div>
          <div className="relative rounded-[32px] bg-khaki-99 p-8">
            <div className="absolute left-0 top-0 m-8">
              <h1 className="mb-1 text-[32px] font-medium">
                {benefits[4].title}
              </h1>
              <p className="text-base font-normal">{benefits[4].subtitle}</p>
            </div>
          </div>
        </div>

        <div className="relative h-[356px] rounded-[32px] bg-khaki-99 p-8">
          <div className="absolute left-0 top-0 m-8">
            <h1 className="mb-1 text-[32px] font-medium">
              {benefits[5].title}
            </h1>
            <p className="mb-6 text-base font-normal">{benefits[5].subtitle}</p>
            <button className="rounded-[32px] border border-primary-green bg-white px-6 py-2 duration-300 hover:bg-green-90">
              <span className="text-primary-green">View Offer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

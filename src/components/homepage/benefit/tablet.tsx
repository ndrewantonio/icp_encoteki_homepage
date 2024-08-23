import Image from 'next/image'

import Animal from '@/assets/benefits/Animal.svg'
import Map from '@/assets/benefits/Map.svg'
import Money from '@/assets/benefits/Money.svg'

export default function BenefitsTablet({
  benefits,
}: {
  benefits: {
    title: string
    subtitle: string
  }[]
}) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      <div className="relative h-[302px] rounded-[32px] bg-khaki-99 p-8">
        <Image
          src={Map}
          alt="alt"
          width={213}
          className="absolute right-0 top-0 m-8"
        />
        <div className="absolute bottom-0 left-0 m-8">
          <h1 className="text-[32px] font-medium">{benefits[0].title}</h1>
          <p className="text-base">{benefits[0].subtitle}</p>
        </div>
      </div>
      <div className="relative h-[302px] rounded-[32px] bg-khaki-99 p-8">
        <Image
          src={Money}
          alt="alt"
          width={140}
          className="absolute right-0 top-0 m-8"
        />
        <div className="absolute bottom-0 left-0 m-8">
          <h1 className="text-[32px] font-medium">{benefits[1].title}</h1>
          <p className="text-base">{benefits[1].subtitle}</p>
        </div>
      </div>
      <div className="relative h-[302px] rounded-[32px] bg-khaki-99 p-8">
        <Image
          src={Animal}
          alt="alt"
          width={250}
          className="absolute bottom-0 mb-8"
        />
        <div className="absolute left-0 top-0 m-8">
          <h1 className="text-[32px] font-medium">{benefits[2].title}</h1>
          <p className="text-base">{benefits[2].subtitle}</p>
        </div>
      </div>
      <div className="grid-row-2 grid h-[302px] gap-4">
        <div className="rounded-[32px] bg-khaki-99 p-8">
          <div>
            <h1 className="text-[32px] font-medium">{benefits[3].title}</h1>
            <p className="text-base">{benefits[3].subtitle}</p>
          </div>
        </div>
        <div className="rounded-[32px] bg-khaki-99 p-8">
          <h1 className="text-[32px] font-medium">{benefits[4].title}</h1>
          <p className="text-base">{benefits[4].subtitle}</p>
        </div>
      </div>

      <div className="col-span-2 rounded-[32px] bg-khaki-99 p-8">
        <div>
          <h1 className="text-[32px] font-medium">{benefits[5].title}</h1>
          <p className="mb-6 text-base">{benefits[5].subtitle}</p>
          <button className="w-32 rounded-[32px] border border-primary-green bg-white px-6 py-2 duration-300 hover:bg-green-90">
            <span className="text-primary-green">View Offers</span>
          </button>
        </div>
      </div>
    </div>
  )
}

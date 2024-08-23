import { aboutEncoteki } from '@/constant/paragraph'
import iconArrow from '@/assets/icon/icon.arrow.svg'
import iconLightBulb from '@/assets/icon/icon.lightbulb.svg'
import iconTarget from '@/assets/icon/icon.target.svg'
import Image from 'next/image'

export default function About() {
  const title = 'About Encoteki'
  const paragraph = aboutEncoteki
  const whitePaperUrl = process.env.WHITEPAPER_DRIVE_URL

  const visionMission = [
    {
      icon: iconLightBulb,
      title: 'Our vision',
      content: [
        {
          item: 'Develop a self-sustainable environment and community through technology.',
        },
      ],
    },

    {
      icon: iconTarget,
      title: 'Our mission',
      content: [
        {
          item: 'Conserve endangered Indonesian animals through real contribution.',
        },
        {
          item: 'Benefit environment, community, and holders through value-added initiatives.',
        },
      ],
    },
  ]

  return (
    <div className="d max-w-full">
      <div className="rounded-2xl bg-primary-green px-4 py-6 tablet:rounded-[32px] tablet:p-16 desktop:px-28 desktop:py-20">
        <div className="flex flex-col desktop:flex-row desktop:gap-x-20">
          {/* Mobile & Tablet */}
          <div className="flex flex-col gap-10 tablet:gap-y-20 desktop:hidden">
            <div className="text-white">
              <h1 className="mb-8 text-[32px] font-medium tablet:text-5xl">
                {title}
              </h1>
              <div className="mb-8 flex flex-col gap-y-6 font-inter text-sm font-normal tablet:text-base">
                {paragraph.map((item, index) => {
                  return <p key={index}>{item.paragraph}</p>
                })}
              </div>
              <a href={whitePaperUrl} target="_blank" rel="noopener noreferrer">
                <button className="rounded-[32px] bg-white px-6 py-3 duration-300">
                  <div className="flex flex-row justify-center gap-x-2 text-base">
                    <span className="font-normal text-primary-green">
                      View Whitepaper
                    </span>
                    <Image src={iconArrow} alt="alt" width={24} height={24} />
                  </div>
                </button>
              </a>
            </div>

            <div className="flex flex-col gap-6">
              {visionMission.map((item, index) => {
                return (
                  <div key={index} className="rounded-2xl bg-white px-5 py-6">
                    <div className="bg-khaki-99 p-3">
                      <Image src={item.icon} alt="alt" width={32} height={32} />
                    </div>
                    <div>
                      <h1 className="mb-3 text-xl font-medium">{item.title}</h1>
                      <ol
                        className={`${item.content.length > 1 ? 'ml-5 list-disc' : 'list-none'} text-base font-normal`}
                      >
                        {item.content.map((item, index) => {
                          return <li key={index}>{item.item}</li>
                        })}
                      </ol>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Desktop Left Content */}
          <div id="desktop-left-content" className="hidden w-1/2 desktop:block">
            <div className="flex h-full flex-col justify-between">
              <div className="text-white desktop:text-5xl desktop:font-medium">
                {title}
              </div>
              <div className="flex flex-col font-inter text-base font-normal text-white desktop:gap-y-10">
                {paragraph.map((item, index) => {
                  return <div key={index}>{item.paragraph}</div>
                })}
              </div>
              <a href={whitePaperUrl} target="_blank" rel="noopener noreferrer">
                <button className="h-[56px] w-[216px] rounded-[32px] bg-white px-6 py-3 duration-300 hover:bg-green-90">
                  <div className="flex flex-row justify-center gap-x-2 text-base">
                    <span className="text-base font-medium text-primary-green">
                      View Whitepaper
                    </span>

                    <Image src={iconArrow} alt="alt" width={24} height={24} />
                  </div>
                </button>
              </a>
            </div>
          </div>

          {/* Desktop Right Content */}
          <div
            id="desktop-right-content"
            className="hidden w-1/2 desktop:block"
          >
            <div className="flex flex-col justify-between gap-y-10">
              {visionMission.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col rounded-[32px] bg-white p-8"
                  >
                    <div className="mb-6 h-14 w-14 rounded-xl bg-khaki-90 p-3">
                      <Image src={item.icon} alt="alt" width={32} height={32} />
                    </div>
                    <div className="mb-3 text-2xl font-medium">
                      {item.title}
                    </div>
                    <ol
                      className={`${item.content.length > 1 ? 'ml-5 list-disc' : 'list-none'} text-base font-normal`}
                    >
                      {item.content.map((item, index) => {
                        return <li key={index}>{item.item}</li>
                      })}
                    </ol>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

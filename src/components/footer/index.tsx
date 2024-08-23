import Image from 'next/image'
import Instagram from '@/assets/icon/instagram.svg'
import Thread from '@/assets/icon/threads.svg'
import X from '@/assets/icon/x.svg'
import Tiktok from '@/assets/icon/tiktok.svg'
import ArrowUp from '@/assets/icon/arrow-up.svg'
import Link from 'next/link'

export default function Footer() {
  const title = 'Join the community and save the world!'
  const copyright = 'Encoteki © 2024 All rights reserved'
  const socmed = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/encoteki/',
    },
    {
      name: 'Thread',
      icon: Thread,
      url: 'https://www.threads.net/@encoteki',
    },
    {
      name: 'X',
      icon: X,
      url: 'https://x.com/encoteki',
    },
    {
      name: 'Tiktok',
      icon: Tiktok,
      url: 'https://www.tiktok.com/@encoteki',
    },
  ]
  return (
    <div className="m-auto w-full bg-primary-green px-6 pb-6 pt-24 tablet:pb-24 tablet:pt-[176px] desktop:px-32">
      <div className="tablet:flex tablet:flex-row tablet:justify-between">
        <div className="mb-14 flex flex-col gap-4 tablet:mb-0 tablet:justify-between">
          <h1 className="text-xl font-medium text-white">{title}</h1>
          <div className="flex gap-9 tablet:mt-8">
            {socmed.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    key={index}
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    className=""
                  />
                </a>
              )
            })}
          </div>
        </div>
        <div className="tablet:flex tablet:flex-col tablet:justify-between tablet:text-right">
          <div className="hidden tablet:mb-3 tablet:flex tablet:flex-col tablet:items-end">
            <Link href="/#home">
              <Image
                src={ArrowUp}
                alt={'Back to top'}
                width={24}
                className=""
              />
            </Link>
            <p className="mt-3 text-base text-white">Back to top</p>
          </div>
          <p className="text-sm font-normal text-white">{copyright}</p>
        </div>
      </div>
    </div>
  )
}

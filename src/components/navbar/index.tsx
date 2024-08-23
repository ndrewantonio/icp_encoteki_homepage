import Image from 'next/image'
import Link from 'next/link'

import EncotekiLogo from '@/assets/encoteki-icon.png'
import IconMenu from '@/assets/icon/icon.menu.svg'

export default function NavBar() {
  const navs = [
    { label: 'Collection', href: '#collection' },
    { label: 'Benefit', href: '#benefit' },
    { label: 'About', href: '#about' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' },
  ]
  const mintpageUrl = process.env.MINTPAGE_URL

  return (
    <div className="flex justify-between px-4 pt-4 tablet:px-8 tablet:pt-8">
      <div className="flex gap-6">
        <Image
          src={IconMenu}
          alt="alt"
          width={32}
          height={32}
          className="desktop:hidden"
        />
        <Link href="/">
          <img
            src="/encoteki-icon.png"
            alt="Icon"
            className="hidden h-[54px] w-[79px] tablet:block desktop:h-[70px] desktop:w-[101px]"
          />
        </Link>
      </div>

      <div className="flex items-center gap-16 font-inter text-base font-semibold">
        <div className="hidden gap-8 desktop:flex">
          {navs.map((nav, index) => {
            return (
              <Link
                key={index}
                href={nav.href}
                className="duration-300 hover:text-primary-green"
              >
                {nav.label}
              </Link>
            )
          })}
        </div>
        <a href={mintpageUrl} target="_blank" rel="noopener noreferrer">
          <button className="rounded-[32px] bg-primary-green px-8 py-2 duration-300 hover:bg-green-10 tablet:px-16 tablet:py-4">
            <span className="font-inter text-base font-semibold text-white">
              Mint
            </span>
          </button>
        </a>
      </div>
    </div>
  )
}

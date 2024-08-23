'use client'

import Image from 'next/image'
import { useState } from 'react'

import iconArrowDown from '@/assets/icon/icn-arrow-down.svg'
import arrowDown from '@/assets/icon/arrow-down.svg'
import HeadingSection from '../headingSection'

export default function Faq() {
  const heading = {
    title: 'FAQs',
    subtitle: 'Find quick answers to commonly asked questions about Encoteki.',
  }

  const headingDesktop = {
    title: 'FAQs',
    subtitle: 'Find quick answers to commonly asked questions about Encoteki.',
    align: 'text-left',
  }

  const faqList = [
    {
      question: 'What is NFT ?',
      answer:
        'NFTs (non-fungible tokens) are unique cryptographic tokens that exist on a blockchain and cannot be replicated. NFTs represent real-world objects like real estate and artwork, or digital objects like graphic art, videos, and music. With NFTs, people can buy, sell, and trade their assets more efficiently while reducing the probability of fraud. NFTs also have utilities that include things like a digital asset, a service, membership, access to specific events, and any other advantages, depending on the creator.',
    },
    {
      question: 'What is The Satwas Band NFTs ?',
      answer:
        'The Satwas Band is our first NFTs collection, which consists of 3653 randomly generated art, consisting of 5 endangered Indonesian animals that formed into a music group. The Satwas Band will be generated on Polygon Blockchain. Forty percent of the royalties will be donated to the national park that will be chosen by the holders.',
    },
    {
      question: 'Can The Satwa Band NFTs act as an investment ?',
      answer:
        'Every investment has its own risk and rewards, and so do NFTs. The Satwas Band NFTs and ENCOTEKI itself are not an exception to that. We ourselves place ENCOTEKI as an Impact Investing. As we believe that providing value as much as we can to the environment, community, as well as the holders will also increase the value of The Satwas Band NFTs and ENCOTEKI in return.',
    },
    {
      question: 'How to buy The Satwas Band NFTs ?',
      answer: 'Get whitelisted!',
    },
  ]

  const [visibleIndex, setVisibleIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index)
  }

  return (
    <div className="max-w-full">
      <div className="rounded-2xl bg-khaki-99 px-5 py-6 tablet:rounded-[32px] tablet:px-16 tablet:py-20 desktop:px-[100px] desktop:py-20">
        {/* Mobile & Tablet */}
        <div className="flex flex-col gap-y-6 desktop:hidden">
          <HeadingSection heading={heading} />
          {faqList.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`rounded-2xl border border-[#E0E0E0] bg-white p-8 duration-200 hover:cursor-pointer hover:border-primary-green hover:text-primary-green tablet:rounded-[32px]`}
              >
                <div className="flex justify-between">
                  <h1
                    className={`w-3/4 text-xl font-medium duration-300 ${visibleIndex === index ? 'text-primary-green' : ''}`}
                  >
                    {item.question}
                  </h1>
                  <div className="cursor-pointer">
                    <Image
                      src={arrowDown}
                      alt={'alt'}
                      width={28}
                      height={28}
                      className={`duration-500 ${visibleIndex === index ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </div>
                </div>
                <p
                  id="faq-content"
                  className={`transition-max-height overflow-hidden text-black duration-500 ease-in-out ${visibleIndex === index ? 'max-h-96 pt-6' : 'max-h-0 pt-0'} text-justify text-base font-normal`}
                >
                  {item.answer}
                </p>
              </div>
            )
          })}
        </div>

        {/* Desktop */}
        <div className="hidden desktop:flex desktop:gap-x-12">
          <HeadingSection heading={headingDesktop} />
          <div className="flex w-3/4 flex-col gap-y-6">
            {faqList.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`border border-[#E0E0E0] bg-white duration-200 hover:cursor-pointer hover:border-primary-green hover:text-primary-green desktop:rounded-[32px] desktop:px-8 desktop:py-6`}
                >
                  <div className="flex justify-between">
                    <h1
                      className={`duration-300 desktop:text-2xl desktop:font-medium ${visibleIndex === index ? 'text-primary-green' : ''}`}
                    >
                      {item.question}
                    </h1>
                    <div className="cursor-pointer">
                      <Image
                        src={iconArrowDown}
                        alt={'alt'}
                        className={`duration-500 ${visibleIndex === index ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </div>
                  </div>
                  <p
                    id="faq-content"
                    className={`transition-max-height overflow-hidden text-black duration-1000 ease-in-out desktop:duration-500 ${visibleIndex === index ? 'max-h-60 pt-6 desktop:max-h-40' : 'max-h-0 pt-0'} text-justify desktop:text-base desktop:font-normal`}
                  >
                    {item.answer}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

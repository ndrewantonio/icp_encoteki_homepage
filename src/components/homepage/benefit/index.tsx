import HeadingSection from '../headingSection'
import BenefitsMobile from './mobile'
import BenefitsTablet from './tablet'
import BenefitsDesktop from './desktop'

export default async function Benefit() {
  const heading = {
    title: 'Benefits',
    subtitle:
      'Here are some benefits you will receive as an owner of The Satwas Band NFT',
  }

  const benefitList = [
    {
      title: 'Secure',
      subtitle: 'Blockchain-validated proof of payment',
    },
    {
      title: 'Cuan',
      subtitle: 'Shares of Encoteki’s subsidiaries',
    },
    {
      title: 'Freebies',
      subtitle: 'Free national park or zoo entrance',
    },
    {
      title: 'Event pass',
      subtitle: 'Community or special event pass',
    },
    {
      title: 'Voting',
      subtitle: 'Access to DAO’s voting mechanism',
    },
    {
      title: 'Partner discount',
      subtitle:
        'Discounts and special prices to Encoteki partners & subsidiaries',
    },
  ]

  return (
    <div className="m-auto max-w-[360px] tablet:max-w-[736px] desktop:max-w-[calc(100%-200px)]">
      <HeadingSection heading={heading} />
      <div className="block tablet:hidden">
        <BenefitsMobile benefits={benefitList} />
      </div>

      <div className="hidden tablet:block desktop:hidden">
        <BenefitsTablet benefits={benefitList} />
      </div>

      <div className="hidden desktop:block">
        <BenefitsDesktop benefits={benefitList} />
      </div>
    </div>
  )
}

import CardProduct from './collectionCard'
import HeadingSection from '../headingSection'

import Cendry from '@/assets/nft/CENDRY.png'
import Owen from '@/assets/nft/OWEN.png'
import Gajara from '@/assets/nft/GAJARA.png'
import Tiggy from '@/assets/nft/TIGGY.png'
import Kanghoon from '@/assets/nft/KANGHOON.png'
import Komesi from '@/assets/nft/KOMESI.png'

export default function Collection() {
  const heading = {
    title: 'NFT Collection',
    subtitle:
      'Our collection, The Satwas Band, are inspired by endangered animals in Indonesia. Mint and collect them all!',
  }

  const satwas = [
    {
      name: 'Cendry',
      role: 'Vocalist',
      about:
        'She’s the light to the team. The empowering-leader with bright vision to the group.',
      image: '/assets/CENDRY.png',
    },
    {
      name: 'Owen',
      role: 'Ketipung Player',
      about:
        'Besides playing Ketipung, a musical instrument from Java, he’s also a songwriter.',
      image: '/assets/OWEN.png',
    },
    {
      name: 'Gajara',
      role: 'Drummer',
      about:
        'He’s the chillest member in the group and he really loves to drum. In his free time, he likes to help others.',
      image: '/assets/GAJARA.png',
    },
    {
      name: 'Tiggy',
      role: 'Keyboardist',
      about:
        'She’s a deep thinker and full of imagination. Her humanism principle guide them in all things.',
      image: '/assets/TIGGY.png',
    },
    {
      name: 'Kanghoon',
      role: 'Bassist',
      about:
        'The bassist doppelgänger of Komesi. She’s cheerful, caring, and ready to serve people in need.',
      image: '/assets/KANGHOON.png',
    },
    {
      name: 'Komesi',
      role: 'Guitarist',
      about:
        'He’s the chillest member in the group and he really loves to drum. In his free time, he likes to help others.',
      image: '/assets/KOMESI.png',
    },
  ]
  return (
    <div className="m-auto max-w-[360px] tablet:max-w-[736px] desktop:max-w-[calc(100%-200px)]">
      <HeadingSection heading={heading} />
      <div className="flex flex-col gap-4 desktop:grid desktop:grid-cols-2 desktop:grid-rows-3 desktop:gap-6">
        <CardProduct product={satwas} />
      </div>
    </div>
  )
}

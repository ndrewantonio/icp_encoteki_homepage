import Link from 'next/link'
import Image from 'next/image'

import EncotekiLogo from '@/assets/encoteki-icon.png'
import NotFoundImg from '@/assets/404.png'

const NotFound = () => {
  return (
    <div className="h-[100vh] bg-white p-4 tablet:p-8">
      <Link href="/">
        <Image
          src={EncotekiLogo}
          alt="Encoteki"
          className="h-[32px] w-[47px] tablet:h-[64px] tablet:w-[92px]"
        />
      </Link>

      <div className="my-[150px] flex h-auto items-center justify-center">
        <div className="h-full w-[488px] text-center font-normal">
          <Image
            src={NotFoundImg}
            alt="404 Not Found"
            className="m-auto h-[182px] w-[272px] tablet:h-[325px] tablet:w-[488px]"
          />
          <h1 className="mb-2 text-2xl font-medium tablet:text-3xl">
            This page is lost in the wild
          </h1>
          <p className="text-sm tablet:text-base">
            The page you are looking for cannot be found. Please recheck the URL
            and try again.
          </p>
          <Link href="/">
            <button className="my-8 rounded-[32px] bg-primary-green px-6 py-3 text-white">
              Go back home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound

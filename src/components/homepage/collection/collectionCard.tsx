import Image, { StaticImageData } from 'next/image'

export default function CardProduct({
  product,
}: {
  product: {
    name: string
    role: string
    about: string
    image: string
  }[]
}) {
  const mintpageUrl = process.env.MINTPAGE_URL

  return (
    <>
      {product.map((item, index) => {
        return (
          <div
            id="card-collection"
            key={index}
            className="rounded-2xl border border-neutral-60 bg-white p-4 duration-150 hover:border-primary-green tablet:rounded-[32px] tablet:p-6"
          >
            <div className="flex gap-6">
              <img
                src={item.image}
                alt="Icon"
                className="hidden size-[112px] rounded-2xl tablet:block tablet:size-[208px]"
              />
              <div className="flex w-full flex-col justify-between">
                <div className="mb-6">
                  <div className="flex flex-col tablet:flex-row tablet:flex-wrap tablet:items-center tablet:justify-between">
                    <h1 className="text-xl font-medium tablet:text-[32px] desktop:text-4xl">
                      {item.name}
                    </h1>
                    <span className="text-base font-normal tablet:text-right">
                      {item.role}
                    </span>
                  </div>
                  <p className="hidden tablet:mt-4 tablet:block tablet:text-base">
                    {item.about}
                  </p>
                </div>
                <a href={mintpageUrl} target="_blank" rel="noopener noreferrer">
                  <button className="w-full rounded-[32px] bg-primary-green px-4 py-2 duration-300 hover:bg-green-10 tablet:w-[104px] tablet:px-6 tablet:py-3">
                    <span className="text-base font-medium text-white">
                      Mint
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

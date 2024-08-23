import HeadingSection from '../headingSection'

export default function Roadmap() {
  const heading = {
    title: 'Roadmap',
    subtitle: 'This roadmap is the blueprint of our sustainable growth ahead',
  }

  const roadmapList = [
    {
      phase: 1,
      title: 'Phase One',
      bgColor: 'bg-khaki-90',
      content: [
        {
          item: 'Storyline Chapter I (First Collection Launch)',
        },
        {
          item: 'First Donation',
        },
        {
          item: 'Website Deployment',
        },
        {
          item: 'Strategic Organizational Partnership',
        },
        {
          item: 'Merchandises Launch',
        },
        {
          item: 'Limited Unique Desk-Size Collectibles',
        },
      ],
    },
    {
      phase: 2,
      title: 'Phase Two',
      bgColor: 'bg-khaki-80',
      content: [
        {
          item: 'Storyline Chapter II (Second Collection Launch)',
        },
        {
          item: 'Second Donation',
        },
        {
          item: 'Website Enhancement',
        },
        {
          item: 'Community Events',
        },
        {
          item: 'NFT Utility Exploration',
        },
        {
          item: 'Collaboration with Local Artists & Brands',
        },
        {
          item: 'More Strategic Organizational Partnership',
        },
        {
          item: 'Subsidiaries Preparation',
        },
      ],
    },
    {
      phase: 3,
      title: 'Phase Three',
      bgColor: 'bg-khaki-70',
      content: [
        {
          item: 'Storyline Chapter III (Third Collection Launch)',
        },
        {
          item: 'Third Donation',
        },
        {
          item: 'Impacting Community Project',
        },
        {
          item: 'Partnership with Key Individuals',
        },
        {
          item: 'NFT New Utility Launch',
        },
        {
          item: 'Subsidiaries Launch',
        },
      ],
    },
    {
      phase: 4,
      title: 'Phase Four',
      bgColor: 'bg-khaki-60',
      content: [
        {
          item: 'Metaverse Presence',
        },
        {
          item: 'Educational Platform for Environment',
        },
        {
          item: '(esp. Indonesia’s Environment)',
        },
        {
          item: 'Decentralized Autonomous Organization (DAO)',
        },
      ],
    },
  ]

  return (
    <div className="m-auto max-w-[360px] tablet:max-w-[736px] desktop:max-w-[calc(100%-200px)]">
      <HeadingSection heading={heading} />

      <div className="flex flex-col gap-4 tablet:hidden">
        {roadmapList.map((item, index) => {
          return (
            <div
              key={index}
              id="card"
              className={`${item.bgColor} flex flex-col items-center rounded-2xl px-4 py-6`}
            >
              <div className="mb-4 flex size-14 rounded-2xl bg-primary-green">
                <span className="m-auto text-2xl font-medium text-white">
                  {item.phase}
                </span>
              </div>

              <div className="mb-6 w-full text-center text-2xl font-medium">
                {item.title}
              </div>

              <div className="text-left">
                <ol className="ml-4 list-disc">
                  {item.content.map((item, index) => {
                    return (
                      <div key={index}>
                        <li className="desktop:text-base">{item.item}</li>
                      </div>
                    )
                  })}
                </ol>
              </div>
            </div>
          )
        })}
      </div>

      <div className="hidden grid-cols-2 grid-rows-2 gap-6 tablet:grid desktop:hidden">
        {roadmapList.map((item, index) => {
          return (
            <div
              key={index}
              id="card"
              className={`${item.bgColor} flex w-full flex-col items-center rounded-[32px] p-8`}
            >
              <div className="flex h-14 w-14 rounded-2xl bg-primary-green">
                <div className="m-auto text-2xl font-medium text-white">
                  {item.phase}
                </div>
              </div>

              <div className="my-6 text-center text-2xl font-medium">
                {item.title}
              </div>

              <div id="content" className="text-left">
                <ol className="ml-4 list-disc">
                  {item.content.map((item, index) => {
                    return (
                      <div key={index}>
                        <li className="text-base">{item.item}</li>
                      </div>
                    )
                  })}
                </ol>
              </div>
            </div>
          )
        })}
      </div>

      <div className="hidden desktop:m-auto desktop:flex desktop:flex-row desktop:justify-center desktop:gap-x-6">
        {roadmapList.map((item, index) => {
          return (
            <div
              key={index}
              id="card"
              className={`${item.bgColor} flex max-w-[268px] flex-col items-center gap-y-6 rounded-[32px] p-8`}
            >
              <div className="flex bg-primary-green desktop:h-14 desktop:w-14 desktop:rounded-2xl">
                <div className="m-auto text-white desktop:text-2xl desktop:font-medium">
                  {item.phase}
                </div>
              </div>

              <div className="text-center desktop:text-2xl desktop:font-medium">
                {item.title}
              </div>

              <div id="content" className="text-left">
                <ol className="list-disc desktop:ml-4">
                  {item.content.map((item, index) => {
                    return (
                      <div key={index}>
                        <li className="desktop:text-base">{item.item}</li>
                      </div>
                    )
                  })}
                </ol>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

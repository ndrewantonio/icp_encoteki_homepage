export default function HeadingSection({
  heading,
}: {
  heading: {
    title: string
    subtitle: string
    align?: string
  }
}) {
  return (
    <header
      className={`mb-6 ${heading.align ? heading.align : 'text-center'} tablet:mb-14 desktop:mb-14`}
    >
      <h1 className="mb-2 text-[32px] font-medium tablet:mb-3 tablet:text-5xl">
        {heading.title}
      </h1>
      <h2 className="m-auto text-base desktop:max-w-[570px]">
        {heading.subtitle}
      </h2>
    </header>
  )
}

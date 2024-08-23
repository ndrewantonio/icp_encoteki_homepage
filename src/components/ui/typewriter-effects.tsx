'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(''),
    }
  })
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`text-black`, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'flex justify-center space-x-1 py-4 tablet:py-6',
        className,
      )}
    >
      <motion.div
        className="overflow-hidden"
        initial={{
          width: '0%',
        }}
        whileInView={{
          width: 'fit-content',
        }}
        transition={{
          duration: 2,
          ease: 'linear',
          delay: 1,
        }}
      >
        <div
          className="text-3xl font-medium tablet:text-5xl desktop:text-6xl"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'block h-7 w-[4px] rounded-sm bg-primary-green xl:h-12',
          cursorClassName,
        )}
      ></motion.span>
    </div>
  )
}

'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

export const InfiniteMovingImages = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    path: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        )
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        id="moving-container"
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap items-center justify-center gap-10 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[150px] max-w-full flex-shrink-0"
            style={{
              background:
                'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
            }}
            key={idx}
          >
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute"
            ></div>
            <img
              src={item.path}
              alt="Icon"
              className="m-auto hidden w-[75px] tablet:block"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

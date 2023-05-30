import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

const Library = (): ReactElement => {
  return (
    <div className={`gallery-container -mr-px grid w-full grid-flow-row-dense content-start`}>
      {Array(200)
        .fill(null)
        .map((_, index) => {
          const seed = index + 1
          const mod = index % 9
          const height = 800
          let width = 800

          let size = 1
          if (mod === 2) {
            size = 2
            width = 1600
          } else if (mod === 5) {
            size = 3
            width = 2400
          }

          return (
            <div
              className={cn({
                'span-2': size === 2,
                'span-3': size === 3,
              })}
              key={seed}
            >
              <Image
                className="h-full w-full object-cover transition-transform duration-300"
                alt="Random image"
                width={width}
                height={height}
                src={`https://picsum.photos/seed/${seed}/${width}/${height}`}
                quality={100}
              />

              <Link className="absolute left-0 top-0 h-full w-full" href={`/view/${seed}`} />
            </div>
          )
        })}
    </div>
  )
}

export default Library

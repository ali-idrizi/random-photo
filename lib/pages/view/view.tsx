import { Heading } from '@/ui/heading'
import Image from 'next/image'
import { ReactElement } from 'react'

type ViewProps = {
  id: number
  withTitle?: boolean
}
export const View = ({ id, withTitle }: ViewProps): ReactElement => {
  return (
    <>
      {withTitle && <Heading className="p-8 text-3xl">Random Photo {id}</Heading>}

      <Image
        className="h-full w-full object-contain object-top transition-transform duration-300"
        alt="Random image"
        width={1400}
        height={800}
        src={`https://picsum.photos/seed/${id}/1400/800`}
        quality={100}
      />
    </>
  )
}

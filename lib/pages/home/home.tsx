import { Button } from '@/ui/button'
import { Heading } from '@/ui/heading'
import Link from 'next/link'
import { ReactElement } from 'react'

export const Home = (): ReactElement => {
  return (
    <main>
      <div className="relative -mt-16 flex h-screen grow flex-col items-stretch justify-center gap-8 p-2 !pt-16 sm:gap-10 md:p-6 lg:p-10">
        <div className="absolute left-0 top-0 -z-20 flex h-full w-full items-center justify-center overflow-hidden opacity-30">
          <div
            className="h-[40rem] w-[40rem] shrink-0 rounded-full blur-[100px]"
            style={{
              background:
                'radial-gradient(49.19% 88.28% at 72.99% 113.54%, rgba(93, 227, 236, 0.73) 0%, rgba(93, 227, 236, 0.1679) 59.78%, rgba(93, 227, 236, 0) 100%), linear-gradient(54.57deg, #862AB1 8.59%, rgba(185, 91, 230, 0) 80.49%), radial-gradient(118.75% 118.75% at 96.65% 74.22%, #308EE6 0%, rgba(48, 158, 230, 0) 73.91%), radial-gradient(114.51% 155.86% at 9.82% 10.94%, rgba(255, 85, 85, 0.7) 0%, rgba(255, 85, 85, 0.147) 61.98%, rgba(255, 85, 85, 0) 100%, #F2F5FA)',
              backgroundBlendMode: 'hard-light,darken,normal,normal,normal,normal',
            }}
          />
        </div>

        <div className="flex flex-col gap-[inherit] [text-shadow:0_0_20px_rgba(0,0,0,.4)]">
          <Heading className="text-center text-2xl sm:text-3xl lg:text-[2.5rem]">
            Need Random Photos?
          </Heading>
          <p className="text-md text-center lg:text-lg">
            Explore our library and get the best random photos ever!
          </p>
        </div>

        <div className="flex justify-stretch gap-2 justify-self-stretch max-sm:flex-col max-sm:px-[10%] sm:justify-center">
          <Button as={Link} href="/library" size="lg" className="shadow-lg">
            Get Random Photos Now
          </Button>
        </div>
      </div>
    </main>
  )
}

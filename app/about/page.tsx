import { Button } from '@/ui/button'
import Link from 'next/link'
import { ReactElement } from 'react'
import { addItem } from './form'

const About = (): ReactElement => {
  return (
    <div className="pb-6">
      <div className="relative isolate justify-center overflow-hidden border-t border-gray-700 bg-gray-900/75 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
          <p className="text-md mt-4 leading-8 text-gray-300 md:mt-6 md:text-lg">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
            sagittis vel nulla.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Button colorScheme="dark" size="lg">
              Get started
            </Button>
            <Link href="/" className="hover:underline">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="relative mt-16 h-80 w-[57rem] lg:mt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="App screenshot"
            width="1824"
            height="1080"
          />
        </div>
      </div>
      <form action={addItem}>
        <input className="bg-gray-800" name="test" type="text" />
        <Button type="submit">Add to Cart</Button>
      </form>
    </div>
  )
}

export default About

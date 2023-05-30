import { Button } from '@/ui/button'
import Link from 'next/link'
import { ReactElement } from 'react'

export const PricingButton = (): ReactElement => {
  return (
    <Button
      as={Link}
      href="/"
      colorScheme="secondary"
      className="ml-4 px-4 py-0 hover:shadow-xl hover:shadow-secondary-700/10"
    >
      Pricing
    </Button>
  )
}

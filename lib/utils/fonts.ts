import localFont from 'next/font/local'

export const displayFont = localFont({
  src: '../fonts/RobotoSlab.ttf',
  variable: '--font-display',
})

export const bodyFont = localFont({
  src: [
    {
      path: '../fonts/Poppins-Regular.ttf',
      weight: '400',
    },
    {
      path: '../fonts/Poppins-Medium.ttf',
      weight: '500',
    },
  ],
  variable: '--font-body',
})

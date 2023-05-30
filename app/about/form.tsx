'use server'

import { revalidatePath } from 'next/cache'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function addItem(formData: FormData): Promise<any> {
  console.log('formData', formData)
  // await new Promise((res) => setTimeout(res, 1000))

  revalidatePath('/about')

  return {
    status: 200,
    body: 'ok',
  }
}

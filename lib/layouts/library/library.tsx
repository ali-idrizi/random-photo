import { cn } from '@/utils/cn'
import { PropsWithChildren, ReactElement } from 'react'

export const LibraryLayout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <>
      <div className="flex">
        <aside
          className={cn(
            'sticky top-16 h-[calc(100vh-4rem)] w-12 shrink-0 overflow-y-auto border-r border-gray-800/25 bg-black/5 p-3 lg:w-60 xl:w-72',
            'categories-scrollbar',
          )}
        >
          {Array(36)
            .fill(null)
            .map((_, index) => (
              <p key={index} className="p-3 text-xs uppercase text-white/60">
                Category {index + 1}
              </p>
            ))}
        </aside>

        <main className="flex grow">{children}</main>
      </div>
    </>
  )
}

import { ReactElement } from 'react'

const Loading = (): ReactElement => {
  return (
    <div className="fixed left-0 top-0 z-50 bg-red-500" role="status">
      LOADING
    </div>
  )
}

export default Loading

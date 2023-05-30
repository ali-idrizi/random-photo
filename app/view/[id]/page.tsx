import { View } from '@/pages/view'
import { ReactElement } from 'react'

type ViewPageProps = {
  params: {
    id: string
  }
}

const ViewPage = ({ params }: ViewPageProps): ReactElement => {
  const { id } = params

  return <View withTitle id={parseInt(id, 10)} />
}

export default ViewPage

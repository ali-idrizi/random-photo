'use client'

import { View } from '@/pages/view'
import { Modal } from '@/ui/modal'
import { ReactElement } from 'react'

type ViewModalProps = {
  params: {
    id: string
  }
}

const ViewModal = ({ params }: ViewModalProps): ReactElement => {
  const { id } = params

  return (
    <Modal position="top" size="2xl" defaultPaddingSize="lg">
      <Modal.Header title={`Random Photo ${id}`} />

      <Modal.Section paddingOptions={{ size: 'none' }}>
        <View id={parseInt(id, 10)} />
      </Modal.Section>
    </Modal>
  )
}

export default ViewModal

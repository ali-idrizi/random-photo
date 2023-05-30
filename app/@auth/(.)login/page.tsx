'use client'

import { Modal } from '@/ui/modal'
import { ReactElement } from 'react'

const Login = (): ReactElement => {
  return (
    <Modal position="top" size="lg">
      <Modal.Header className="flex-grow" title="Login" />

      <Modal.Section>Email Address</Modal.Section>
      <Modal.Section>Password</Modal.Section>
    </Modal>
  )
}

export default Login

import React from 'react';
import { Button } from '../interface';

const ContactButton = () => {
  return (
    <Button>
      <a
        className="w-full h-full"
        href="mailto:example@example.com?subject=Contact&body=Hello, I would like to..."
      >
        Contact us
      </a>
    </Button>
  )
}

export default ContactButton;
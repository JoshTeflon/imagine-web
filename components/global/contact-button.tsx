"use client";

import React from 'react';
import { Button } from '../interface';

const ContactButton: React.FC = () => {
  return (
    <Button
      className="hover:-translate-y-0.5 hover:shadow-lg active:-translate-y-[1px] active:shadow-md transition-all duration-200 ease-in-out"
      onClick={() => window.location.href = 'mailto:example@example.com?subject=Contact&body=Hello, I would like to...'}
    >Contact us</Button>
  )
}

export default ContactButton;
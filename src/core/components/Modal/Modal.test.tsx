import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Modal, ModalTrigger, ModalContent, ModalTitle } from './Modal';

describe('Modal component', () => {
  it('renders a Radix dialog trigger', () => {
    const { container } = render(
      <Modal>
        <ModalTrigger>Open</ModalTrigger>
        <ModalContent>
          <ModalTitle>Test Modal</ModalTitle>
        </ModalContent>
      </Modal>
    );
    const btn = container.querySelector('button');
    expect(btn).toBeInTheDocument();
    expect(btn?.getAttribute('aria-haspopup')).toBe('dialog');
  });
});

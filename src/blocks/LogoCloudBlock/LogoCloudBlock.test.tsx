import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { LogoCloudBlock } from './LogoCloudBlock';

describe('LogoCloudBlock component', () => {
  const mockLogos = [
    { src: '/logo1.png', alt: 'Logo 1' },
    { src: '/logo2.png', alt: 'Logo 2' },
  ];

  it('renders title and logos', () => {
    const { getByText, getAllByRole } = render(
      <LogoCloudBlock 
        title="Trusted by" 
        logos={mockLogos}
      />
    );
    expect(getByText('Trusted by')).toBeInTheDocument();
    expect(getAllByRole('img')).toHaveLength(2);
  });
});

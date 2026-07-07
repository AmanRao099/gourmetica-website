import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Image } from './Image';

describe('Image component', () => {
  it('renders an image with required alt text', () => {
    const { container } = render(<Image src="/test.jpg" alt="Test image" width={100} height={100} />);
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img?.getAttribute('alt')).toBe('Test image');
  });
});

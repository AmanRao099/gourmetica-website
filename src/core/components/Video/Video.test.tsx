import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Video } from './Video';

describe('Video component', () => {
  it('renders a video element', () => {
    const { container } = render(
      <Video src="test.mp4" />
    );
    const video = container.querySelector('video');
    expect(video).toBeInTheDocument();
    expect(video?.getAttribute('src')).toBe('test.mp4');
  });
});

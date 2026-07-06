import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { HeroBlock } from './HeroBlock';

describe('HeroBlock component', () => {
  it('renders title, subtitle, and description', () => {
    const { getByText } = render(
      <HeroBlock 
        title="Test Title" 
        subtitle="Test Subtitle"
        description="Test description"
      />
    );
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Subtitle')).toBeInTheDocument();
    expect(getByText('Test description')).toBeInTheDocument();
  });

  it('renders actions', () => {
    const { getByText } = render(
      <HeroBlock 
        title="Title" 
        actions={<button>Click Me</button>}
      />
    );
    expect(getByText('Click Me')).toBeInTheDocument();
  });
});

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { SectionHeaderBlock } from './SectionHeaderBlock';

describe('SectionHeaderBlock component', () => {
  it('renders title, subtitle, and description', () => {
    const { getByText } = render(
      <SectionHeaderBlock 
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
      <SectionHeaderBlock 
        title="Title" 
        actions={<button>Click Me</button>}
      />
    );
    expect(getByText('Click Me')).toBeInTheDocument();
  });
});

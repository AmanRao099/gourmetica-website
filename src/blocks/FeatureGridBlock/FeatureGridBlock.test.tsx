import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { FeatureGridBlock } from './FeatureGridBlock';

describe('FeatureGridBlock component', () => {
  const mockFeatures = [
    { title: 'Feature 1', description: 'Desc 1' },
    { title: 'Feature 2', description: 'Desc 2' },
  ];

  it('renders title and features', () => {
    const { getByText } = render(
      <FeatureGridBlock 
        title="Features" 
        features={mockFeatures}
      />
    );
    expect(getByText('Features')).toBeInTheDocument();
    expect(getByText('Feature 1')).toBeInTheDocument();
    expect(getByText('Feature 2')).toBeInTheDocument();
  });
});

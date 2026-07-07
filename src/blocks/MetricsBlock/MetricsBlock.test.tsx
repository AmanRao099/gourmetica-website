import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MetricsBlock } from './MetricsBlock';

describe('MetricsBlock component', () => {
  const mockMetrics = [
    { label: 'Active Users', value: '10K+' },
    { label: 'Recipes', value: '500+' },
  ];

  it('renders title and metrics', () => {
    const { getByText } = render(
      <MetricsBlock 
        title="Our Impact" 
        metrics={mockMetrics}
      />
    );
    expect(getByText('Our Impact')).toBeInTheDocument();
    expect(getByText('Active Users')).toBeInTheDocument();
    expect(getByText('10K+')).toBeInTheDocument();
  });
});

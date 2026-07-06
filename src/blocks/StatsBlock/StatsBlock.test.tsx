import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { StatsBlock } from './StatsBlock';

describe('StatsBlock component', () => {
  const mockStats = [
    { label: 'Active Users', value: '10K+' },
    { label: 'Recipes', value: '500+' },
  ];

  it('renders title and stats', () => {
    const { getByText } = render(
      <StatsBlock 
        title="Our Impact" 
        stats={mockStats}
      />
    );
    expect(getByText('Our Impact')).toBeInTheDocument();
    expect(getByText('Active Users')).toBeInTheDocument();
    expect(getByText('10K+')).toBeInTheDocument();
  });
});

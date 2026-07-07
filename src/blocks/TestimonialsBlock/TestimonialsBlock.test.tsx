import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { TestimonialsBlock } from './TestimonialsBlock';

describe('TestimonialsBlock component', () => {
  const mockTestimonials = [
    { quote: 'Amazing experience.', author: { name: 'John Doe', role: 'Chef' } },
    { quote: 'Loved the recipes.', author: { name: 'Jane Doe', company: 'Foodie Inc.' } },
  ];

  it('renders title and testimonials', () => {
    const { getByText } = render(
      <TestimonialsBlock 
        title="What they say" 
        testimonials={mockTestimonials}
      />
    );
    expect(getByText('What they say')).toBeInTheDocument();
    expect(getByText('"Amazing experience."')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Chef')).toBeInTheDocument();
  });
});

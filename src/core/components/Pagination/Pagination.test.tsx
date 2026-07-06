import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from './Pagination';

describe('Pagination component', () => {
  it('renders a nav with aria-label', () => {
    const { container } = render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
    expect(nav?.getAttribute('aria-label')).toBe('pagination');
  });
});

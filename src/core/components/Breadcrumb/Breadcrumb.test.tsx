import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from './Breadcrumb';

describe('Breadcrumb component', () => {
  it('renders a nav with aria-label', () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
    expect(nav?.getAttribute('aria-label')).toBe('breadcrumb');
  });
});

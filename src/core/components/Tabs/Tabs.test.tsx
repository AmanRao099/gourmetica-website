import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

describe('Tabs component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Tabs defaultValue="1">
        <TabsList>
          <TabsTrigger value="1">One</TabsTrigger>
          <TabsTrigger value="2">Two</TabsTrigger>
        </TabsList>
        <TabsContent value="1">Content One</TabsContent>
        <TabsContent value="2">Content Two</TabsContent>
      </Tabs>
    );
    const triggers = container.querySelectorAll('[role="tab"]');
    expect(triggers.length).toBe(2);
  });
});

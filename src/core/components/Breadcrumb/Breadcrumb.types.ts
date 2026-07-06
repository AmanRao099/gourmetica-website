import * as React from 'react';

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
  separator?: React.ReactNode;
}
export interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<"li"> {}
export interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  asChild?: boolean;
}

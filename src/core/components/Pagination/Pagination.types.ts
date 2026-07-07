import * as React from 'react';
import { ButtonProps } from '../Button';

export interface PaginationProps extends React.ComponentPropsWithoutRef<"nav"> {}
export interface PaginationContentProps extends React.ComponentPropsWithoutRef<"ul"> {}
export interface PaginationItemProps extends React.ComponentPropsWithoutRef<"li"> {}
export interface PaginationLinkProps extends React.ComponentPropsWithoutRef<"a">, Pick<ButtonProps, "size"> {
  isActive?: boolean;
}

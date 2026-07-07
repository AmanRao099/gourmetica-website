import React from 'react';

/**
 * Standardizes the props for all atomic Core components.
 */
export interface ComponentContract {
  /** Modifies the visual style (e.g., 'primary', 'secondary') */
  variant?: string;
  /** Modifies the physical dimensions (e.g., 'sm', 'lg') */
  size?: string;
  /** Applies contextual tone (e.g., 'success', 'destructive') */
  tone?: string;
  /** Optional overrides (strictly use with cn) */
  className?: string;
  /** Standard React children */
  children?: React.ReactNode;
}

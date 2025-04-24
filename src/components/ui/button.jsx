import React from 'react';
import { cn } from '../../lib/utils';

export function Button({
  children,
  className = '',
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    default: 'bg-emerald-500 text-white hover:bg-emerald-600',
    outline:
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3',
    lg: 'h-11 px-8',
    icon: 'h-10 w-10',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: classes,
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

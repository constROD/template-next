import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const BaseInput = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    ref={ref}
    {...props}
    id={props.id ?? props.label}
    data-testid={props.id ?? props.label}
  />
));

BaseInput.displayName = 'BaseInput';

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, ...props }, ref) => {
  if (!label) {
    return <BaseInput {...props} ref={ref} />;
  }

  return (
    <div className="flex flex-col">
      <label htmlFor={props.id ?? label} className="text-sm font-medium text-muted-foreground">
        {label}
      </label>
      <BaseInput {...props} ref={ref} label={label} />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };

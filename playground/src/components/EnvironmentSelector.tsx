import type { AccruPayParams } from '@accrupay/react';

type AccruPayEnvironment = NonNullable<AccruPayParams['environment']>;

interface EnvironmentSelectorProps {
  environment: AccruPayEnvironment;
  onChange: (env: AccruPayEnvironment) => void;
  disabled?: boolean;
}

export function EnvironmentSelector({
  environment,
  onChange,
  disabled,
}: EnvironmentSelectorProps) {
  return (
    <div className="control-group">
      <label htmlFor="environment" data-testid="environment-label">
        Environment
      </label>
      <select
        id="environment"
        value={environment}
        onChange={e => onChange(e.target.value as AccruPayEnvironment)}
        data-testid="select-environment"
        className="control-input"
        disabled={disabled}
      >
        <option value="sandbox">Sandbox</option>
        <option value="production">Production</option>
      </select>
    </div>
  );
}

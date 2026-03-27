import { useEffect, useId, useMemo } from 'react';
import { useNuvei } from '../context';
import { AccruPayFieldName } from '../../../types';

interface NuveiFieldProps {
  fieldName: AccruPayFieldName;
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
}

export function NuveiField({ fieldName, className, style }: NuveiFieldProps) {
  const { registerField, unregisterField } = useNuvei();
  const reactId = useId();

  const id = useMemo(
    () => `accrupay-nuvei-${fieldName}-${reactId.replace(/:/g, '-')}`,
    [fieldName, reactId],
  );

  useEffect(() => {
    registerField(fieldName, id);
    return () => {
      unregisterField(fieldName);
    };
  }, [registerField, unregisterField, id, fieldName]);

  return <div id={id} className={className} style={style} />;
}

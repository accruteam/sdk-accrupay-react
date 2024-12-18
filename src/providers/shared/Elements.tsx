import { SubmitPaymentCallbacks } from "../../types";

export type SubmitBtnProps = React.ButtonHTMLAttributes<Omit<HTMLButtonElement, 'onClick'>> & Partial<SubmitPaymentCallbacks> & { text: string, onSubmit?: () => Promise<void> | void, submitPayment: (callbacks: SubmitPaymentCallbacks) => void };

export function SubmitBtn(props: SubmitBtnProps) {
  const { text, onSuccess, onError, onComplete, submitPayment, ...rest } = props;

  return <button onClick={async () => {
    if (rest.onSubmit) {
      await rest.onSubmit();
    }

    return submitPayment({
      onSuccess: onSuccess || (() => {}),
      onError: onError || (() => {}),
      onComplete: onComplete || (() => {}),
    });
  }} {...rest}>{text}</button>
}

export function CardHolderName(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { onChange, ...rest } = props;
  return <input onChange={onChange} {...rest} />
}

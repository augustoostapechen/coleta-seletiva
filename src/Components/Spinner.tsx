interface ISpinnerProps {
  className: string
}

export const Spinner = ({ className }: ISpinnerProps) => (
  <div className={className} role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
)

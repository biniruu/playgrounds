import './button.css'

interface ButtonProps {
  type: 'primary' | 'default' | 'dashed' | 'text' | 'link'
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

export const AntdButton = ({ type = 'primary', size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={['antd-button', 'storybook-button', `storybook-button--${size}`, type].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}

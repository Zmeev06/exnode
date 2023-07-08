import styles from './index.module.scss'

interface TextButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  width: number
}

const TextButton = ({text, className, onClick, width} : TextButtonProps) => {
  return (
    <div className={`${styles.main} ${className}`} onClick={onClick} style={{width: width}}>
      <p>{text}</p>
    </div>
)
}
export default TextButton
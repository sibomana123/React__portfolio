import './card.css'

const Card = ({className, children, onClick}) => {
  return (
    <article className={`card ${className}`} onClick={onClick}>
      {children}
    </article>
  )
}

export default Card
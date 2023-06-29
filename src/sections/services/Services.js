import Card from '../../components/Card'
import data from './data'
import './serrvice.css'

const Services = () => {
  return (
    <section id="service">
      <h2>My Services</h2>
      <p>I give You all in The services Below</p>
      <div className="container services__container">
        {
          data.map(item=>(
            <Card key={item.id} className='service light'>
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
      </section>
  )
}

export default Services
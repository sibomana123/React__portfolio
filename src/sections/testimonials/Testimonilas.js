import avat1 from '../../assets/avat1.jpg'
import avat2 from '../../assets/avat2.jpg'
import avat3 from '../../assets/avat3.jpg'
import avat4 from '../../assets/avat4.jpg'
import avat5 from '../../assets/avat5.jpg'
import avat6 from '../../assets/avat6.jpg'
import avat7 from '../../assets/avat7.jpg'


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import './testimonials.css'



const data = [
  {
    id: 1,
    avat: avat1,
    name: "Emmanuel",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sed officiis illum soluta distinctio! Earum assumenda cupiditate unde natus minus tempora laborum? Dignissimos labore perspiciatis quae quas. Quasi, neque deserunt minus totam numquam maiores labore id aut harum sunt dolorem perferendis saepe explicabo autem? Eos veniam harum tempora earum veritatis libero delectus ullam fuga",
  },

  {
    id: 2,
    avat: avat2,
    name: "Patrick",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sed officiis illum soluta distinctio! Earum assumenda cupiditate unde natus minus tempora laborum? Dignissimos labore perspiciatis quae quas. Quasi, neque deserunt minus totam numquam maiores labore id aut harum sunt dolorem perferendis saepe explicabo autem? Eos veniam harum tempora earum veritatis libero delectus ullam fuga",
  },

  {
    id: 3,
    avat: avat3,
    name: "Grace",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sed officiis illum soluta distinctio! Earum assumenda cupiditate unde natus minus tempora laborum? Dignissimos labore perspiciatis quae quas. Quasi, neque deserunt minus totam numquam maiores labore id aut harum sunt dolorem perferendis saepe explicabo autem? Eos veniam harum tempora earum veritatis libero delectus ullam fuga",
  },

  {
    id: 4,
    avat: avat4,
    name: "Papi",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sed officiis illum soluta distinctio! Earum assumenda cupiditate unde natus minus tempora laborum? Dignissimos labore perspiciatis quae quas. Quasi, neque deserunt minus totam numquam maiores labore id aut harum sunt dolorem perferendis saepe explicabo autem? Eos veniam harum tempora earum veritatis libero delectus ullam fuga",
  },

  {
    id: 5,
    avat: avat5,
    name: "karl",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sed officiis illum soluta distinctio! Earum assumenda cupiditate unde natus minus tempora laborum? Dignissimos labore perspiciatis quae quas. Quasi, neque deserunt minus totam numquam maiores labore id aut harum sunt dolorem perferendis saepe explicabo autem? Eos veniam harum tempora earum veritatis libero delectus ullam fuga",
  },

  {
    id: 6,
    avat: avat6,
    name: "Gentille",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sed officiis illum soluta distinctio! Earum assumenda cupiditate unde natus minus tempora laborum? Dignissimos labore perspiciatis quae quas. Quasi, neque deserunt minus totam numquam maiores labore id aut harum sunt dolorem perferendis saepe explicabo autem? Eos veniam harum tempora earum veritatis libero delectus ullam fuga",
  },

  {
    id: 7,
    avat: avat7,
    name: "Fifi",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sed officiis illum soluta distinctio! Earum assumenda cupiditate unde natus minus tempora laborum? Dignissimos labore perspiciatis quae quas. Quasi, neque deserunt minus totam numquam maiores labore id aut harum sunt dolorem perferendis saepe explicabo autem? Eos veniam harum tempora earum veritatis libero delectus ullam fuga",
  },
];

const Testimonilas = () => {
  return (
    <section id="testimonial">
      <h5 className='h5'>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        pagination={{clickable:true}}
        spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination]}
        className="container testimonials__container mySwiper"
      >
        {data.map(({ avat, id, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avat">
                <img src={avat} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonilas
import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonials = () => {
    const reviews = [

        {
            _id: 1,
            name: "Wilson Harry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            location: "california"
        },
        {
            _id: 2,
            name: "Winson Harry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            location: "california"
        },
        {
            _id: 3,
            name: "Wilson Harry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            location: "california"
        },
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div><h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className="text-3xl">What our Patients say</h2>
                </div>
                <div>
                    <img src={quote} alt="" className='w-24 lg:w-48 ' />
                </div>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;
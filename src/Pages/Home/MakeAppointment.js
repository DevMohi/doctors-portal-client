import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>

            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>

            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>

                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi ipsam dolorem natus dolore alias! Rerum, libero at minima voluptatibus voluptas et repellendus veniam consequuntur, molestias quod, esse delectus? Blanditiis eveniet excepturi ipsum quae est quod, laborum fugit modi hic.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
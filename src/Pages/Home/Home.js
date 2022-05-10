import React from 'react';
import Banner from './Banner';
import Care from './Care';
import Footer from './Footer';
import Info from './Info';
import Login from './Login';
import MakeAppointment from './MakeAppointment';
import Service from './Service';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info ></Info>
            <Services></Services>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Login></Login>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Care from './Care';
import Info from './Info';
import Login from './Login';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
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
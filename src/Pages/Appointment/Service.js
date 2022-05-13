import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary m-auto ">{name}</h2>
                <p>{
                    slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>Try Another Date</span>
                }
                </p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} Available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" className="btn btn-sm bg-gradient-to-r from-secondary to-primary btn-secondary text-white uppercase"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;
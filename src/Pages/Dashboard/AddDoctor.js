import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '312cec85709bcf242a167c63ffe31854';
    /* 
        3 ways to store images : 
        1.Third party storage : img bb // Practice project er jnno free tikase not for private
        2.Your own storage in your own server
        3.Database: Mongodb

        YUP: to validate file  Search : YUP file validation for react form hook
    */

    const { data: services, isLoading } = useQuery('services', () => fetch('https://mighty-crag-01476.herokuapp.com/service').then(res => res.json()))

    const onSubmit = async data => {
        console.log('data', data)
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        // remove the expiration& from the url 
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img
                    }
                    //send to your database
                    fetch('https://mighty-crag-01476.herokuapp.com/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log('doctor', inserted) 
                            // inserted id tah console log e patai bacckend theke 
                            if (inserted.insertedId) {
                                toast.success('Doctor added succesfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the doctor')
                            }
                        })
                }
                console.log('imgbb result', result)
            })
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl'>Add A new Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' &&
                            <span className="label-text-alt text-red-500">{errors.name.message}</span>
                        }
                    </label>
                </div>
                {/* email field  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: 'Provide a valid email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' &&
                            <span className="label-text-alt text-red-500">{errors.email.message}</span>
                        }
                        {errors.email?.type === 'pattern' &&
                            <span className="label-text-alt text-red-500">{errors.email.message}</span>
                        }

                    </label>
                </div>
                {/* password field  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">speciality</span>
                    </label>
                    <select {...register('speciality')} className="select w-full max-w-xs input-bordered">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>

                </div>

                {/* Photo*/}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' &&
                            <span className="label-text-alt text-red-500">{errors.name.message}</span>
                        }
                    </label>
                </div>

                <input type="submit" className='btn w-full max-w-xs' value='ADD' />
            </form>
        </div>
    );
};

export default AddDoctor;
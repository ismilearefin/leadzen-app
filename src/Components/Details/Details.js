import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import backgroundImg from '../../assets/background.jpg'

const Details = () => {
    const userDetails = useLoaderData();
    console.log(userDetails)
    return (
        <div className="App bg-cover bg-center bg-no-repeat h-screen grid items-center" style={{backgroundImage:`url(${backgroundImg})`}}>
            <div className='relative border w-3/4 min-h-[400px] mx-auto rounded-lg bg-white'>
                <div className='p-2'>
                    <div className='flex gap-2'>
                        <p className='font-bold'>ID</p>
                        <p>{userDetails.id}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='font-bold'>Name</p>
                        <p>{userDetails.name}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='font-bold'>User Name</p>
                        <p>{userDetails.username}</p>
                    </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Email</p>
                    <p>{userDetails.email}</p>
                </div>
                </div>
               <div className='flex justify-evenly gap-x-2'>
               <div className='border w-1/2 p-3'>
                    <p className='text-xl font-bold'>Address</p>
                   <div className='flex justify-between text-left'>
                   <div className=''>
                        <p><span className='font-medium'>Street :</span> {userDetails.address.street}</p>
                        <p><span className='font-medium'>Suite :</span> {userDetails.address.suite}</p>
                        <p><span className='font-medium'>City :</span> {userDetails.address.city}</p>
                        <p><span className='font-medium'>ZipCode :</span> {userDetails.address.zipcode}</p>
                    </div>
                    <div>
                        <p className='font-medium'>Geo </p>
                        <div>
                            <p><span className='font-medium'>lat :</span> {userDetails.address.geo.lat}</p>
                            <p><span className='font-medium'>lng :</span> {userDetails.address.geo.lng}</p>
                        </div>
                    </div>
                   </div>
                </div>
                
                <div className='border w-1/2 p-3'>
                    <p className='text-xl font-bold'>Company</p>
                    <div>
                        <div className='text-left'>
                        <p className='font-bold'>Name</p>
                        <p>{userDetails.company.name}</p>
                        <p className='font-bold'>CatchPhrase</p>
                        <p>{userDetails.company.catchPhrase}</p>
                        <p className='font-bold'>bs</p>
                        <p>{userDetails.company.bs}</p>
                        </div>
                    </div>
                </div>
               </div>
                <div className='flex justify-evenly absolute bottom-0 border w-full py-5 bg-slate-200'>
                    <div>
                        <p className='font-bold'>Phone</p>
                        <p>{userDetails.phone}</p>
                    </div>
                    <div>
                        <p className='font-bold'>Website</p>
                        <p >{userDetails.website}</p>
                    </div>
                </div>
                
            </div>
            <div>
                <Link to='/' className='text-xl text-white font-semibold border px-4 py-1 hover:bg-rose-500'>Go Back</Link>
            </div>
        </div>
    );
};

export default Details;
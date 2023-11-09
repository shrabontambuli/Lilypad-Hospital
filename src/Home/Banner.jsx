import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='container mx-auto mt-40'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-3 md:px-0'>
                <div>
                    <h1 className='text-4xl md:text-5xl font-medium'><span className='text1'>We care</span><br />about your health</h1>
                    <p className='text-[#A7A7A7] mt-8'>Good health is the state of mental, physical and social well being and it does not just mean absence of diseases.</p>
                    <div className='mt-10 flex items-center'>
                        <button className='bg1 flex items-center text-white px-6 py-3 rounded-xl me-5 md:me-10'>Book an appointment <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 20" fill="none">
                            <path d="M22.1281 1.49323L30.3178 9.74499M1.65381 9.74499H30.3178H1.65381ZM22.1281 17.9968L30.3178 9.74499L22.1281 17.9968Z" stroke="white" stroke-width="2.60582" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></button>
                        <div className='flex items-center'>
                            <div className='rounded-full border-2 border-[#C7C7C7] p-2 me-4'>
                                <button className='bg1 p-2 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                                    <path d="M6.03442 3.83627V17.734L16.8558 10.7851L6.03442 3.83627Z" stroke="white" stroke-width="1.73721" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></button>
                            </div>
                            <h6 className='font-semibold text-lg'>Watch videos</h6>
                        </div>
                    </div>
                    <div className='flex mt-16'>
                        <p className='font-semibold md:me-5'>Become member of our hospital community?</p>
                        <p><Link className='text1 font-semibold'>SignUp</Link></p>
                    </div>
                </div>
                <div>
                    <div className='bg2 flex justify-center items-center w-80 py-4 absolute z-10 top-64'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <path d="M11.7313 21.5392C17.1414 21.5392 21.5272 17.1534 21.5272 11.7432C21.5272 6.33307 17.1414 1.94727 11.7313 1.94727C6.3211 1.94727 1.9353 6.33307 1.9353 11.7432C1.9353 17.1534 6.3211 21.5392 11.7313 21.5392Z" stroke="#4200FF" stroke-width="3.47443" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M27.1248 27.1368L18.7283 18.7403" stroke="#4200FF" stroke-width="3.47443" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className='ms-4'>
                            <h3 className='text-xl font-semibold'>Well Qualified doctors</h3>
                            <p className='mt-1 text-[#A7A7A7]'>Treat with care</p>
                        </div>
                    </div>
                    <div className='bg2 flex justify-center items-center w-80 py-4 absolute z-30 bottom-2/4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="37" viewBox="0 0 30 37" fill="none">
                            <path d="M9.92066 6.09964H6.32215C5.36776 6.09964 4.45247 6.47877 3.77761 7.15362C3.10276 7.82847 2.72363 8.74377 2.72363 9.69816V31.2893C2.72363 32.2436 3.10276 33.1589 3.77761 33.8338C4.45247 34.5086 5.36776 34.8878 6.32215 34.8878H24.3147C25.2691 34.8878 26.1844 34.5086 26.8593 33.8338C27.5341 33.1589 27.9132 32.2436 27.9132 31.2893V9.69816C27.9132 8.74377 27.5341 7.82847 26.8593 7.15362C26.1844 6.47877 25.2691 6.09964 24.3147 6.09964H20.7162" stroke="#4200FF" stroke-width="3.47443" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.1179 2.50113H13.5194C11.532 2.50113 9.9209 4.11224 9.9209 6.09964C9.9209 8.08705 11.532 9.69816 13.5194 9.69816H17.1179C19.1053 9.69816 20.7164 8.08705 20.7164 6.09964C20.7164 4.11224 19.1053 2.50113 17.1179 2.50113Z" stroke="#4200FF" stroke-width="3.47443" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.1179 25.8915H20.7164M9.9209 18.6945H9.93889H9.9209ZM17.1179 18.6945H20.7164H17.1179ZM9.9209 25.8915H9.93889H9.9209Z" stroke="#4200FF" stroke-width="3.47443" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className='ms-4'>
                            <h3 className='text-xl font-semibold'>Book an appointment</h3>
                            <p className='mt-1 text-[#A7A7A7]'>Online appointment</p>
                        </div>
                    </div>
                    <div className='bg3 rounded-3xl flex justify-center items-center w-64 py-4 absolute z-30 bottom-2/4 right-64 border border-[#F4DF73]'>
                        <div className='me-4'>
                            <h3 className='text-xl font-bold'>Contact no</h3>
                            <h3 className='text-xl font-semibold'>+9715123871325</h3>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M3.78579 0.84967H9.19624L11.9015 7.61273L8.51993 9.64165C9.96852 12.5789 12.3458 14.9561 15.283 16.4047L17.3119 13.0232L24.075 15.7284V21.1389C24.075 21.8563 23.79 22.5444 23.2826 23.0517C22.7753 23.5591 22.0872 23.8441 21.3697 23.8441C16.0936 23.5234 11.1172 21.2829 7.37945 17.5452C3.64174 13.8075 1.4012 8.83108 1.08057 3.55489C1.08057 2.83742 1.36558 2.14934 1.87291 1.64201C2.38024 1.13468 3.06832 0.84967 3.78579 0.84967" stroke="#4B4B4B" stroke-width="1.43715" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className='bdr1 rounded-full w-8/12 h-[500px]  mx-auto relative'>
                        <div className='bg1 rounded-full w-96 h-96 mx-auto mt-8'></div>
                    </div>
                    <img className='absolute w-4/12 top-24 right-60 z-20' src="/images/b3ef1573a87a2c0dbd2aad837ee24cd2.png" alt="" />
                </div>
            </div>
            <div className='bdr2 py-8 w-9/12 lg:-mt-[102px]'>
                <p className='font-semibold ms-14 mb-5'>Find a doctor</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto '>
                    <div><input type="text" placeholder="Name of Doctor" className="input input-bordered w-full max-w-xs" /></div>
                    <div><input type="text" placeholder="Speciality" className="input input-bordered w-full max-w-xs" /></div>
                    <div className='flex items-center justify-around'>
                        <p className='text-lg font-semibold'>Availability</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="29" viewBox="0 0 49 29" fill="none">
                            <rect x="0.33667" y="0.367317" width="48.642" height="27.7954" rx="13.8977" fill="#4200FF" />
                            <circle cx="35.081" cy="14.265" r="10.4233" fill="white" />
                        </svg>
                        <button className='px-8 py-3 rounded-2xl me-4 lg:me-7 bg-[#4200FF] text-white'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
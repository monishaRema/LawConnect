import React from 'react';
import bannerBg from '../../assets/banner-img-1.png'

const Banner = () => {
    return (
        <section className='py-15'>
            <div className="my-container">
                <div className={`py-40 px-5 bannerBg rounded-2xl`} >
                    <div className="content max-w-[960px] mx-auto text-center">
                        <h1 className="text-5xl font-black text-white mb-6 leading-16">
                        It avoids subjective claims or exaggeration that might raise red flags legally
                        </h1>
                        <p className="text-base text-gray-300 font-medium">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
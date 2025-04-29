import React from 'react';
import MainButton from '../MainButton';
import Image from 'next/image';
import HeroImage from '../../../../public/images/hero-image.svg'

const Hero = () => {
    return (
        <>
        <section className='hero lg:mt-[145px] mt-[77px]'>
            <div className="container flex flex-col items-center lg:flex-row lg:justify-between lg:gap-[30px] m-auto gap-[42px] ">
                <div className="hero__info flex flex-col md:items-start gap-[26.5px] ">
                    <h1 className='font-bold text-[25px] md:text-[60px] text-center md:text-base '>Zo'r jihozlar bilan <br className='md:block hidden' /> sarguzashtlarni <br className='md:block hidden' /> kashf eting</h1>
                    <span className='text-center text-[#00000099] font-normal'>
                    Sarguzasht ishqibozlari uchun moʻljallangan ochiq havoda kerakli <br className='md:block hidden' />
                     jihozlarimizni kashf eting. Yuqori sifatli chodirlardan qulay lager <br className='md:block hidden' />
                      anjomlarigacha, hammasi sizning tajribangizni yuksaltirish uchun.
                    </span>
                    <MainButton className='py-[10px] items-center md:mr-auto font-medium md:px-[58.5px]' >
                    Xarid qiling
                    </MainButton>
                    <div className='mt-[6px] m-auto flex gap-[15px] items-center'>
                        <div className='flex flex-col pr-[15px] border-r border-[#0000001A]'>
                            <h2 className='font-bold text-[24px]'>
                                200
                                <span className='text-main'>+</span>
                            </h2>
                            <span className='text-[#00000099]'>Xalqaro brendlar</span>
                        </div>
                        <div className='flex flex-col pr-[15px] border-r border-[#0000001A]'>
                            <h2 className='font-bold text-[24px]'>
                                2000
                                <span className='text-main'>+</span>
                            </h2>
                            <span className='text-[#00000099]'>Yuqori Sifatli Mahsulotlar</span>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='font-bold text-[24px]'>
                            30,000
                                <span className='text-main'>+</span>
                            </h2>
                            <span className='text-[#00000099]'>Baxtli mijozlar</span>
                        </div>
                    </div>
                </div>
                <div className="hero__img">
                    <Image src={HeroImage} alt='Hero image' />
                </div>
            </div>
        </section>
        </>
    );
}

export default Hero;

"use client";
import Slider from "react-slick";
import Image from "next/image";
import bannerone from "@/assets/img/banner/b_black1.jpg";
import bannertwo from "@/assets/img/banner/b_exotic.jpg";
import bannerthree from "@/assets/img/banner/b_white2.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import { CosmeticBannerText, ClothesBannerText, SalonBannerText } from "./BannerText";


const Banner = () => {
    const NextArrow = (props:any) => {
        const {onClick} = props;
        return (
            <div className="p-3 bg-slate-100 hover:text-blue-600 hover:bg-white cursor duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-5 top-1/2" onClick={onClick}>
                <PiCaretLeftLight />
            </div>
        );
    };
    const PrevArrow = (props:any) => {
        const {onClick} = props;
        return (
            <div className="p-3 bg-slate-100 hover:text-blue-600 hover:bg-white cursor duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-5 top-1/2" onClick={onClick}>
                <PiCaretRightLight />
            </div>
        )
    };
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="relative">
            <Slider {...settings}>
                <div className="w-full h-full relative">
                    <Image src={bannerone} alt="bannerone" className="w-full h-full relative overflow-hidden" />
                    <CosmeticBannerText title="Cosmetics" />
                </div>
                <div className="w-full h-full relative">
                    <Image src={bannertwo} alt="bannertwo" className="w-full h-full relative overflow-hidden" />
                    <ClothesBannerText title="Clothes" />
                </div>
                <div className="w-full h-full relative">
                    <Image src={bannerthree} alt="bannerthree" className="w-full h-full relative overflow-hidden left-1/4" />
                    <SalonBannerText title="Salon & Spa" />
                </div>
            </Slider>
            {/* <div className="absolute w-full h-40 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10"/> */}
        </div>
    );
};

export default Banner;
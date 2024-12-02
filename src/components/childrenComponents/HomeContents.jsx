
import banner from "../../assets/banner.jpg";
const HomeContents = () => {
    return (
        <div className="conent w-[95%]  md:w-[60%] h-[300px] md:h-[300px] lg:h-[370px] flex justify-center items-center flex-col  gap-4 absolute border left-[50%]  top-[330px] md:top-[270px] transform translate-x-[-50%] bg-[#9538E2] p-5 rounded-[20px]">
            <img src={banner} alt="Loading..." className='w-full object-cover h-full rounded-[20px]' />
        </div>
    )
}

export default HomeContents;
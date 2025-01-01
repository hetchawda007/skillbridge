import Description from "../Components/Description"
import Faqs from "../Components/Faqs"
import Pricing from "../Components/Pricing"
const Pricingpage = () => {
    return (
        <>
            <Description text1="Our Pricings" text2="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements." />
            <div className="px-32 max-md:px-4"> 
                <Pricing />
                <Faqs />
            </div>
        </>
    )
}

export default Pricingpage
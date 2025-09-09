import { Routes, Route } from "react-router-dom";
import './App.css';

// Home sections
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import FeatureCard from "./components/HomePage/FeatureCard";
import IndustrySection from "./components/HomePage/IndustrySection";
import TestimonialsData from "./components/HomePage/TestimonialsData";
import FeaturesSection from "./components/HomePage/FeaturesSection";
import TestimonialCarousel from "./components/HomePage/TestimonialCarousel";
import Price from "./components/HomePage/Price";
import BannerSection from "./components/HomePage/BannerSection";
import StartBanner from "./components/HomePage/StartBanner";
import CreateContentSteps from "./components/HomePage/CreateContentSteps";
import LandingPageHero from "./components/HomePage/LandingPageHero";
import ProductContent from "./components/HomePage/ProductContent"
import SocialPlatforms from "./components/HomePage/SocialPlatforms";
import Industies from './components/HomePage/Industies'
import StepSection from './components/HomePage/StepSectin';
import CoreFeatures from './components/Features/CoreFeatures';
import HowItWorks from "./components/Features/HowItWork";
import Platforms from "./components/Features/Platforms";
import SocialContentSection from "./components/SocialMedia/SocialContentSection";
import SpecificContent from "./components/SocialMedia/SpecificContent";
import TailoredPricing from "./components/Pricing/TailoredPricing";
import PowerfulFeatures from "./components/Pricing/PowerfulFeatures";
import FAQSection from "./components/Pricing/FAQSection";
import RessourcesPage from "./components/Resources/ResourcesPage";
import LatestBlogs from "./components/Resources/LatestBlogs";
import Webinars from "./components/Resources/Webinars";
import PersonalizedHelp from "./components/Resources/PersonalizedHelp";
import GetInTouch from "./components/Contact/GetInTouch";
import VisitOurOffice from "./components/Contact/VisitOurOffice";
import Dashboard from "./components/Dashboard/Dashboard";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import BrandProfile from "./components/Main/BrandProfile";
import MyProducts from "./components/Main/MyProducts";
import MyContent from "./components/Main/MyContent";
import SocialChannels from "./components/Main/Socialchannels";
import ApiKeys from "./components/Main/APIKeys";
import HelpSupportPage from "./components/Main/HelpSupportPage";
import Settings from "./components/Support/Settings";
import UpgradePlan from "./components/Support/UpgradePlan";
import Brands from "./components/Main/ContentGenerator/Brands";
import Product from "./components/Main/ContentGenerator/Product";
import ContentType from "./components/Main/ContentGenerator/ContentType";
import CTPlatforms from "./components/Main/ContentGenerator/CTPlatforms";
import Details from "./components/Main/ContentGenerator/Details";
import Results from "./components/Main/ContentGenerator/Results";


// Layout
import Layout from './components/Layout/Layout';

// Extra route example
// import SideMenu from './components/Sidebar/Sidemenu';

// Home page content
const HomePage = () => (
  <>
    <LandingPageHero />
    <StartBanner />
    <ProductContent />
    <StepSection />
    <SocialPlatforms />
    <Industies />
    <FeaturesSection />
    <TestimonialCarousel />
    {/* <Price /> */}
    <UpgradePlan />
    <BannerSection />
    <FAQSection />
  </>
);

const App = () => {
  return (
    <Routes>
      {/* All routes share Layout (Header + Footer) */}
      <Route element={<Layout />}>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />

        {/* Pricing page */}
        <Route path="/pricing" element={<Price />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Sidebar demo */}
        {/* <Route path="/sidebar" element={<SideMenu />} /> */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="brandprofile" element={<BrandProfile />} />
          <Route path="myproducts" element={<MyProducts />} />
          <Route path="mycontent" element={<MyContent />} />
          <Route path="socialchannels" element={<SocialChannels />} />
          <Route path="settings" element={<Settings />} />
          <Route path="apikeys" element={<ApiKeys />} />
          <Route path="helpsupportpage" element={<HelpSupportPage />} />
          <Route path="upgradeplan" element={<UpgradePlan />} />
          <Route path="Brands" element={<Brands />} />
          <Route path="Product" element={<Product />} />
          <Route path="ContentType" element={<ContentType />} />
          <Route path="/ctplatforms" element={<CTPlatforms />} />
          <Route path="/details" element={<Details />} />
          <Route path="/results" element={<Results />} />


        </Route>
        <Route path="/landingpagehero" element={<LandingPageHero />} />
        <Route path="/productcontent" element={<ProductContent />} />
        <Route path="/industysection" element={<IndustrySection />} />
        <Route path="/socialplatforms" element={<SocialPlatforms />} />
        <Route path="/Industies" element={<Industies />} />
        {/* <Route path="/stepsection" element={<StepSection />} /> */}
        <Route path="/corefeatures" element={<CoreFeatures />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/socialcontentsection" element={<SocialContentSection />} />
        <Route path="/specificcontent" element={<SpecificContent />} />
        <Route path="/tailoredpricing" element={<TailoredPricing />} />
        <Route path="/powerfulfeatures" element={<PowerfulFeatures />} />
        <Route path="/faqsection" element={<FAQSection />} />
        <Route path="/resourcespage" element={<RessourcesPage />} />
        <Route path="/latestblogs" element={<LatestBlogs />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/personalizedhelp" element={<PersonalizedHelp />} />
        <Route path="/getintouch" element={<GetInTouch />} />
        <Route path="/visitouroffice" element={<VisitOurOffice />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/brandprofile" element={<BrandProfile />} />

      </Route>
    </Routes>
  );
};

export default App;

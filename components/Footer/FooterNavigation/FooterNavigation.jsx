import AboutNavigationList from "@/components/Footer/FooterNavigation/AboutNavigationList/AboutNavigationList";
import SocialNavigationList from "@/components/Footer/FooterNavigation/SocialNavigationList/SocialNavigationList";

export default function FooterNavigation() {
  return (
    <div className="mb-[47px] flex flex-col md:flex-row md:mb-[80px] lg:mb-[100px] ">
      <AboutNavigationList />
      <SocialNavigationList />
    </div>
  );
}

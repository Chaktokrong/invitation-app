import WelomePage from "@/components/WelcomePage";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div>
      {/* <NextSeo
        title="Home | Invitation App"
        openGraph={{
          site_name: "Invitation App",
          title: "Home",
          description:
            "Test Description",
          images: [
            {
              url: "../../Images/bride-and-groom.png",
              width: 700,
              height: 500,
              alt: "Logo",
              type: "image/jpg",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      /> */}
      <WelomePage />
    </div>
  );
}

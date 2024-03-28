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
      {[1, 2, 3, 4, 3, 2, 3, 4].map((row, index) => {
        return (
          <div key={index}>
            <WelomePage />
          </div>
        );
      })}
    </div>
  );
}

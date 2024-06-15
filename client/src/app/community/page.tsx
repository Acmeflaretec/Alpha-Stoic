import { Metadata } from "next";
import Pricing from "@/components/Community";

export const metadata: Metadata = {
  title: "Community ",
  description: "This is Community Page",
  // other metadata
};

const BlogSidebarPage = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px]">
        <div className="container">
      <Pricing />
          
        </div>
      </section>

    </>
  );
};

export default BlogSidebarPage;

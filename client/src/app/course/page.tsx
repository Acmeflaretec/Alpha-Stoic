import { Metadata } from "next";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Courses ",
  description: "This is Courses Page",
  // other metadata
};

const BlogSidebarPage = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[70px]">
        <div className="container">
      <Pricing />
          
        </div>
      </section>

    </>
  );
};

export default BlogSidebarPage;

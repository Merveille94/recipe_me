import Search from "@/app/components/home/Search";
import Carousel from "@/app/components/features/Carousel";

export default function Home() {
  return (
      <section className="min-h-screen">
          <Carousel/>
        <div className="flex items-center justify-center bg-black p-2">
          <Search/>
        </div>
      </section>
  );
}

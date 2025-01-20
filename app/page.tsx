import Search from "@/app/components/home/Search";

export default function Home() {
  return (
      <section className="min-h-screen">
        <div className="container mx-auto flex items-center justify-center bg-red-400 p-2">
          <Search/>
        </div>
      </section>
  );
}

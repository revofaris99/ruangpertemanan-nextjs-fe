import Link from "next/link";
import "@/css/notFound.css";
import AuroraHero from "@/components/aurora-effect/AuroraHero";

export default function NotFound() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="text-center">
              <div
                className="four_zero_four_bg flex items-center w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url(/notFound.gif)" }}
              >
                <h1 className="text-center"></h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link
                  href={"/portofolio"}
                  className="link_404 rounded-lg shadow-lg overflow-hidden hover:shadow-blue-300"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-[10] w-full h-auto">
        <AuroraHero />
      </div>
    </section>
  );
}

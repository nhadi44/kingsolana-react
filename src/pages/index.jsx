import * as Component from "../components";
import Layout from "../layouts/layout";
export default function Home() {
  return (
    <Layout>
      <div className="page__home">
        <main className="bg-black">
          <div id="home">
            <div className="min-h-screen flex items-center justify-center ">
              <Component.Home />
            </div>
          </div>
          <div id="roadmap">
            <div className="min-h-screen flex items-center justify-center">
              <Component.Roadmap />
            </div>
          </div>
          <div id="utility">
            <div className="min-h-screen flex items-center justify-center">
              <Component.Utility />
            </div>
          </div>
          <div id="role">
            <div className="min-h-screen flex items-center justify-center">
              <Component.Role />
            </div>
          </div>
          <div id="team">
            <div className="min-h-screen flex justify-center py-32 2xl:py-44">
              <Component.Team />
            </div>
          </div>
          <div id="presale">
            <div className="min-h-screen flex items-center justify-center">
              <Component.Presale />
            </div>
          </div>
          <div id="joinus">
            <div className="min-h-screen flex items-center justify-center">
              <Component.Joinus />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

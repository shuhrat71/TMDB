import React from "react";

function HomePage() {
  return (
    <>
      <main>
        <div className="container">
          <section>
            <div className="home-page__title">
              <h1>Welcome.</h1>
              <p>
                Millions of movies, TV shows and people to discover. Explore
                now.
              </p>
              <div className="search__wrapper">
                <input
                  type="text"
                  placeholder="Search for a movie, tv show, person...."
                />
                <button>Search</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default HomePage;

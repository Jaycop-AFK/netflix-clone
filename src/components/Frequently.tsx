import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

type Props = {};

const Frequently = (props: Props) => {
  return (
    <div className="bg-gray-950 flex flex-col gap-5 justify-center items-center h-screen text-white">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid
          className="items-center justify-center"
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <h1 className="text-3xl">Frequently Asked Questions</h1>
          <Container className="my-5">
            <div className="w-auto collapse bg-gray-600  my-3">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                What is Netflix?
              </div>
              <div className="collapse-content text-left">
                <p>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.
                </p>
                <p>
                  You can watch as much as you want, whenever you want without a
                  single commercial – all for one low monthly price. There's
                  always something new to discover and new TV shows and movies
                  are added every week!
                </p>
              </div>
            </div>
            <div className="w-auto collapse bg-gray-600  my-3">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                How much Netflix cost?
              </div>
              <div className="collapse-content text-left">
                <p>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from THB 99 to THB 419 a month. No extra costs, no contracts.
                </p>
              </div>
            </div>
            <div className="w-auto collapse bg-gray-600  my-3">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                Where can I watch?
              </div>
              <div className="collapse-content text-left">
                <p>
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                </p>
                <p>
                  You can also download your favorite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </p>
              </div>
            </div>
            <div className="w-auto collapse bg-gray-600  my-3">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                How can I cancel
              </div>
              <div className="collapse-content text-left">
                <p>
                  Netflix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </p>
              </div>
            </div>
            <div className="w-auto collapse bg-gray-600  my-3">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                What can I watch on Netflix
              </div>
              <div className="collapse-content text-left">
                <p>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </p>
              </div>
            </div>
            <div className="w-auto collapse bg-gray-600  my-3">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                Is Netflix good for kids?
              </div>
              <div className="collapse-content text-left">
                <p>
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space.
                </p>
                <p>
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </p>
              </div>
            </div>
            <h2>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h2>
            <div>
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered max-w-xs bg-slate-700"
              />
              <button className="btn bg-red-600 text-base text-white">Get Started</button>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Frequently;

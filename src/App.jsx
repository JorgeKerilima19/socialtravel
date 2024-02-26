import { Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Contact,
  Register,
  Services,
  TourPage,
  PayPage,
} from "./routes";
// import {
//   Information,
//   PlaceTour,
//   TourGallery,
//   TourInfo,
//   TourLocation,
//   TourPlan,
//   TourReviews,
// } from "./routes/tourRoute";

import Navbar from "./jsx/Navbar";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/socialtravel/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/socialtravel/about" element={<About />} />
          <Route path="/socialtravel/contact" element={<Contact />} />
          <Route path="/socialtravel/service" element={<Services />} />
          <Route path="/socialtravel/service/:id" element={<TourPage />}>
            {/* <Route index element={<Information />} />
            <Route path=":placeId" element={<PlaceTour />}>
              <Route index path="" element={<TourInfo />} />
              <Route path="tourPlan" element={<TourPlan />} />
              <Route path="location" element={<TourLocation />} />
              <Route path="gallery" element={<TourGallery />} />
              <Route path="reviews" element={<TourReviews />} />
            </Route> */}
          </Route>
          <Route path="/socialtravel/register" element={<Register />} />
          <Route path="/socialtravel/pay" element={<PayPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

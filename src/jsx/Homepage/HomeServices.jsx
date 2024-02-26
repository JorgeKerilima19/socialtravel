import React from "react";

const services = [
  {
    img: (
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
      >
        <path d="M12.691 0l-1.127 2.332L9 2.639l1.95 1.722L10.435 7l2.255-1.318L14.95 7l-.513-2.639 1.949-1.722-2.565-.307L12.691 0zm2.258 7H9.301C6.33 7 4 9.33 4 12.3V45c0 .55.45 1 1 1h17V36h6v10h17c.55 0 1-.45 1-1V12.3C46 9.33 43.67 7 40.7 7H14.948zm3.692 0l2.255-1.318L23.154 7l-.513-2.639L24.59 2.64l-2.565-.307L20.896 0 19.77 2.332l-2.565.307 1.95 1.722L18.64 7zm8.205 0l2.258-1.318L31.359 7l-.513-2.639 1.949-1.722-2.565-.307L29.104 0l-1.13 2.332-2.564.307 1.95 1.722L26.845 7zm8.205 0l2.258-1.318L39.564 7l-.513-2.639L41 2.64l-2.564-.307L37.309 0l-1.13 2.332-2.564.307 1.95 1.722L35.05 7zM10 12h6v4h-6v-4zm12 0h6v4h-6v-4zm12 0h6v4h-6v-4zm-24 8h6v4h-6v-4zm12 0h6v4h-6v-4zm12 0h6v4h-6v-4zm-24 8h6v4h-6v-4zm12 0h6v4h-6v-4zm12 0h6v4h-6v-4zm-24 8h6v4h-6v-4zm24 0h6v4h-6v-4z" />
      </svg>
    ),
    name: "Best hotels",
  },
  {
    img: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
        <path d="M7.5 0L1 3.5V4h13v-.5L7.5 0zM2 5v5l-1 1.6V13h13v-1.4L13 10V5H2zm2 1h1v5.5H4V6zm3 0h1v5.5H7V6zm3 0h1v5.5h-1V6z" />
      </svg>
    ),
    name: "Monumets and museums tours",
  },
  {
    img: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-48 0 512 512">
        <path d="M207.99 112c2.05 0 4.1-.81 5.66-2.42l48.37-49.95c14.07-14.53 12.32-39.38-2.45-51.97-14.76-12.6-34.32-9.31-46.64 3.4L208 16.14l-4.93-5.08c-12.56-12.96-32.95-15.08-46.64-3.4-15.71 13.39-16.53 37.46-2.48 51.97l48.38 49.95a7.86 7.86 0 005.66 2.42zM416 512H0V404.89C9.68 419.1 20.66 440 48 440c41.39 0 45.28-48 64-48 18.84 0 22.44 48 64 48 41.34 0 45.32-48 64-48 18.75 0 22.56 48 64 48 41.37 0 45.24-48 64-48 16 0 21.17 34.9 48 45.18V512zM0 362.82V352c0-17.6 14.4-32 32-32h352c17.6 0 32 14.4 32 32v43.19c-9.69-14.22-20.59-35.19-48-35.19-41.46 0-45.16 48-64 48-18.72 0-22.56-48-64-48-41.5 0-45.2 48-64 48-18.69 0-22.64-48-64-48s-45.32 48-64 48c-16.01 0-21.12-34.91-48-45.18zM352 288H64v-83.12C73.7 219.1 84.7 240 112 240c41.36 0 45.31-48 64-48 18.8 0 22.5 48 64 48 41.44 0 45.28-48 64-48 16.07 0 21.13 34.92 48 45.19V288zM64 162.82v-5.87C64 141.03 77.03 128 92.95 128h230.1c15.92 0 28.95 13.03 28.95 28.95v38.22c-9.7-14.21-20.67-35.17-48-35.17-41.44 0-45.25 48-64 48-18.68 0-22.66-48-64-48-41.56 0-45.16 48-64 48-15.96 0-21.14-34.91-48-45.18z" />
      </svg>
    ),
    name: "Weddings packages",
  },
  {
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        baseProfile="tiny"
        version="1.2"
        viewBox="-351 153 256 256"
      >
        <circle cx="-227" cy="177.1" r="20.8" />
        <path d="M-150.7 385.3l-28-39.9-6-47.1c0-.6-.1-1.3-.2-1.9 0-.2-.1-.5-.2-.7l-11.5-65.6 14.8 10.4 6.5 36.7c1 5.7 6.4 9.4 12.1 8.4s9.4-6.4 8.4-12.1l-7.3-40.9c-.5-2.8-2.1-5.2-4.3-6.7l-25.5-17.8c-6.5-5.1-14.9-7.7-23.7-6.4l-17 3c-10.4 2.3-18.5 9.6-22.2 18.9l-9 24.6-31.4 14.6-4.9-31.7-3.5.5 5.1 32.8c-4.5 2.7-6.3 8.5-4.1 13.3 1.4 3 4.1 5 7.1 5.7l18.8 121.6 3.5-.5-18.6-120.9c1-.1 2.1-.4 3.1-.9l37.7-17.5c2.6-1.2 4.5-3.3 5.3-5.9l8.1-22.2 9.4 53-27.6 44c-1.1 1.5-1.8 3.2-2.1 5.2l-9 51.1c-1.3 7 3.5 13.8 10.6 15.1s13.8-3.5 15.1-10.6l8.4-48 21.5-27.6 7.6 33.2c.3 1.8 1 3.6 2.1 5.2l29.8 42.5c4.2 5.9 12.2 7.3 18 3.2 5.8-4.2 7.2-12.2 3.1-18.1z" />
      </svg>
    ),
    name: "Alpinism",
  },
  {
    img: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2.89 122.88 122.88">
        <path
          fillRule="evenodd"
          d="M36.82 107.86L35.65 78.4l13.25-.53c5.66.78 11.39 3.61 17.15 6.92l10.29-.41c4.67.1 7.3 4.72 2.89 8-3.5 2.79-8.27 2.83-13.17 2.58-3.37-.03-3.34 4.5.17 4.37 1.22.05 2.54-.29 3.69-.34 6.09-.25 11.06-1.61 13.94-6.55l1.4-3.66 15.01-8.2c7.56-2.83 12.65 4.3 7.23 10.1-10.77 8.51-21.2 16.27-32.62 22.09-8.24 5.47-16.7 5.64-25.34 1.01l-12.72-5.92zm-7.08-44.89h91.9c.68 0 1.24.57 1.24 1.24v5.41c0 .67-.56 1.24-1.24 1.24h-91.9c-.68 0-1.24-.56-1.24-1.24v-5.41c0-.68.56-1.24 1.24-1.24zm49.52-51.74c25.16 2.01 46.35 23.16 43.22 48.06H28.91C25.82 34.23 47.09 13.05 72.43 11.2V7.14h-4c-.7 0-1.28-.58-1.28-1.28V1.28c0-.7.57-1.28 1.28-1.28h14.72c.7 0 1.28.58 1.28 1.28v4.58c0 .7-.58 1.28-1.28 1.28h-3.89v4.09zM0 77.39l31.55-1.66 1.4 35.25-31.55 1.65L0 77.39z"
          clipRule="evenodd"
        />
      </svg>
    ),
    name: "Gastronomy tour",
  },
  {
    img: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -12.91 122.88 122.88">
        <path d="M100.28 27.01c-.88-.09-1.53-.88-1.44-1.77.09-.88.88-1.53 1.77-1.44 1.98.21 3.87.82 5.6 1.86.84.5 1.63 1.1 2.38 1.8.34-.83.76-1.6 1.24-2.32 1.07-1.58 2.46-2.88 4.1-3.83.77-.45 1.76-.18 2.2.59.45.77.18 1.76-.59 2.2-1.22.7-2.25 1.67-3.04 2.84-.77 1.15-1.32 2.5-1.59 4.01a1.615 1.615 0 01-2.91.73c-1.01-1.42-2.18-2.5-3.45-3.26-1.31-.79-2.75-1.25-4.27-1.41zM36.99 38.8v53.41h6.2l7.22-7.94h-3.83v-4.85h11.86L45.06 64.59l3.6-3.24 8.1 8.97v-.35h19.83c.87 0 1.64.46 2.07 1.15l5.86 8.29h11.01c.73 0 1.39.32 1.83.84l12.06 11.96h13.46v4.85H.7v-4.85h32.52V38.8H1.89C.85 38.8 0 37.96 0 36.91c0-.06 0-.12.01-.19.08-9.42 4.01-17.93 10.32-24.1A35.312 35.312 0 0134.54 2.61a1.964 1.964 0 011.17 0c9.39.17 17.87 3.97 24.07 10.02 6.35 6.21 10.29 14.79 10.32 24.28 0 1.04-.84 1.88-1.88 1.88v.01H36.99zm12.75 53.42h52.8l-8.01-7.94H56.96l-7.22 7.94zm15.23-12.8h13.61l-3.24-4.59H60.83l4.14 4.59zM83.92 7.95c-1.03.13-1.97-.59-2.11-1.62-.13-1.03.59-1.97 1.62-2.11 3.26-.43 6.41-.04 9.26 1.23 1.72.77 3.31 1.85 4.74 3.27.78-1.75 1.84-3.29 3.14-4.58 2.15-2.13 4.92-3.56 8.08-4.11 1.03-.18 2 .52 2.18 1.54.18 1.03-.52 2-1.54 2.18-2.38.41-4.46 1.48-6.05 3.06-1.58 1.56-2.7 3.65-3.19 6.12h-.01a1.88 1.88 0 01-3.4.7c-1.52-2.24-3.39-3.8-5.48-4.73-2.19-1-4.65-1.29-7.24-.95zm-26.77 7.38c-2.56-2.5-5.57-4.58-8.89-6.09 1.28 1.85 2.36 3.96 3.24 6.29 2.05 5.41 3.05 12.06 3.15 19.5h11.62c-.5-7.68-3.89-14.59-9.12-19.7zM40.58 6.86c-1.17-.2-2.36-.34-3.57-.42v28.59h13.88c-.09-6.98-1.02-13.18-2.91-18.17-1.68-4.45-4.12-7.9-7.4-10zm-7.35-.43c-1.19.07-2.37.2-3.52.39-3.32 2.11-5.79 5.59-7.48 10.1-1.87 4.97-2.79 11.16-2.88 18.1h13.88V6.43zM22.05 9.15a31.35 31.35 0 00-9.09 6.19c-5.23 5.11-8.62 12.02-9.12 19.69H15.6c.09-7.4 1.09-14.03 3.12-19.43.89-2.4 2-4.57 3.33-6.45z" />
      </svg>
    ),
    name: "Beaches",
  },
];

const HomeServices = () => {
  return (
    <section className="flex__container flex__item-center width__full">
      <h2 className="section-title">What we offer</h2>
      <p className="width__70 text-alg__center pd-bottom__bg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa odit
        minus harum, magnam, ab tenetur, aspernatur officiis quae quia sapiente
        neque?
      </p>
      <div className="home-service__container">
        {services.map((el, index) => (
          <div key={index}>
            {el.img}
            <h5>{el.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
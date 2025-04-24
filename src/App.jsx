import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <header className="header relative">
        <div className="my-container">
          <div className="flex justify-between items-center py-5">
            <a
              className="flex items-center gap-2"
              href="/"
              data-discover="true"
            >
              <img className="size-10 md:size-12" alt="Logo" src="" />
              <h3 className="text-3xl font-black text-dark">Phudu</h3>
            </a>
            <nav className="hidden lg:block">
              <ul className="flex gap-8 items-center">
                <li>
                  <a
                    aria-current="page"
                    className="navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300 active"
                    href="/"
                    data-discover="true"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300"
                    href="/my-bookings"
                    data-discover="true"
                  >
                    My-Bookings
                  </a>
                </li>
                <li>
                  <a
                    className="navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300"
                    href="/blogs"
                    data-discover="true"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    className="navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300"
                    href="/contact"
                    data-discover="true"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            <button className="hidden lg:inline-block px-7 py-4 font-bold text-xl rounded-full bg-blue-500 text-white outline-0 border-0 hover:bg-blue-600 transition ease-in-out duration-300">
              Emergency
            </button>
            <button className="lg:hidden block text-3xl text-gray-700 hover:text-blue-500 transition-all ease-in-out duration-300 bg-white p-3 rounded-lg cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="rotate-180"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 10.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 2 10Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <nav className="block lg:hidden absolute right-0 z-50 w-[300px] py-3 px-5 shadow bg-linear-to-t from-[#ffffff] to-gray-200 rounded-b-lg border-3 border-white top-25 opacity-0 invisible pointer-events-none transition-all duration-300 ease-in-out">
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    aria-current="page"
                    className="navbtn text-lg font-medium block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300 active"
                    href="/"
                    data-discover="true"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="navbtn text-lg font-medium block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300"
                    href="/my-bookings"
                    data-discover="true"
                  >
                    My-Bookings
                  </a>
                </li>
                <li>
                  <a
                    className="navbtn text-lg font-medium block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300"
                    href="/blogs"
                    data-discover="true"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    className="navbtn text-lg font-medium block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300"
                    href="/contact"
                    data-discover="true"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section className="doctors py-20">
        <div className="my-container">
          <h2 className="text-dark font-black text-3xl md:text-4xl text-center">
            Our Best Doctors
          </h2>
          <p className=" text-center mt-4 mb-8 max-w-[1000px] mx-auto">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="doctor-card p-8 rounded-2xl bg-white flex flex-col justify-between text-center md:text-start">
              <div className="img-box rounded-xl overflow-hidden h-[350px] md:h-[250px]">
                <img
                  className="size-full object-cover"
                  alt="Dr. Sarah Mitchell Doctor"
                  src=""
                />
              </div>
              <div className="content-box mt-4">
                <div className="meta flex gap-2 text-sm font-medium justify-center md:justify-start flex-wrap">
                  <span className="px-4 py-2 rounded-full bg-[#09982F10] border border-[#09982F20] text-green">
                    Available
                  </span>
                  <span className="px-4 py-2 rounded-full bg-[#176AE510] border border-[#176AE520] text-blue">
                    15+ Years Experience
                  </span>
                </div>
                <h2 className="text-2xl text-dark font-black mt-4 mb-3">
                  Dr. Sarah Mitchell
                </h2>
                <p className="text-lg font-medium">
                  MBBS, MD - General Medicine, DNB
                </p>
                <p className="text-lg font-semibold mt-2 text-gray-700">
                  Speciality : Cardiologist
                </p>
                <div className="border-t border-dashed border-gray-300 my-4"></div>
                <p className="text-lg font-medium flex gap-2 items-center justify-center md:justify-start">
                  {" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="size-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12.5 7C14.433 7 16 8.567 16 10.5C16 11.7668 15.327 12.8763 14.3191 13.4907L16.869 17H14.397L12.217 14H10V17H8V7H12.5ZM12.5 9H10V12H12.5C13.2797 12 13.9204 11.4051 13.9931 10.6445L14 10.5C14 9.67157 13.3284 9 12.5 9Z"></path>
                  </svg>
                  Reg No: BD 124512540{" "}
                </p>
              </div>
              <a
                className="mt-5 block p-3 text-lg md:text-xl font-bold text-center transition ease-in-out duration-300 border bg-transparent text-blue-500 hover:text-white hover:bg-blue-500 w-full rounded-full"
                href="/doctor/1"
                data-discover="true"
              >
                View Details
              </a>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              className=" inline-block py-3 px-8 text-xl font-bold text-center  border  text-white bg-blue-500 rounded-full transition ease-in-out duration-300 hover:bg-transparent hover:text-blue-500"
              href="/"
              data-discover="true"
            >
              View All Doctors
            </a>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="my-container">
          <h2 className="text-dark font-black text-4xl text-center">
            We Provide Best Medical Services
          </h2>
          <p className=" text-center mt-4 mb-8 max-w-[1000px] mx-auto">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
            <div className="doctor-card p-8 rounded-2xl bg-white ">
              <img className="mb-4 w-[64px] mx-auto md:mx-0" alt="" src="" />
              <h2 className="text-3xl font-bold text-black mb-3">
                <span>199+</span>
              </h2>
              <p className="text-2xl font-semibold text">Total Doctors</p>
            </div>
            <div className="doctor-card p-8 rounded-2xl bg-white ">
              <img className="mb-4 w-[64px] mx-auto md:mx-0" alt="" src="" />
              <h2 className="text-3xl font-bold text-black mb-3">
                <span>199+</span>
              </h2>
              <p className="text-2xl font-semibold text">Total Reviews</p>
            </div>
            <div className="doctor-card p-8 rounded-2xl bg-white ">
              <img className="mb-4 w-[64px] mx-auto md:mx-0" alt="" src="" />
              <h2 className="text-3xl font-bold text-black mb-3">
                <span>1,900+</span>
              </h2>
              <p className="text-2xl font-semibold text">Patients</p>
            </div>
            <div className="doctor-card p-8 rounded-2xl bg-white ">
              <img className="mb-4 w-[64px] mx-auto md:mx-0" alt="" src="" />
              <h2 className="text-3xl font-bold text-black mb-3">
                <span>300+</span>
              </h2>
              <p className="text-2xl font-semibold text">Total Stuffs</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="my-footer py-24">
        <div className="my-container">
          <div className="flex flex-col items-center gap-8 ">
            <a
              className="flex items-center gap-2"
              href="/"
              data-discover="true"
            >
              <img className="size-12" alt="Logo" src="" />
              <h3 className="text-3xl font-black text-dark">Phudu</h3>
            </a>
            <nav>
              <ul className="flex gap-8 items-center flex-wrap justify-center">
                <li>
                  <a
                    aria-current="page"
                    className="navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300 active"
                    href="/"
                    data-discover="true"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300"
                    href="/my-bookings"
                    data-discover="true"
                  >
                    My-Bookings
                  </a>
                </li>
                <li>
                  <a
                    className="navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300"
                    href="/blogs"
                    data-discover="true"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    className="navbtn text-lg font-medium inline-block px-4 py-2 text-gray-500 hover:text-blue-500 transition ease-in-out duration-300"
                    href="/contact"
                    data-discover="true"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="border-t border-[#0F0F0F20] max-w-[1060px] mx-auto my-8"></div>
          <div className="buttons flex gap-6 items-center justify-center">
            <a href="https://www.facebook.com/" target="_blank">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="size-9 text-blue-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </a>
            <a
              className="size-9 bg-gray-800 rounded-full text-white flex-center"
              href="https://x.com/"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                className="text-xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
              </svg>
            </a>
            <a
              className="size-9 bg-[#0575B3] rounded-full text-white flex-center"
              href="https://linkedin.com/"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.2"
                baseProfile="tiny"
                viewBox="0 0 24 24"
                className="text-3xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 19h-3v-10h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03v5.647z"></path>
                <ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5"></ellipse>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="size-9 text-[#ff0000]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <section>
        <div className="my-container">
          <div className="doctor-info bg-white w-full rounded-3xl text-center text-black p-18 mb-8">
            <h1 className="text-dark font-black text-4xl text-center">
              Doctor’s Profile Details
            </h1>
            <p className=" text-center mt-4 max-w-[1000px] mx-auto">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience. Whether it's
              a routine checkup or urgent consultation, book appointments in
              minutes and receive quality care you can trust.
            </p>
          </div>

          <div className="doctor-card p-14 rounded-2xl bg-white flex flex-col lg:flex-row gap-8 text-center lg:text-left">
            <div className="img-box rounded-xl overflow-hidden w-full lg:w-5/12 max-h-[450px]">
              <img
                className="size-full object-cover max-h-[450px] lg:max-h-[700px]"
                alt="Dr. Sarah Mitchell Doctor"
                src=""
              />
            </div>
            <div className="content-box w-full  lg:w-7/12">
              <h2 className="text-2xl text-dark font-black mt-4 mb-3">
                Dr. Sarah Mitchell
              </h2>
              <p className="text-lg font-medium uppercase mb-3">
                MBBS, MD
                <br />
                General Medicine, DNB
              </p>
              <p className="text-xl font-medium mb-3 ">
                <span>Speciality : </span>{" "}
                <span className="text-xl font-bold text-dark">
                  Cardiologist
                </span>
              </p>
              <div>
                <span className=" text-xl font-medium">Working At</span>
                <br />
                <p className="text-xl font-bold text-dark mt-2">
                  Boston General Hospital
                </p>
              </div>
              <div className="border-t border-b border-dashed border-gray-300 mt-4 py-4">
                <p className="text-lg font-medium flex gap-2 lg:items-center justify-center lg:justify-start">
                  {" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="size-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12.5 7C14.433 7 16 8.567 16 10.5C16 11.7668 15.327 12.8763 14.3191 13.4907L16.869 17H14.397L12.217 14H10V17H8V7H12.5ZM12.5 9H10V12H12.5C13.2797 12 13.9204 11.4051 13.9931 10.6445L14 10.5C14 9.67157 13.3284 9 12.5 9Z"></path>
                  </svg>
                  Reg No: BD 124512540{" "}
                </p>
              </div>
              <div className="meta flex gap-4 text-sm font-medium my-6 items-center flex-wrap justify-center lg:justify-start">
                <span className="text-xl font-bold text-dark">
                  Availability
                </span>
                <div className="flex gap-4">
                  <span className="bg-[#FFA00010] border border-[#FFA000] text-[#FFA000] px-4 py-2 rounded-full">
                    Monday
                  </span>
                  <span className="bg-[#FFA00010] border border-[#FFA000] text-[#FFA000] px-4 py-2 rounded-full">
                    Tuesday
                  </span>
                  <span className="bg-[#FFA00010] border border-[#FFA000] text-[#FFA000] px-4 py-2 rounded-full">
                    Thursday
                  </span>
                  <span className="bg-[#FFA00010] border border-[#FFA000] text-[#FFA000] px-4 py-2 rounded-full">
                    Friday
                  </span>
                </div>
              </div>
              <p className="fee flex gap-2 text-base justify-center lg:justify-start flex-wrap">
                <span className="text-base font-black text-dark">
                  Consultation Fee:
                </span>
                <span className="text-blue-500 font-bold">Taka : 1100</span>
                <span className="text-gray-400">(incl. Vat)</span>
                <span className="text-blue-500">Per consultation</span>
              </p>
            </div>
          </div>
          <div className="bg-white w-full rounded-2xl  text-black p-8 mt-6">
            <h2 className="text-center text-2xl text-dark font-black mt-4 mb-3">
              Book an Appointment
            </h2>
            <div className="text-center mt-6 border-t border-dashed pt-4 border-gray-300 flex gap-8 items-center justify-between">
              <span className="text-lg font-bold">Availability</span>
              <span className="px-4 py-2 rounded-full bg-[#09982F10] border border-[#09982F20] text-green">
                Available
              </span>
            </div>
            <div className="text-center mt-6 border-t pt-4 border-gray-200">
              <p className=" bg-[#FFA00015] text-[#FFA000] p-3 px-4 rounded-full mb-10">
                <span className="inline">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="inline"
                    height="28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span> </span>
                <span className="inline">
                  Due to high patient volume, we are currently accepting
                  appointments for today only. We appreciate your understanding
                  and cooperation.
                </span>
              </p>
              <button className="block py-4 px-8 w-full font-bold text-lg md:text-xl rounded-full bg-blue-500 text-white outline-0 border-0 hover:bg-blue-600 transition ease-in-out duration-300 ">
                Book Appointment Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="my-container">
          <div className="my-bookings-info mt-25 mb-8">
            <h1 className="text-dark font-black text-3xl md:text-4xl text-center">
              My Today Appointments
            </h1>
            <p className=" text-center mt-4 max-w-[1000px] mx-auto">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience.
            </p>
          </div>
          <div className="bg-white w-full rounded-2xl text-black p-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between mb-4 ">
              <div>
                <h4 className="text-xl text-black font-bold mb-2">
                  Dr. James Carter
                </h4>
                <p className="text-sm ">MBBS, MS - Orthopedic Surgery, AIIMS</p>
              </div>
              <p className="text-lg text-gray-500 font-medium">
                Appointment Fee : <span>Taka : 1300 </span> +Vat
              </p>
            </div>
            <div className="text-center mt-12 border-t border-gray-400 border-dashed ">
              <button className="w-full inline-block py-3 px-8 text-lg md:text-xl font-bold text-center mt-5 border bg-transparent text-red-500 rounded-full transition ease-in-out duration-300 hover:text-white hover:bg-red-500">
                Cancel Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="py-24"><div className="my-container"><div className="error-page text-center"><div className="img-box max-w-[600px] mx-auto rounded-2xl mb-5 overflow-hidden p-10 bg-white"><img className="max-w-full" alt="" src=""/></div><h1 className="text-red-400 text-4xl mt-10">Page Not Found</h1><p className="mt-3 mb-10 text-lg text-black">Sorry, the page you are looking for does not exist.</p><a className="px-8 py-3 font-bold text-xl rounded-full bg-blue-500 text-white outline-0 border-0 hover:bg-blue-600 transition ease-in-out duration-300" href="/" data-discover="true">Go Home</a></div></div></main>
    </>
  );
}

export default App;

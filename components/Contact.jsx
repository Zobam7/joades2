import React, { useRef } from "react";
import contact from "../public/contact_photo2.jpg";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_q78bbos",
      "template_jexirgc",
      form.current,
      "_XiK61XJLxze9QjgL"
    );

    e.target.reset();

    let timerInterval;
    Swal.fire({
      title: "Message Sent!",
      timer: 1000,
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };
  return (
    <div id="contact">
      <div className="w-full min-h-screen pt-10">
        <div className="max-w-[1240px] m-auto px-16 py-16 w-full">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div>
                  <Image
                    src={contact}
                    className="rounded-xl hover:scale-105 ease-in duration-300 "
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="py-2">Johnson A.</h2>
                  <p className="py-4">
                    IT Security Engineer | Platform Engineer | Cloud Engineer |
                    Customer Support | Team Lead | Technical Support | Software
                    Tester | DevOps Engineer
                  </p>
                </div>
                <div>
                  <p className="uppercase pt-8">Connect with Me</p>
                  <div className="flex items-center justify-evenly py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <a
                        href="https://www.linkedin.com/in/johnson-a-bb1abb149"
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        <FaLinkedinIn />
                      </a>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <a
                        href="https://github.com/doktafelz"
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        <FaGithub />
                      </a>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <a
                        href="mailto:doktafelz@hotmail.com"
                        target="_blank"
                        rel={"noreferrer"}
                      >
                        <AiOutlineMail />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      name="subject"
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      name="message"
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows="5"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full p-4 text-gray-100 mt-4 bg-gradient-to-r from-[#5651e5] to-[#709dff]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="flex justify-center py-12">
            <Link href="/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="m-auto text-[#5651e5]"
                  size={30}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

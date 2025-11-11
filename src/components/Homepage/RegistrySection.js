/**
 * @file RegistrySection.js
 * @description This component handles the Registry section of the wedding website.
 *              Admin can use a password to redirect to the admin panel.
 * @author Emanuele Sgroi
 * @date 19 October 2024
 */

import React, { useState, useRef, useEffect } from "react";
import images from "@/utils/imagesImport";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import translations from "@/utils/translations";

const RegistrySection = ({ language }) => {
  // Destructure translation strings
  const {
    title,
    description_1,
    description_2,
    description_3,
    description_4,
    button,
    submit_button,
    placeholder,
  } = translations[language].registry_section;

  // States for managing the input password and showing/hiding it
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dialogRef = useRef(null);

  // Variants for the framer motion animation
  const primaryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const secondaryVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
  };

  // Function to adjust dialog position when the keyboard is visible
  const handleInputFocus = () => {
    if (dialogRef.current) {
      dialogRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handles submitting the password to redirect admin
  const handlePasswordSubmit = (event) => {
    event.preventDefault();

    if (password.length > 0) {
      setLoading(true);
      if (password === process.env.NEXT_PUBLIC_ADMIN_ACCESS_PASSWORD) {
        window.open("/admin", "_blank"); // Redirect to admin page
      }
      setLoading(false);
    }
  };

  // Render a simple dashed line
  const dashedLine = Array(3)
    .fill()
    .map((_, index) => (
      <div key={index} className="w-[2px] h-[5px] my-[3px] bg-gold" />
    ));

  return (
    <section
      id="gift-section"
      className="relative bg-blue px-4 sm:px-12 py-12 flex items-center flex-col overflow-hidden"
    >
      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={primaryVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col items-center px-4 z-10 mb-8 md:mb-12"
      >
        <Image
          src={images.glass}
          alt="glass"
          width={95}
          height={95}
          quality={100}
          className="mb-4 w-[90px] h-auto brightness-95"
        />
        <div className="flex flex-col justify-center items-center">
          <h3 translate="no" className="text-white font-bold z-20 ">
            {title.main}
          </h3>
          <h3
            translate="no"
            className="text-gold text-6xl sm:text-8xl alex-brush z-10 transform font-light -mt-8 md:-mt-10"
          >
            {title.sub}
          </h3>
        </div>
      </motion.div>

      <div className="relative w-full max-w-[700px] text-white text-center flex flex-col items-center z-10">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={secondaryVariants}
          viewport={{ once: true, amount: 0.2 }}
          translate="no"
          className=" text-center mb-4"
        >
          {description_1}
        </motion.p>
        {dashedLine}
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={secondaryVariants}
          viewport={{ once: true, amount: 0.2 }}
          translate="no"
          className=" text-center my-4"
        >
          {description_2}
        </motion.p>
        {dashedLine}
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={secondaryVariants}
          viewport={{ once: true, amount: 0.2 }}
          translate="no"
          className=" text-center my-4"
        >
          {description_3}
        </motion.p>
        {dashedLine}
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={secondaryVariants}
          viewport={{ once: true, amount: 0.2 }}
          translate="no"
          className=" text-center my-4"
        >
          {description_4}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={secondaryVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Dialog>
            <DialogTrigger
              translate="no"
              className="bg-transparent text-gold border border-gold px-3 py-2 rounded-full mt-6  transition-all duration-300 hover:bg-gold hover:text-white"
            >
              {button}
            </DialogTrigger>
            <DialogContent
              ref={dialogRef}
              className="max-h-[90vh] sm:max-w-[580px] max-sm:w-[95%] max-sm:p-2 max-sm:rounded-md"
            >
              <DialogHeader>
                <DialogTitle
                  translate="no"
                  className="text-[22px] md:text-3xl font-bold"
                >
                  {title.sub}
                </DialogTitle>
                <DialogDescription className="flex flex-col items-center">
                  <form
                    onSubmit={handlePasswordSubmit}
                    className="w-full flex flex-col items-center"
                  >
                    <div className="w-full h-[42px] mb-4 flex border py-0 pl-0 pr-2 rounded-lg">
                      <Input
                        translate="no"
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                        type={viewPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={placeholder}
                        className="font-serif mb-4 focus:outline-none focus:ring-0 text-lg border-none"
                      />
                      <button
                        type="button"
                        translate="no"
                        onClick={(e) => {
                          e.preventDefault();
                          setViewPassword(!viewPassword);
                        }}
                        className="active:bg-zinc-200 rounded-full"
                      >
                        {viewPassword ? <FaRegEye size={20} /> : <FaRegEyeSlash size={20} />}
                      </button>
                    </div>
                    <Button
                      translate="no"
                      type="submit"
                      disabled={loading}
                      className="bg-[#233d74] hover:bg-gold text-lg w-fit"
                    >
                      {loading ? submit_button.loading : submit_button.submit}
                    </Button>
                  </form>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>

      <Image
        src={images.divider}
        alt={`divider`}
        width={650}
        height={0}
        quality={100}
        className={`w-[160px] h-auto mt-12 mb-8 `}
      />
    </section>
  );
};

export default RegistrySection;

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { motion } from "framer-motion";


const certificates = [
  { id: 1, title: "Certificate 1", imageUrl: "/assets/gallery/DevOps.png" },
  { id: 2, title: "Certificate 2", imageUrl: "/assets/gallery/DevOps.png" },
  { id: 3, title: "Certificate 3", imageUrl: "/assets/gallery/DevOps.png" },
  { id: 4, title: "Certificate 4", imageUrl: "/assets/gallery/DevOps.png" },
  { id: 5, title: "Certificate 5", imageUrl: "/assets/gallery/DevOps.png" },
  { id: 6, title: "Certificate 6", imageUrl: "/assets/gallery/DevOps.png" },
  { id: 7, title: "Certificate 7", imageUrl: "/assets/gallery/DevOps.png" },
  { id: 8, title: "Certificate 8", imageUrl: "/assets/gallery/DevOps.png" },
  { id: 9, title: "Certificate 9", imageUrl: "/assets/gallery/DevOps.png" },
  { id: 10, title: "Certificate 10", imageUrl: "/assets/gallery/DevOps.png" },
  { id: 11, title: "Certificate 11", imageUrl: "/assets/gallery/DevOps.png" },
  { id: 12, title: "Certificate 12", imageUrl: "/assets/gallery/DevOps.png" },
];

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCertificate(null);
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (modalIsOpen && event.key === "Escape") {
        closeModal();
      }
    },
    [modalIsOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <section className="py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl text-center mb-8 font-bold">
            My Certificates
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="flex flex-col h-full rounded-lg overflow-hidden shadow-lg cursor-zoom-in hover:shadow-2xl transition-all duration-200"
                onClick={() => openModal(certificate)}
              >
                <div className="relative w-full h-64 bg-[#232329] flex items-center justify-center mt-2 p-2">
                  <Image
                    src={certificate.imageUrl}
                    alt={`Certificate: ${certificate.title}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col flex-grow p-4 bg-[#232329]">
                  <h2 className="text-xl font-semibold text-white/60 flex items-center justify-center">
                    {certificate.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Certificate Image"
          className="bg-[#232329] p-6 rounded-lg shadow-lg max-w-4xl mx-auto relative"
          overlayClassName="fixed inset-0 bg-black bg-opacity-60 text-centered"
          ariaHideApp={false}
        >
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm hover:bg-red-600 transition-all"
          >
            Close
          </button>
          {selectedCertificate && (
            <div className="space-y-4">
              <Image
                src={selectedCertificate.imageUrl}
                alt={`Certificate: ${selectedCertificate.title}`}
                width={800}
                height={500}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold text-white/60">
                  {selectedCertificate.title}
                </h2>
              </div>
            </div>
          )}
        </Modal>
      </section>
    </motion.div>
  );
};

export default Gallery;

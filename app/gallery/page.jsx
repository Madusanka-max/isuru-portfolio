"use client";

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";

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
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && document.getElementById("__next")) {
      Modal.setAppElement("#__next");
    }
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center mb-8 font-bold">My Certificates</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-200"
              onClick={() => openModal(certificate.imageUrl)}
            >
              <Image
                src={certificate.imageUrl}
                alt={certificate.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-[#232329]">
                <h2 className="text-xl font-semibold text-white/60">
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
        className="bg-[#232329] p-6 rounded-lg shadow-lg max-w-2xl mx-auto relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 bg-red-500 text-white/60 px-3 py-1 rounded-full text-sm hover:bg-red-600 transition-all"
        >
          Close
        </button>
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Certificate"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        )}
      </Modal>
    </section>
  );
};

export default Gallery;

import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const certificates = [
  { id: 1, title: 'Certificate 1', imageUrl: '/assets/work/1.jpeg' },
  { id: 2, title: 'Certificate 2', imageUrl: '/assets/work/1.jpeg' },
  { id: 3, title: 'Certificate 3', imageUrl: '/assets/work/1.jpeg' },
  { id: 4, title: 'Certificate 4', imageUrl: '/assets/work/1.jpeg' },
  { id: 5, title: 'Certificate 5', imageUrl: '/assets/work/1.jpeg' },
  { id: 6, title: 'Certificate 6', imageUrl: '/assets/work/1.jpeg' },
  { id: 7, title: 'Certificate 7', imageUrl: '/assets/work/1.jpeg' },
  { id: 8, title: 'Certificate 8', imageUrl: '/assets/work/1.jpeg' },
  { id: 9, title: 'Certificate 9', imageUrl: '/assets/work/1.jpeg' },
  { id: 10, title: 'Certificate 10', imageUrl: '/assets/work/1.jpeg' },
  { id: 11, title: 'Certificate 11', imageUrl: '/assets/work/1.jpeg' },
  { id: 12, title: 'Certificate 12', imageUrl: '/assets/work/1.jpeg' },
];

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
        <h1 className="text-4xl text-center mb-8">My Certificates</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openModal(certificate.imageUrl)}
            >
              <img src={certificate.imageUrl} alt={certificate.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{certificate.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Certificate Image"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">Close</button>
        {selectedImage && <img src={selectedImage} alt="Certificate" className="w-full h-auto" />}
      </Modal>
    </section>
  );
};

export default Gallery;
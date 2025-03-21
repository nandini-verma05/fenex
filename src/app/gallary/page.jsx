'use client';

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';

// Configure Modal for Next.js
if (typeof window !== 'undefined') {
  Modal.setAppElement('#gallery');
}

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'transparent',
    overflow: 'hidden',
    padding: '0',
    width: '90vw',
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

// Sample gallery images - in a real app, you would import these properly
const galleryImages = [
  '/images/project1.jpg',
  '/images/project2.jpg',
  '/images/project3.jpg',
  '/images/project4.jpg',
  '/images/project5.jpg',
  '/images/project6.jpg',
  '/images/project7.jpg',
  '/images/project8.jpg',
  '/images/project9.jpg',
  '/images/project10.jpg',
  '/images/project11.jpg',
  '/images/project12.jpg',
  '/images/project13.jpg',
  '/images/project14.jpg',
  '/images/project15.jpg',
];

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side mounting for Modal
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const navigateImage = (direction) => {
    setSelectedImageIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % galleryImages.length;
      }
      return (prevIndex - 1 + galleryImages.length) % galleryImages.length;
    });
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalIsOpen) {
        if (e.key === 'ArrowRight') {
          navigateImage('next');
        } else if (e.key === 'ArrowLeft') {
          navigateImage('prev');
        } else if (e.key === 'Escape') {
          closeModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalIsOpen]);

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
         
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and see the quality of our work.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer group transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openModal(index)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`Project ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 6}
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal - only render on client side */}
        {isMounted && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Image Modal"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-white text-4xl focus:outline-none z-10 hover:text-blue-500 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              {/* Display Image */}
              <img
                src={galleryImages[selectedImageIndex]}
                alt={`Project ${selectedImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-6 text-white text-4xl focus:outline-none hover:text-blue-500 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-6 text-white text-4xl focus:outline-none hover:text-blue-500 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Gallery;
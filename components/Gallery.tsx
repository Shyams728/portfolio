import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../constants';

const GallerySection: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

    const filteredImages = selectedCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    const goToNext = useCallback(() => {
        if (!selectedImage || filteredImages.length === 0) return;
        const currentIndex = filteredImages.findIndex(img => img.url === selectedImage.url);
        if (currentIndex === -1) return;
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIndex]);
    }, [selectedImage, filteredImages]);

    const goToPrev = useCallback(() => {
        if (!selectedImage || filteredImages.length === 0) return;
        const currentIndex = filteredImages.findIndex(img => img.url === selectedImage.url);
        if (currentIndex === -1) return;
        const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[prevIndex]);
    }, [selectedImage, filteredImages]);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        goToNext();
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        goToPrev();
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedImage) return;
            if (e.key === 'Escape') setSelectedImage(null);
            if (e.key === 'ArrowRight') goToNext();
            if (e.key === 'ArrowLeft') goToPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, goToNext, goToPrev]);

    return (
        <section id="gallery" className="py-24 bg-slate-950/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Site & <span className="text-primary-400">Impact</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                        Visual highlights from field operations and professional milestones.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                aria-pressed={selectedCategory === cat}
                                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${selectedCategory === cat
                                        ? 'bg-primary-600 border-primary-500 text-white shadow-lg shadow-primary-600/20'
                                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((image, index) => (
                            <motion.button
                                layout
                                key={image.url}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => setSelectedImage(image)}
                                aria-label={`View ${image.title}`}
                                type="button"
                                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group glass border border-slate-800/50 w-full text-left"
                            >
                                <img
                                    src={image.url}
                                    alt=""
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white scale-75 group-hover:scale-100 transition-transform">
                                        <ZoomIn className="w-6 h-6" />
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <span className="text-[10px] uppercase tracking-widest text-primary-400 font-bold mb-1 block">
                                        {image.category}
                                    </span>
                                    <h4 className="text-white font-bold text-sm">{image.title}</h4>
                                </div>
                            </motion.button>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox for Gallery */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[60] bg-slate-950/98 backdrop-blur-2xl p-4 md:p-8 flex items-center justify-center"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close gallery"
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-5xl w-full relative group"
                        >
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.title}
                                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/5"
                            />

                            {/* Navigation Buttons */}
                            <button
                                onClick={handlePrev}
                                aria-label="Previous image"
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary-600"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                aria-label="Next image"
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary-600"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            <div className="text-center mt-8">
                                <span className="text-primary-400 text-xs font-bold uppercase tracking-widest">{selectedImage.category}</span>
                                <h3 className="text-3xl font-bold text-white mt-2">{selectedImage.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GallerySection;

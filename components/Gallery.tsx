import React, { useState } from 'react';
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

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedImage) return;
        const currentIndex = galleryImages.findIndex(img => img.url === selectedImage.url);
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        setSelectedImage(galleryImages[nextIndex]);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedImage) return;
        const currentIndex = galleryImages.findIndex(img => img.url === selectedImage.url);
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setSelectedImage(galleryImages[prevIndex]);
    };

    return (
        <section id="gallery" className="py-24 bg-industrial-steel/30">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 tracking-tighter uppercase">
                        OPERATIONAL <span className="text-industrial-orange">SIGHTS</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10 font-sans">
                        Visual documentation of field deployments, machine optimizations, and technical milestones.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2 rounded-none text-[10px] font-industrial font-bold uppercase tracking-[0.2em] transition-all border ${selectedCategory === cat
                                    ? 'bg-industrial-orange border-industrial-orange text-slate-950 shadow-[0_0_20px_rgba(255,107,53,0.3)]'
                                    : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-600 hover:text-white'
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
                            <motion.div
                                layout
                                key={image.url}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => setSelectedImage(image)}
                                className="relative aspect-[4/3] rounded-none overflow-hidden cursor-pointer group bg-slate-900 border border-slate-800"
                            >
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="p-3 bg-industrial-orange text-slate-950 scale-75 group-hover:scale-100 transition-transform">
                                        <ZoomIn className="w-6 h-6" />
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <span className="text-[10px] uppercase font-industrial font-bold tracking-[0.2em] text-industrial-orange mb-1 block">
                                        {image.category === 'All' ? 'GENERAL_ASSET' : `${image.category.toUpperCase()}_LOG`}
                                    </span>
                                    <h4 className="text-white font-heading font-bold text-sm uppercase tracking-tight">{image.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
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
                            className="absolute top-8 right-8 text-white/50 hover:text-industrial-orange transition-colors p-2"
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
                                className="w-full h-auto max-h-[75vh] object-contain rounded-none shadow-2xl border border-slate-800"
                            />

                            {/* Navigation Buttons */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-slate-900/80 text-industrial-orange border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-industrial-orange hover:text-slate-950"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-slate-900/80 text-industrial-orange border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-industrial-orange hover:text-slate-950"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            <div className="text-center mt-8">
                                <span className="text-industrial-orange text-[10px] font-industrial font-bold uppercase tracking-[0.2em]">{selectedImage.category}</span>
                                <h3 className="text-3xl font-heading font-black text-white mt-2 uppercase tracking-tight">{selectedImage.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GallerySection;

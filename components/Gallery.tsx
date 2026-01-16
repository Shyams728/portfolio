import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { galleryImages } from '../constants';

const GallerySection: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

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
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Visual highlights from field operations and professional milestones.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setSelectedImage(image)}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group glass border border-slate-800/50"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
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
                        </motion.div>
                    ))}
                </div>
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
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-5xl w-full"
                        >
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.title}
                                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl mb-8 border border-white/5"
                            />
                            <div className="text-center">
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

import React from "react";

const testimonials = [
    {
        name: "Jessica Miller",
        role: "Social Media Manager, Glow Skincare",
        text: "This tool has completely transformed our content creation process. We've increased our posting frequency by 300% while maintaining brand consistency.",
        image: "/OIP (1).webp",
    },
    {
        name: "Kevin Lee",
        role: "Marketing Director, Pure Beauty",
        text: "The quality of content we can generate is amazing. Our engagement rates have never been higher, and we're saving so much time and money.",
        image: "/OIP (2).webp",
    },
    {
        name: "Tanya Davis",
        role: "Founder, Radiance Essentials",
        text: "As a small team, we struggled to create enough content. Now we generate a month's worth in just one afternoon. Game changer!",
        image: "/freepik__the-style-is-candid-image-photography-with-natural__39551.png",
    },
];

const companyLogos = [
    { src: "/pngtree-creative-company-logo-png-image_1197025.jpg", alt: "Company logo 1" },
    { src: "/real-estate-logo-design-template-35565e72ee2d02776a1e00b3edcfe535_screen.jpg", alt: "Company logo 2" },
    { src: "/pngtree-bird-and-fly-company-logo-and-symbol-png-image_3777052.jpg", alt: "Company logo 3" },
    { src: "/Company-logo-on-3d-glass-window-scaled.jpg", alt: "Company logo 4" },
    { src: "/a-logo-design_-company-logo-template-7246ba946d6686a9a5b984a1e4380b1b_screen.jpg", alt: "Company logo 5" },
];

const TestimonialsSection = () => {
    return (


        <section className="py-16 bg-white">

            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-2">Trusted by 100+ Teams</h2>
                <p className="text-gray-500 text-base">
                    See what our customers are saying about our AI content generation tool.
                </p>
            </div>

            {/* Testimonials */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-12 px-4 md:px-0">
                {testimonials.map((t, idx) => (
                    <div
                        key={idx}
                        className="bg-white border rounded-lg shadow p-6 flex-1 max-w-sm"
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-12 h-12 rounded-full object-cover mr-3 border border-gray-300"
                            />
                            <div>
                                <p className="font-semibold text-sm">{t.name}</p>
                                <p className="text-gray-400 text-xs">{t.role}</p>
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm">{t.text}</p>
                    </div>
                ))}
            </div>

            {/* Company Logos */}
            <div className="flex justify-center items-center gap-8 rounded-full mb-16 flex-wrap">
                {companyLogos.map((logo, idx) => (
                    <img
                        key={idx}
                        src={logo.src}
                        alt={logo.alt}
                        className="w-16 h-16 cursor-pointer rounded-full object-cover border border-gray-300 shadow-md"
                    />
                ))}
            </div>

            {/* CTA Section */}
            <div className="bg-green-200 rounded-lg shadow-md py-10 px-6 md:px-12 text-center max-w-4xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Ready to transform your content strategy?
                </h3>
                <p className="text-gray-700 mb-6">
                    Start your 7-day free trial today. No credit card required.
                </p>
                <button className="bg-white text-green-600 font-semibold px-6 py-2 rounded shadow hover:bg-green-50 transition">
                    Get Started Now →
                </button>
            </div>
        </section>
    );
};

export default TestimonialsSection;

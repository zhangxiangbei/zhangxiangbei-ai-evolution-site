/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      { source: "/ai-evolution/industry-cycle-is-compressed", destination: "/ai-evolution/ai-bubble-will-come", permanent: true },
      { source: "/ai-evolution/management-shifts-to-system-calibration", destination: "/ai-evolution/management-paradigm-shift", permanent: true },
      { source: "/ai-evolution/individual-as-small-intelligent-system", destination: "/ai-evolution/organization-myth-is-breaking", permanent: true },
      { source: "/ai-evolution/human-ai-interface-is-rewritten", destination: "/ai-evolution/human-ai-collaboration-capability", permanent: true },
      { source: "/ai-evolution/society-splits-by-ai-systems", destination: "/ai-evolution/ai-amplifies-inequality", permanent: true },
      { source: "/ai-evolution/civilization-narrative-after-ai", destination: "/ai-evolution/moral-dilemma-after-ai", permanent: true }
    ];
  }
};

export default nextConfig;

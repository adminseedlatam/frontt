/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
  }
  
  module.exports = nextConfig
  
  module.exports = {
    images: {
      domains: ['images.mirror-media.xyz','images.unsplash.com','i.imgur.com'],
    },

  async redirects() {
    return [
      {
        source: "/",
        destination: "https://seedorg.super.site/",
        permanent: true,
      },
      {
        source: "/governanceday",
        destination: "https://governanceday.framer.website/",
        permanent: true,
      },
  
      {
        source: "/bienvenida",
        destination: "https://www.notion.so/seedlatam/Bienvenidos-welcome-e3f40e15d2d84f4ab34653324a15842b",
        permanent: true,
      },
  
      {
        source: "/governanceday",
        destination: "https://seedlatam.notion.site/SEEDday-Ethereum-Argentina-cec57147c36f473f8b65ef793c24f338?pvs=4",
        permanent: true,
      },
  
      {
        source: "/governanceday/es",
        destination: "https://www.notion.so/seedlatam/GovernanceDay-ESP-46af4fde4f46483582d43516811c042f?pvs=4",
        permanent: true,
      },

      {
        source: "/governanceday/en",
        destination: "https://www.notion.so/seedlatam/Governance-Day-ENG-4f4f0d7773da4ecf9e39c97817d25064",
        permanent: true,
      },

  
      {
        source: "/events",
        destination: "https://www.notion.so/seedlatam/SEED-Latam-Events-627a0d0646d646ef8ab58c491b3e64cf",
        permanent: true,
      },
  
      {
        source: "/governanceday/event",
        destination: "https://seedlatam.notion.site/Governance-Day-Side-event-Ethereum-Argentina-ENG-4f4f0d7773da4ecf9e39c97817d25064?pvs=4",
        permanent: true,
      },
  
      {
        source: "/sofiavc",
        destination: "https://governance-seedlatam.notion.site/Sovereign-Finance-AVC-6790b6b2fa5544cbacc8d02da5c3b5e3",
        permanent: true,
      },
      {
        source: "/wiki",
        destination: "https://seedlatam.notion.site/e4b238dd9a2348e198ee4fdf301bf27d?v=211e14a11b1a448486eb5eb8d76c8590",
        permanent: true,
      },
  
      {
        source: "/poap",
        destination: "https://defilatam.vercel.app/poap/",
        permanent: true,
      },

      {
        source: "/proposal-starknet-latam-summit",
        destination: "https://seedlatam.notion.site/Proposal-Starknet-Latam-Summit-e01140e7dc7949c2929f59d327e15e75",
        permanent: true,
      },
  
      {
        source: '/(.*)',
        destination: 'https://seedlatam.notion.site/SEEDday-Ethereum-Argentina-cec57147c36f473f8b65ef793c24f338?pvs=4',
        has: [
          {
            type: 'host',
            value: 'governanceday.seedlatam.org',
          },
        ],
        permanent: true,
      },

    
     
    ];
  }}
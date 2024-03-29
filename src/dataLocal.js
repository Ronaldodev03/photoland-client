import {
  compact01,
  compact02,
  compact03,
  compact04,
  compact05,
  dslr01,
  dslr02,
  dslr03,
  dslr04,
  dslr05,
  filmCamera01,
  filmCamera02,
  filmCamera03,
  filmCamera04,
  filmCamera05,
  mirrorless01,
  mirrorless02,
  mirrorless03,
  mirrorless04,
  mirrorless05,
  professional01,
} from "./assets";

export const cameras = [
  {
    id: 1,
    type: "DSLR",
    typeId: 1,
    title: "Nikon D850 Camera DSLR 45.7MP CMOS Body",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: dslr01,
    price: 299,
    isNew: true,
  },
  {
    id: 2,
    type: "DSLR",
    typeId: 1,
    title: "Canon EOS 6D Mark II Camera DSLR 26.2MP CMOS Body",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: dslr02,
    price: 299,
    isNew: true,
  },

  {
    id: 3,
    type: "DSLR",
    typeId: 1,
    title: "Nikon D7500 Camera DSLR 20.9MP CMOS 4K Kit 18-140 mm",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: dslr03,
    price: 299,
    isNew: false,
  },
  {
    id: 4,
    type: "DSLR",
    typeId: 1,
    title: "Canon EOS 250D Kit with Camera Lens EF-S 18-55mm DC Black",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: dslr04,
    price: 299,
    isNew: false,
  },
  {
    id: 5,
    type: "DSLR",
    typeId: 1,
    title:
      "Canon EOS 2000D Camera DSLR 24.1MP CMOS Kit with Camera Lens EF-S 18-55mm f/3.5-5.6 III Black",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: dslr05,
    price: 299,
    isNew: false,
  },
  {
    id: 6,
    type: "PROFESSIONAL",
    typeId: 2,
    title: "Sigma FP Digital Camera Full Frame 24.6MP Body",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: professional01,
    price: 499,
    isNew: false,
  },
  {
    id: 7,
    type: "MIRRORLESS",
    typeId: 3,
    title: "Sony A7 III Body Photo Camera Mirrorless 24MP Full Frame 4K",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: mirrorless01,
    price: 199,
    isNew: false,
  },
  {
    id: 8,
    type: "MIRRORLESS",
    typeId: 3,
    title: "Canon EOS R6 Photo Camera Mirrorless Full-Frame 20.1 M",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: mirrorless02,
    price: 199,
    isNew: false,
  },
  {
    id: 9,
    type: "MIRRORLESS",
    typeId: 3,
    title:
      "Canon EOS M50 II Photo Camera Mirrorless 24MP Kit with Camera Lens EF-M 15-45mm F/3.5-6.3 IS STM Black",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: mirrorless03,
    price: 199,
    isNew: false,
  },
  {
    id: 10,
    type: "MIRRORLESS",
    typeId: 3,
    title:
      "Canon EOS R6 Mark II Photo Camera Mirrorless Full Frame 24.2MP Body Black",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: mirrorless04,
    price: 199,
    isNew: false,
  },
  {
    id: 11,
    type: "MIRRORLESS",
    typeId: 3,
    title: "Panasonic LUMIX S5 II Photo Camera Mirrorless Full Frame 24.2MP",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: mirrorless05,
    price: 299,
    isNew: true,
  },
  {
    id: 12,
    type: "FILM",
    typeId: 4,
    title: "Fujifilm Instax Mini 90 Neo Classic Photo Camera Instant Black",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: filmCamera01,
    price: 349,
    isNew: false,
  },
  {
    id: 13,
    type: "FILM",
    typeId: 4,
    title: "Fujifilm Instax Wide 300 Photo Camera Instant",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: filmCamera02,
    price: 349,
    isNew: true,
  },
  {
    id: 14,
    type: "FILM",
    typeId: 4,
    title: "Agfaphoto Photo Camera Analog 35mm Reusable Black",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: filmCamera03,
    price: 349,
    isNew: false,
  },
  {
    id: 15,
    type: "FILM",
    typeId: 4,
    title: "Fujifilm Instax Mini 40 Photo Camera Instant Black",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: filmCamera04,
    price: 349,
    isNew: false,
  },
  {
    id: 16,
    type: "FILM",
    typeId: 4,
    title: "Fujifilm Instax Mini Evo Hybrid Photo Camera Instant",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: filmCamera05,
    price: 299,
    isNew: false,
  },
  {
    id: 17,
    type: "COMPACT",
    typeId: 5,
    title:
      "Sony Cyber-shot DSC-RX10 IV Photo Camera Compact 20.1MP Wi-Fi Bluetooth Black",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: compact01,
    price: 299,
    isNew: false,
  },
  {
    id: 18,
    type: "COMPACT",
    typeId: 5,
    title:
      "Sony Cyber-Shot DSC-RX100 VA - Photo Camera, 20,1 MP, Zoom Optic, 2.9x, ZEISS Vario-Sonnar",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: compact02,
    price: 199,
    isNew: false,
  },
  {
    id: 19,
    type: "COMPACT",
    typeId: 5,
    title:
      "Panasonic Lumix FZ1000 II Photo Camera Bridge 20.1 MP Zoom 16x 4K Black",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: compact03,
    price: 299,
    isNew: true,
  },
  {
    id: 20,
    type: "COMPACT",
    typeId: 5,
    title: "Nikon Coolpix P1000 Photo Camera Bridge 16MP Black",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: compact04,
    price: 199,
    isNew: true,
  },
  {
    id: 21,
    type: "COMPACT",
    typeId: 5,
    title: "Olympus TG-6 Photo Camera Compact Subacvatic 12MP 4K Black",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    src: compact05,
    price: 199,
    isNew: false,
  },
];

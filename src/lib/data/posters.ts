export interface ServicePoster {
  id: string;
  label: string;
  image: string;
  category: string;
  description: string;
  details: string[];
  whatsappNumber: string;
}

export const servicePosters: ServicePoster[] = [
  // ── Health Screenings ────────────────────────────────────────────────────
  {
    id: "screening-pelajar-ipta",
    label: "Saringan Pelajar (IPTA/IPTS)",
    image: "/images/services/service1.jpeg",
    category: "Health Screenings",
    description:
      "Health screening package designed for university and college students enrolling in IPTA or IPTS institutions. Meets all standard university health declaration requirements.",
    details: [
      "Chest X-Ray",
      "Visual acuity (eye) test",
      "Urine analysis (FEME)",
      "Blood group typing",
      "Physical examination by doctor",
      "Health declaration letter issued",
    ],
    whatsappNumber: "60162235212",
  },
  {
    id: "screening-pelajar-sekolah",
    label: "Saringan Pelajar (Sekolah)",
    image: "/images/services/service2.jpeg",
    category: "Health Screenings",
    description:
      "Comprehensive health screening for primary and secondary school students. Includes full blood panel and school health report.",
    details: [
      "Full blood count (FBC)",
      "Blood glucose screening",
      "Urine analysis",
      "Visual acuity test",
      "Weight, height & BMI assessment",
      "School health report issued",
    ],
    whatsappNumber: "60162235212",
  },
  {
    id: "screening-gdl-psv-baru",
    label: "Saringan GDL/PSV (Baru)",
    image: "/images/services/service3.jpeg",
    category: "Health Screenings",
    description:
      "Medical examination required for new GDL (Goods Driving Licence) or PSV (Public Service Vehicle) licence applicants. JPJ-compliant and results issued same day.",
    details: [
      "Physical and cardiovascular examination",
      "Vision and colour-blindness test",
      "Hearing assessment",
      "Reflex and coordination check",
      "Blood pressure measurement",
      "JPJ-format medical report issued",
    ],
    whatsappNumber: "60162235212",
  },
  {
    id: "screening-full-deluxe-lelaki",
    label: "Full Deluxe (Lelaki)",
    image: "/images/services/service4.jpeg",
    category: "Health Screenings",
    description:
      "Our most comprehensive male health screening package for men aged 40 and above. Covers cardiovascular risk, cancer markers, and organ function.",
    details: [
      "Full blood count & lipid panel",
      "Blood glucose & HbA1c",
      "Liver and kidney function tests",
      "PSA (prostate cancer marker)",
      "Thyroid function (TSH)",
      "Chest X-Ray & ECG",
      "Urine & stool analysis",
      "Doctor consultation included",
    ],
    whatsappNumber: "60162235212",
  },
  {
    id: "screening-standard",
    label: "Saringan Standard",
    image: "/images/services/service5.jpeg",
    category: "Health Screenings",
    description:
      "Our most popular all-in-one screening package. Covers the key markers for metabolic, cardiovascular, and organ health - suitable for all adults.",
    details: [
      "Full blood count (FBC)",
      "Fasting blood glucose",
      "Full lipid profile (cholesterol)",
      "Liver function test (LFT)",
      "Kidney function test (RFT)",
      "Thyroid function (TSH)",
      "Urine FEME",
      "Doctor consultation included",
    ],
    whatsappNumber: "60162235212",
  },
  {
    id: "screening-pekerjaan-asas",
    label: "Saringan Pekerjaan (Asas)",
    image: "/images/services/service6.jpeg",
    category: "Health Screenings",
    description:
      "Basic pre-employment medical check accepted by most employers. Fast turnaround with a printed medical fitness letter.",
    details: [
      "Physical examination",
      "Blood pressure & pulse",
      "Urine dipstick test",
      "Vision screening",
      "Medical fitness letter issued",
    ],
    whatsappNumber: "60162235212",
  },
  {
    id: "screening-full-deluxe-wanita",
    label: "Full Deluxe (Wanita)",
    image: "/images/services/service7.jpeg",
    category: "Health Screenings",
    description:
      "Comprehensive female health screening for women aged 40 and above. Includes female-specific cancer markers and hormone panel.",
    details: [
      "Full blood count & lipid panel",
      "Blood glucose & HbA1c",
      "Liver and kidney function tests",
      "CA-125 (ovarian cancer marker)",
      "CEA (colorectal cancer marker)",
      "Thyroid function (TSH)",
      "Chest X-Ray & ECG",
      "Urine & stool analysis",
      "Pap Smear (optional add-on)",
      "Doctor consultation included",
    ],
    whatsappNumber: "60162235212",
  },
  {
    id: "screening-gdl-psv-renew",
    label: "Saringan GDL/PSV (Renew)",
    image: "/images/services/service8.jpeg",
    category: "Health Screenings",
    description:
      "Medical check for GDL/PSV licence renewal. Quick process designed for working drivers - results and JPJ report issued on the same visit.",
    details: [
      "Physical and cardiovascular examination",
      "Vision and colour-blindness test",
      "Blood pressure measurement",
      "Reflex check",
      "JPJ renewal medical report issued",
    ],
    whatsappNumber: "60162235212",
  },
  {
    id: "screening-asas",
    label: "Saringan Kesihatan Asas",
    image: "/images/services/service9.jpeg",
    category: "Health Screenings",
    description:
      "Essential health check for adults who want a baseline picture of their health. Covers the most important blood and organ markers at an affordable price.",
    details: [
      "Full blood count (FBC)",
      "Random blood glucose",
      "Cholesterol screening",
      "Kidney function (creatinine, urea)",
      "Urine FEME",
      "Doctor consultation included",
    ],
    whatsappNumber: "60162235212",
  },
  {
    id: "screening-pekerjaan-lengkap",
    label: "Saringan Pekerjaan (Lengkap)",
    image: "/images/services/service10.jpeg",
    category: "Health Screenings",
    description:
      "Full pre-employment medical for roles requiring a thorough health clearance - including X-Ray, ECG, drug test, and a complete blood panel.",
    details: [
      "Full blood count & blood glucose",
      "Liver and kidney function tests",
      "Chest X-Ray",
      "ECG (heart rhythm)",
      "Urine drug screening",
      "Urine FEME",
      "Medical fitness letter issued",
    ],
    whatsappNumber: "60162235212",
  },

  // ── Vaccinations ─────────────────────────────────────────────────────────
  {
    id: "vaksin-gardasil",
    label: "Vaksin Gardasil 9",
    image: "/images/services/service11.jpeg",
    category: "Vaccinations",
    description:
      "Gardasil 9 HPV vaccine protects against 9 strains of human papillomavirus, including those responsible for most cervical cancers. Recommended for females aged 9–45.",
    details: [
      "Protects against HPV strains 6, 11, 16, 18, 31, 33, 45, 52, 58",
      "3-dose schedule (0, 2, 6 months)",
      "Recommended for females aged 9–45",
      "May also be given to males",
      "Vaccination record card provided",
    ],
    whatsappNumber: "60162235212",
  },
  {
    id: "vaksin-meningococcal",
    label: "Vaksin Meningococcal",
    image: "/images/services/service12.jpeg",
    category: "Vaccinations",
    description:
      "Meningococcal vaccine is mandatory for all Haji and Umrah pilgrims. Protects against bacterial meningitis and is valid for 5 years from date of vaccination.",
    details: [
      "Protects against Neisseria meningitidis (groups A, C, W, Y)",
      "Single-dose injection",
      "Mandatory for Haji & Umrah travel",
      "Valid for 5 years",
      "Official vaccination certificate issued (Tabung Haji format)",
    ],
    whatsappNumber: "60162235212",
  },
  {
    id: "vaksin-typhoid",
    label: "Vaksin Typhoid",
    image: "/images/services/service13.jpeg",
    category: "Vaccinations",
    description:
      "Typhoid vaccine is mandatory for food handlers, restaurant workers, and caterers under Malaysian food safety regulations. Certificate issued on the same visit.",
    details: [
      "Single-dose injection (Vi polysaccharide)",
      "Protection lasts 3 years",
      "Mandatory for all food handlers",
      "Food handler vaccination certificate issued",
      "Valid for submission to MITI/local authorities",
    ],
    whatsappNumber: "60162235212",
  },
  {
    id: "vaksin-influenza",
    label: "Vaksin Influenza",
    image: "/images/services/service14.jpeg",
    category: "Vaccinations",
    description:
      "Annual influenza (flu) vaccine updated each year to match circulating strains. Recommended for young children, pregnant women, the elderly, and those with chronic conditions.",
    details: [
      "Quadrivalent (4-strain) formulation",
      "Annual vaccination recommended",
      "Suitable from 6 months of age",
      "Especially recommended for pregnant women, elderly, and immunocompromised patients",
      "Vaccination record updated",
    ],
    whatsappNumber: "60162235212",
  },
  {
    id: "vaksin-pneumococcal",
    label: "Vaksin Pneumococcal",
    image: "/images/services/service15.jpeg",
    category: "Vaccinations",
    description:
      "Synflorix (PCV10) pneumococcal vaccine for infants and young children. Protects against the bacteria that cause pneumonia, meningitis, and serious ear infections.",
    details: [
      "Synflorix (PCV10) - 10-valent conjugate vaccine",
      "Protects against Streptococcus pneumoniae",
      "Guards against pneumonia, meningitis & otitis media",
      "4-dose schedule (2, 4, 6 months + booster)",
      "Vaccination card updated",
    ],
    whatsappNumber: "60162235212",
  },
  {
    id: "vaksin-rotavirus",
    label: "Vaksin Rotavirus",
    image: "/images/services/service16.jpeg",
    category: "Vaccinations",
    description:
      "Rotavirus oral vaccine for infants to prevent severe gastroenteritis (vomiting and diarrhoea). Must be administered before 6 months of age.",
    details: [
      "Oral vaccine (not an injection)",
      "2-dose schedule (6 weeks & 10 weeks)",
      "Must complete before 24 weeks of age",
      "Prevents severe diarrhoea and dehydration in infants",
      "Vaccination card updated",
    ],
    whatsappNumber: "60162235212",
  },

  // ── Family Planning ───────────────────────────────────────────────────────
  {
    id: "implanon",
    label: "Pemasangan Implanon",
    image: "/images/services/service17.jpeg",
    category: "Family Planning",
    description:
      "Implanon is a long-acting reversible contraceptive (LARC) - a small flexible rod implanted under the skin of the upper arm. Over 99% effective and lasts up to 3 years.",
    details: [
      "Small rod implanted under upper arm skin",
      "Over 99% contraceptive effectiveness",
      "Lasts up to 3 years",
      "Reversible - can be removed at any time",
      "Procedure takes under 5 minutes",
      "No daily pill required",
      "Follow-up consultation included",
    ],
    whatsappNumber: "60162235212",
  },
];

export const getPosterById = (id: string): ServicePoster | undefined =>
  servicePosters.find((p) => p.id === id);

export const postersByCategory = servicePosters.reduce<
  Record<string, ServicePoster[]>
>((acc, poster) => {
  if (!acc[poster.category]) acc[poster.category] = [];
  acc[poster.category].push(poster);
  return acc;
}, {});

export interface ServiceCategory {
  title: string;
  titleBm: string;
  services: { name: string; nameBm?: string }[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: "General / Outpatient",
    titleBm: "Rawatan Am / Pesakit Luar",
    services: [
      { name: "Treatment of Minor Illnesses — Cough, Cold, Fever, Diarrhea, Dyspepsia", nameBm: "Rawatan Penyakit Ringan" },
      { name: "Treatment of Chronic Diseases — Hypertension, Diabetes, Gout, Hyperlipidemia", nameBm: "Rawatan Penyakit Kronik" },
      { name: "Treatment of Children and Infants", nameBm: "Rawatan Kanak-kanak dan Bayi" },
      { name: "Antenatal and Postnatal Care", nameBm: "Rawatan Antenatal dan Postnatal" },
      { name: "Family Planning Management", nameBm: "Pengurusan Perancangan Keluarga" },
      { name: "Wound Care and Dressing", nameBm: "Rawatan dan Pencucian Luka" },
      { name: "Small Surgery", nameBm: "Pembedahan Kecil" },
      { name: "Nebulisation" },
    ],
  },
  {
    title: "Diagnostics",
    titleBm: "Diagnostik",
    services: [
      { name: "Ultrasound Scan", nameBm: "Scan Ultrasound" },
      { name: "X-Ray" },
      { name: "ECG / Heart Rhythm Test", nameBm: "Pemeriksaan Jantung" },
      { name: "Blood and Urine Test", nameBm: "Ujian Darah dan Kencing" },
      { name: "Drug Test", nameBm: "Ujian Dadah" },
      { name: "Pap Smear" },
      { name: "Medical Check-up and Blood Screening", nameBm: "Pemeriksaan Kesihatan dan Saringan Darah" },
      { name: "Pregnancy Test" },
    ],
  },
  {
    title: "Vaccinations",
    titleBm: "Vaksinasi",
    services: [
      { name: "Influenza Vaccine", nameBm: "Vaksinasi Influenza" },
      { name: "Typhoid Vaccine", nameBm: "Vaksinasi Pengendali Makanan" },
      { name: "Meningococcal Vaccine", nameBm: "Vaksinasi Umrah" },
      { name: "Tetanus Vaccine", nameBm: "Vaksinasi Kancing Gigi" },
      { name: "Hepatitis B Vaccine" },
      { name: "Chicken Pox Vaccine" },
    ],
  },
];

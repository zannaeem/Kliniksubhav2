export interface PricingCategory {
  title: string;
  items: { service: string; rate: string }[];
}

export const pricingData: PricingCategory[] = [
  {
    title: "Consultation",
    items: [
      { service: "Short Consultation", rate: "RM 15 – 35" },
      { service: "Medium Consultation", rate: "RM 36 – 55" },
      { service: "Long Consultation", rate: "RM 70" },
    ],
  },
  {
    title: "Outpatient Treatments (incl. consultation)",
    items: [
      { service: "Allergy / Asthma / Diarrhea / Ear or Eye Infection / Syringing", rate: "RM 55 – 70" },
      { service: "ECG Test", rate: "RM 50" },
      { service: "Fever", rate: "RM 55 – 70" },
      { service: "General Pain", rate: "RM 55 – 70" },
      { service: "Headache / Migraine", rate: "RM 55 – 70" },
      { service: "Nausea & Vomiting", rate: "RM 55 – 90" },
      { service: "Nebuliser", rate: "RM 25" },
      { service: "Pregnancy Test", rate: "RM 15" },
      { service: "Skin Diseases", rate: "RM 55 – 100" },
      { service: "Venereal Disease", rate: "RM 55 – 100" },
      { service: "Upper Respiratory Infections", rate: "RM 55 – 70" },
    ],
  },
  {
    title: "Chronic Medical",
    items: [
      { service: "Diabetes", rate: "RM 55 – 200" },
      { service: "Hypertension / Cholesterol / Gout", rate: "RM 55 – 200" },
    ],
  },
  {
    title: "Vaccination & Immunisation (with consultation)",
    items: [
      { service: "Anti Tetanus", rate: "RM 55" },
      { service: "Hepatitis B", rate: "RM 90" },
      { service: "Meningococcal", rate: "RM 195" },
      { service: "Influenza", rate: "RM 120" },
      { service: "Chicken Pox", rate: "RM 300" },
      { service: "Typhoid", rate: "RM 85" },
    ],
  },
  {
    title: "Other Services",
    items: [
      { service: "Blood Test", rate: "Lab-dependent" },
      { service: "Family Planning", rate: "RM 30 – 50" },
      { service: "Ultrasound Scan (Pregnancy)", rate: "RM 50" },
      { service: "Minor Surgery", rate: "Procedure-dependent" },
      { service: "Wound Dressing", rate: "Size & tools dependent" },
      { service: "X-Ray", rate: "View-dependent" },
    ],
  },
];

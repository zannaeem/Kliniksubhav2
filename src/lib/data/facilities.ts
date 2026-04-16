export interface Facility {
  name: string;
  image: string;
}

export interface FacilityBranch {
  branch: string;
  facilities: Facility[];
}

export const facilityBranches: FacilityBranch[] = [
  {
    branch: "Beaufort Branch",
    facilities: [
      { name: "Main Entrance", image: "/images/facilities/main-entrance.png" },
      { name: "Registration & Dispensary Counter", image: "/images/facilities/registration-counter.png" },
      { name: "Waiting Room 1", image: "/images/facilities/waiting-room-1.png" },
      { name: "Waiting Room 2", image: "/images/facilities/waiting-room-2.png" },
      { name: "Consultation Room 1", image: "/images/facilities/consultation-room-1.png" },
      { name: "Consultation Room 2", image: "/images/facilities/consultation-room-2.png" },
      { name: "Treatment Room 1", image: "/images/facilities/treatment-room-1.png" },
      { name: "Treatment Room 2", image: "/images/facilities/treatment-room-2.png" },
      { name: "X-Ray Room", image: "/images/facilities/xray-room.png" },
    ],
  },
];

// Keep old export for any other components that may reference it
export const facilities = facilityBranches[0].facilities;

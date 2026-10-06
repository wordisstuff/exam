export type ExamTrackId = "qb" | "qc" | "qr";

export interface ExamTrack {
  id: ExamTrackId;
  code: "QB" | "QC" | "QR";
  title: string;
  licensePath: string;
  scope: string;
  status: "active" | "planned";
  questionTarget: number;
  coreDomains: string[];
}

export const examTracks: ExamTrack[] = [
  {
    id: "qb",
    code: "QB",
    title: "Qualifying Builder",
    licensePath: "Residential Building Contractor (BC)",
    scope: "Residential new construction plus remodeling scope.",
    status: "active",
    questionTarget: 1000,
    coreDomains: [
      "Plans and Specifications",
      "Building Planning / Life Safety",
      "Sitework",
      "Footings and Foundations",
      "Concrete and Masonry",
      "Carpentry and Framing",
      "Roofing",
      "Exterior Finishes",
      "Insulation and Energy Code",
      "Interior Finishes",
      "Moisture / Weather Protection",
      "Mechanical / Plumbing / Electrical Coordination",
      "Job Site Safety",
      "Minnesota Contractor Law / Business"
    ]
  },
  {
    id: "qc",
    code: "QC",
    title: "Qualifying Remodeler",
    licensePath: "Residential Remodeler (CR)",
    scope: "Residential work on existing structures; no new-home or detached-garage construction under the CR license.",
    status: "planned",
    questionTarget: 700,
    coreDomains: [
      "Existing-Building Assessment",
      "Plans and Specifications",
      "Building Planning / Life Safety",
      "Structural Alterations",
      "Foundations and Repairs",
      "Carpentry and Framing",
      "Roofing and Flashing",
      "Exterior Finishes",
      "Insulation and Energy Improvements",
      "Interior Finishes",
      "Moisture / Weather Protection",
      "Trade Coordination",
      "Job Site Safety",
      "Minnesota Contractor Law / Business"
    ]
  },
  {
    id: "qr",
    code: "QR",
    title: "Qualifying Roofer",
    licensePath: "Residential Roofer (RR)",
    scope: "Residential roofing work only under the RR license.",
    status: "planned",
    questionTarget: 500,
    coreDomains: [
      "Roof Geometry and Measurement",
      "Roof Decks and Sheathing",
      "Underlayment and Ice Barriers",
      "Asphalt Shingles",
      "Wood / Metal / Specialty Roof Coverings",
      "Flashing",
      "Valleys / Penetrations / Sidewalls",
      "Ventilation",
      "Weather Protection",
      "Roof Drainage Boundaries",
      "Fall Protection and Ladders",
      "Minnesota Roofing Law / Contracts / Insurance"
    ]
  }
];

export const activeExamTrack = examTracks.find((track) => track.status === "active")!;

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/api/v1';

export interface ProfileData {
  full_name: string;
  role_title: string;
  location: string;
  bio_paragraph_1: string;
  bio_paragraph_2: string;
  bio_paragraph_3?: string;
  avatar?: string;
  photo?: string;
  resume_file?: string;
  years_building: number;
  live_projects_count: number;
  ml_frameworks_count: number;
  tools_count: number;
  github_url?: string;
  linkedin_url?: string;
  upwork_url?: string;
  email?: string;
  badges: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  description: string;
  tech_stack: string[];
  type?: "dashboard" | "ml" | "shop";
  category: "fullstack" | "ai" | "fullstack+ai";
  tag: string;
  image?: string;
  diagram_svg?: string;
  browser_url_label?: string;
  source_url?: string;
  live_url?: string;
  featured: boolean;
}

export interface CertificationData {
  title: string;
  subtitle: string;
  badge_icon: string;
}

export async function fetchProfile(): Promise<ProfileData> {
  const res = await fetch(`${API_BASE}/profile/`);
  if (!res.ok) throw new Error("Failed to fetch profile");
  return res.json();
}

export async function fetchSkills(): Promise<SkillCategory[]> {
  const res = await fetch(`${API_BASE}/skills/`);
  if (!res.ok) throw new Error("Failed to fetch skills");
  return res.json();
}

export async function fetchProjects(featured?: boolean): Promise<ProjectData[]> {
  const url = featured ? `${API_BASE}/projects/?featured=true` : `${API_BASE}/projects/`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export async function fetchCertifications(): Promise<CertificationData[]> {
  const res = await fetch(`${API_BASE}/certifications/`);
  if (!res.ok) throw new Error("Failed to fetch certifications");
  return res.json();
}

export async function submitContact(data: { name: string; email: string; message: string }) {
  const res = await fetch(`${API_BASE}/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to send message");
  return res.json();
}

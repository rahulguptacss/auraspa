import data from '../data/data.json';

export interface LinkType {
  name: string;
  href: string;
  active?: boolean;
  children?: LinkType[];
}

export interface HeaderData {
  logo_text: string;
  logo_icon?: string;
  links: LinkType[];
  button_text: string;
  button_link: string;
}

export interface FooterData {
  logo_text: string;
  logo_subtitle?: string;
  logo_icon?: string;
  description: string;
  socials: { icon: string; href: string }[];
  quick_links: LinkType[];
  our_services: LinkType[];
  contact: { address_label?: string; address: string; phone_label?: string; phone: string; email_label?: string; email: string };
  copyright: string;
}

export interface HeroSlide {
  title_line1: string;
  title_highlight: string;
  title_line2: string;
  description: string;
  primary_button: { text: string; href: string };
  secondary_button: { text: string; href: string };
  info_line: string;
  info_icon: string;
  image: string;
}

export interface HeroSectionData {
  slides: HeroSlide[];
  ornament_image?: string;
}

export interface AboutSectionData {
  subtitle: string;
  title_line1: string;
  title_line2: string;
  description: string;
  stats: { value: string; label: string }[];
  button: { text: string; href: string };
  image1: string;
  image2: string;
  decoration_image?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  icon: string;
  link: string;
  slug?: string;
  details?: {
    keyBenefits: { title: string; desc: string; icon: string; }[];
    galleryImages: string[];
    faqs: { question: string; answer: string; }[];
  };
}

export interface ServicesSectionData {
  subtitle: string;
  title_line1: string;
  description: string;
  button: { text: string; href: string };
  items: ServiceItem[];
}

export interface VideoPromoData {
  subtitle: string;
  title_line1: string;
  description: string;
  video_id: string;
  image: string;
  features: { title: string; icon: string }[];
}

export interface FeatureSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  title_line2: string;
  description: string;
  points: { title: string; description: string; icon: string }[];
  stats: { value: string; label: string; icon: string }[];
  image1: string;
  image2: string;
  badge_year: string;
}

export interface PackageItem {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  duration: string;
  mostPopular?: boolean;
}

export interface PackagesSectionData {
  subtitle: string;
  title_line1: string;
  description: string;
  button: { text: string; href: string };
  image: string;
}

export interface PackageGridData {
  subtitle: string;
  title: string;
  description: string;
  categories: string[];
  items: PackageItem[];
}

export interface PackageGridProps { data: PackageGridData }

export interface TestimonialsSectionData {
  subtitle: string;
  title_line1: string;
  description: string;
  reviews: { text: string; author: string; role: string; rating: number; avatar: string }[];
  bg_image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: { facebook: string; instagram: string; linkedin: string; email: string };
}

export interface TeamSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  members: TeamMember[];
  decoration_image?: string;
}

export interface CTASectionData {
  title_line1: string;
  title_highlight: string;
  title_line2: string;
  description: string;
  button: { text: string; href: string };
  image: string;
}

export interface BookAppointmentSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  title_line2: string;
  description: string;
  image: string;
  form: {
    title_line1: string;
    title_highlight: string;
    description: string;
    button_text: string;
  };
  features: { title: string; description: string; icon: string }[];
}

export interface FAQSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  questions: { q: string; a: string }[];
  bg_image?: string;
}

export interface ContactInfoCard {
  title: string;
  detail1: string;
  detail2?: string;
  icon: string;
}

export interface ContactForm {
  name_placeholder: string;
  email_placeholder: string;
  phone_placeholder: string;
  subject_placeholder: string;
  message_placeholder: string;
  button_text: string;
}

export interface ContactSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  map_iframe_url: string;
  info_cards: ContactInfoCard[];
  form: ContactForm;
  bg_image?: string;
}

export interface ThankYouSectionData {
  bg_image: string;
  title: string;
  subtitle: string;
  description: string;
  button: { text: string; href: string };
}

export interface GalleryItem {
  id: number;
  category: string;
  image: string;
}

export interface GallerySectionData {
  subtitle: string;
  title: string;
  description: string;
  categories: string[];
  items: GalleryItem[];
}

export interface GalleryProps { data: GallerySectionData }

export interface HeaderProps { data: HeaderData }
export interface FooterProps { data: FooterData }
export interface HeroProps { data: HeroSectionData }
export interface AboutProps { data: AboutSectionData }
export interface ServicesProps { data: ServicesSectionData; isGrid?: boolean }
export interface VideoPromoProps { data: VideoPromoData }
export interface FeatureProps { data: FeatureSectionData }
export interface PackagesProps { data: PackagesSectionData }
export interface TestimonialsProps { data: TestimonialsSectionData }
export interface CTAProps { data: CTASectionData }
export interface TeamProps { data: TeamSectionData }
export interface BookAppointmentProps { data: BookAppointmentSectionData }
export interface FAQProps { data: FAQSectionData }
export interface ContactProps { data: ContactSectionData }
export interface ThankYouProps { data: ThankYouSectionData }

export const siteJson = data;
export const common = data.common;
export const template = data.categories.Spa.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;

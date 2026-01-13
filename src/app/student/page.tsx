import StudentClient from './StudentClient';
import { buildMetadata } from '../_utils/seo';
import FaqSchema, { type FaqItem } from '../_components/FaqSchema';
import { siteConfig } from '../_config/site';

export const metadata = buildMetadata({
  title: 'Student Accommodation — Seshego Zone 2',
  description:
    'NSFAS accredited student accommodation in Seshego Zone 2, Polokwane — 1.39 km from Capricorn TVET College. Book via NSFAS or WhatsApp.',
  path: '/student',
  keywords: [
    'NSFAS accredited student accommodation',
    'student rooms Seshego Zone 2',
    'Capricorn TVET College rooms',
    'NSFAS accommodation Polokwane',
  ],
});

const faqs: readonly FaqItem[] = [
  {
    question: 'Is the student accommodation NSFAS accredited?',
    answer: `Yes. ${siteConfig.shortName} student accommodation is NSFAS accredited.`,
  },
  {
    question: 'How far is it from Capricorn TVET College?',
    answer: `Approximately ${siteConfig.highlights.studentDistanceKm} km from Capricorn TVET College.`,
  },
  {
    question: 'Where is the student accommodation located?',
    answer: `${siteConfig.locations.student.street}, ${siteConfig.locations.student.locality}.`,
  },
  {
    question: 'How do I book a student room?',
    answer:
      'You can book via the NSFAS portal (preferred) or contact us directly via WhatsApp/call for availability and guidance.',
  },
  {
    question: 'What types of rooms are available?',
    answer:
      'The property includes bachelor rooms and rooms in shared-house setups. Exact availability depends on current occupancy—contact us for the latest options.',
  },
];

export default function StudentPage() {
  return (
    <>
      <StudentClient />
      <FaqSchema pageUrl="/student" items={faqs} />
    </>
  );
}

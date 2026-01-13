import GalleryClient from './GalleryClient';
import { buildMetadata } from '../_utils/seo';

export const metadata = buildMetadata({
  title: 'Gallery',
  description: 'Photos of student and general accommodation in Seshego, Polokwane.',
  path: '/gallery',
  keywords: ['accommodation gallery', 'student accommodation photos', 'Seshego rooms photos'],
});

export default function GalleryPage() {
  return <GalleryClient />;
}

import { buildPageMetadata } from '../../lib/seo/site-metadata';
import { DesktopSurface } from '../../components/desktop-surface';

export const metadata = buildPageMetadata({
  title: 'Crew Surface | Desktop planning for groups',
  description:
    'Explore the first desktop-friendly Crew surface with a plan board, activity rail, and crew stack built for larger screens.',
  path: '/surface',
});

export default function SurfacePage() {
  // Desktop surface route for the crew stack, plan board, and activity rail.
  return <DesktopSurface />;
}

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getService, getServiceSlugs } from '@/features/services/repositories/service.repository';
import { ServiceDetail } from '@/features/services/components/ServiceDetail';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    openGraph: service.seo.ogImage
      ? { images: [{ url: service.seo.ogImage }] }
      : undefined,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const content = getService(slug);

  if (!content) {
    notFound();
  }

  return <ServiceDetail slug={slug} />;
}


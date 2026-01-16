import Link from 'next/link';

type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function CategoryCard({ title, description, href }: CategoryCardProps) {
  return (
    <Link className="card" href={href}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="card-link">자세히 보기 →</span>
    </Link>
  );
}

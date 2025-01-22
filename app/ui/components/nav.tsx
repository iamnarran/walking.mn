import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <Link href="/">Нүүр</Link>
        </li>
        <li>
          <Link href="/routes">Зам</Link>
        </li>
        <li>
          <Link href="/clubs">Клуб</Link>
        </li>
        <li>
          <Link href="/contact">Холбоо барих</Link>
        </li>
        <li>
          <Link href="/help">Тусламж</Link>
        </li>
      </ul>
    </nav>
  );
}

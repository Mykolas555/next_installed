import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/product">Go to Product Page</Link>
          </li>
          <li>
            <Link href="/products">Go to Products Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

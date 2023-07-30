import { navigationList } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex w-full items-center px-5 py-3">
      <ul className="flex gap-10 w-full justify-between">
        <li>
          <Link href="/" className="flex gap-4 items-center">
            <span>Bichon frisé</span>
            <div className="relative w-14 h-13">
              <FontAwesomeIcon icon={faDog} />
            </div>
          </Link>
        </li>
        <li className="flex gap-2">
          {navigationList.map((n) => (
            <a href={n.link} key={n.title} className="color">
              {n.title}
            </a>
          ))}
        </li>
        <li className="flex gap-2">
          {/* expaned search */}
          <a href="/">Search icon to search input</a>
          <a href="/about">Person icon</a>
          <a href="/services">Корзина</a>
          <a href="/shop">Button</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

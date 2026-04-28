import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      <div className="absolute w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full top-0 left-0"></div>
      <div className="absolute w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full bottom-0 right-0"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src="https://i.ibb.co.com/CsNMQ7HJ/logo.png"
              alt="logo"
              width={40}
              height={40} />
            <h1 className="text-3xl font-extrabold text-white">
              PixGen<span className="text-purple-500">AI</span>
            </h1>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Turn imagination into reality using AI-powered image generation.
              Create. Explore. Inspire.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Explore</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-purple-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-purple-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/create" className="hover:text-purple-400">
                  Create AI
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-purple-400">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Connect</h2>

            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-blue-400">
                Facebook
              </a>
              <a href="#" className="hover:text-sky-400">
                Twitter
              </a>
              <a href="#" className="hover:text-white">
                GitHub
              </a>
            </div>

            <div className="mt-4 text-sm">
              <Link href="/about" className="hover:text-purple-400">
                About
              </Link>
              <span className="mx-2">|</span>
              <Link href="/privacy" className="hover:text-purple-400">
                Privacy
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-800"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">PixGen AI</span>. Built
          with ❤️ using AI creativity.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

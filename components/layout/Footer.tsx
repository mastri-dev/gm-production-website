export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-gray-400 mt-20">
      <p>© {new Date().getFullYear()} GM Production</p>
      <p>info@gmproduction.it</p>
    </footer>
  );
}
export default function Header() {
  return (
    <header className="w-full  max-w-screen-xl bg-white shadow-sm">
      <div className="text-xl x-auto flex justify-between items-center py-4 px-6">
        <p className="text-3xl font-bold text-gray-900">Lucas Ryan</p>
        
        <nav className="space-x-6">
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
          <a href="#resume" className="text-gray-700 hover:text-gray-900 transition-colors">Resume</a>
        </nav>
      </div>
    </header>
  );
}

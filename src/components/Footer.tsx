export default function Footer() {
  return (
    <footer className="w-full py-10 border-t border-white/5 flex items-center justify-between text-white/20 text-[10px] uppercase tracking-widest font-bold">
      <p>© 2026 Kushal B T</p>
      <div className="flex items-center gap-4">
        <a href="#" className="hover:text-white transition-colors">Vercel</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">System</a>
      </div>
    </footer>
  );
}

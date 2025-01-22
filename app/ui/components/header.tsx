import Nav from '@/app/ui/components/nav';

export default function Header() {
  return (
    <header className="fixed flex w-full items-center gap-8 bg-slate-100 p-4">
      <div className="mr-auto flex items-center gap-4">
        <div className="h-8 w-8 bg-slate-200"></div>
        <h2 className="uppercase">Монголын Явган Алхалтын Холбоо</h2>
      </div>

      <Nav />

      <div className="flex items-center gap-4">
        <button className="rounded bg-green-700 px-4 py-2 text-white hover:bg-green-600">
          Нэвтрэх
        </button>
        <button className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300">
          Бүртгүүлэх
        </button>
      </div>
    </header>
  );
}

import LogoDi2win from './../../assets/logo_di2win.svg';
import IconSino from './../../assets/sino1.png';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#F31E8D] shadow-md">
      <div className="flex items-center gap-4">
        <img src={LogoDi2win} alt="Logo Di2win" className="h-10 w-auto" />
      </div>
      <div className="relative">
        <img src={IconSino} alt="Notificações" className="h-6  w-6 text-white" />
        {/* Você pode adicionar um dropdown ou contador aqui depois */}
      </div>
    </header>
  );
}

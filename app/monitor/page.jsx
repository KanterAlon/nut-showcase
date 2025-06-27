import Image from "next/image";

export default function MonitorIndex() {
  return (
    <main className="min-h-screen flex items-center justify-center p-10 bg-zetaCream text-zetaGray">
      <div className="text-center space-y-4">
        <Image src="/nut-logo.svg" alt="NUT" width={120} height={120} />
        <p className="text-xl">Por favor, accede mediante el c\u00f3digo QR asignado a cada monitor.</p>
      </div>
    </main>
  );
}

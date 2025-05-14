"use client"

import { useEffect, useRef } from "react"
import QRCode from "qrcode"

export default function BoardingPass() {
  const qrRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (qrRef.current) {
      QRCode.toCanvas(qrRef.current, "https://latamairlines.com/boarding/12345", {
        width: 120,
        margin: 0,
        color: {
          dark: "#000033",
          light: "#FFFFFF",
        },
      })
    }
  }, [])

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#FF7F00] p-4">
      <article className="relative w-full max-w-2xl">
        <section className="bg-white rounded-xl overflow-hidden flex h-48">
          {/* QR code section */}
          <figure className="p-4 flex-1 flex items-center justify-center">
            <canvas ref={qrRef} className="w-[120px] h-[120px]" />
          </figure>

          <section className="p-4 flex-[2] border-l border-dashed border-gray-300 relative">
            <span className="absolute -left-3 -top-3 w-6 h-6 bg-[#FF7F00] rounded-full"></span>

            <header className="mb-4">
              <nav className="flex justify-between mb-1">
                <address>
                  <p className="text-xs text-gray-500">Colombia,</p>
                  <p className="text-xs text-gray-500">Nariño</p>
                </address>
                <address className="text-right">
                  <p className="text-xs text-gray-500">Argentina,</p>
                  <p className="text-xs text-gray-500">Buenos Aires</p>
                </address>
              </nav>

              <nav className="flex justify-between items-center">
                <span className="text-[#000033] text-3xl font-bold">COL</span>
                <div className="flex-1 flex justify-center">
                  <span className="border-t border-dotted border-gray-300 w-16 relative">
                    <span className="absolute -top-2 left-1/2 transform -translate-x-1/2">🛩️ </span>
                  </span>
                </div>
                <span className="text-[#000033] text-3xl font-bold">ARG</span>
              </nav>

              <nav className="flex justify-between mt-1">
                <time>
                  <p className="text-xs text-gray-500">
                    mie, Julio 27<sup>th</sup>
                  </p>
                  <p className="text-xs text-gray-500">1:00 PM</p>
                </time>
                <time className="text-right">
                  <p className="text-xs text-gray-500">
                    jue, Julio 28<sup>th</sup>
                  </p>
                  <p className="text-xs text-gray-500">8:30 AM</p>
                </time>
              </nav>
            </header>

            <footer className="grid grid-cols-3 gap-4 text-xs mt-4">
              <dl>
                <dt className="text-gray-500">Pasajero/Asiento 4B</dt>
                <dd className="font-medium">Pasajero/4A</dd>
              </dl>
              <dl>
                <dt className="text-gray-500">Terminal/Puesto</dt>
                <dd className="font-medium">D/32</dd>
              </dl>
              <dl>
                <dt className="text-gray-500">Abordaje</dt>
                <dd className="font-medium">12:40 PM</dd>
              </dl>
            </footer>

            <span className="absolute -left-3 -bottom-3 w-6 h-6 bg-[#FF7F00] rounded-full"></span>
          </section>

          <aside className="bg-[#000033] text-white w-12 flex flex-col justify-between items-center py-6">
            <span className="transform -rotate-90 whitespace-nowrap text-xs font-medium tracking-wider">
              AAA
            </span>
            <span className="transform -rotate-90 whitespace-nowrap text-xs font-bold">LA AREPA QUE VUELA</span>
          </aside>
        </section>
      </article>
    </main>
  )
}
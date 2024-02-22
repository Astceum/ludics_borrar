import '../context/gsapHome.js';



function Home() {






  return (
    <div class="w-full h-screen relative ">
        <main class="contenedor__Animacion w-full h-screen fixed overflow-hidden justify-center items-center ">
            <section class="seccion seccio_1 w-full h-screen absolute flex justify-center items-center bg-black">
                <h2 class="text-white">SECCION 1</h2>
            </section>
            <div id="container_y_y" class="w-full h-screen flex justify-center items-center">
                <section class="seccion seccio_1_1 w-1/2 h-screen flex justify-center items-center bg-orange-600">
                    <h2 class="text-black">SECCION 1</h2>
                </section>
                <div class="seccion seccio_2 w-1/2 h-screen flex-col justify-center items-center">
                    <section class="w-full h-1/2 flex justify-center items-center bg-fuchsia-900">
                        <button class="bg-[#3fa09b] hover:bg-[#177571] px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:gb-indigo-400 z-auto">Enviar</button>
                        <h2 class="text-black">SECCION 2</h2>
                    </section>
                    <section class="w-full h-1/2 flex justify-center items-center bg-lime-900">
                        <h2 class="text-black">SECCION 2</h2>
                    </section>
                </div>
            </div>
        </main>
        <main class="contenedor__Animacion_2 w-full h-screen fixed overflow-hidden">
            <div id="container_x" class="w-full h-screen flex overflow-hidden justify-center items-center">
                <section class="seccion seccio_3 w-1/2 h-screen flex justify-center items-center bg-violet-800">
                    <button class="bg-[#3fa09b] hover:bg-[#177571] px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:gb-indigo-400 z-auto">Enviar</button>
                    <h2>SECCION 3</h2>
                </section>
                <section class="seccion seccio_4 w-1/2 h-screen flex justify-center items-center bg-emerald-800">
                    <h2>SECCION 4</h2>
                </section>
            </div>
        </main>
        <main class="contenedor__Animacion_3 w-full h-screen fixed overflow-hidden">
            <div id="container_y" class="w-full h-screen flex overflow-hidden justify-center items-center">
                <section class="seccion seccio_5 w-1/2 h-screen flex justify-center items-center bg-pink-400">
                    <button class="bg-[#3fa09b] hover:bg-[#177571] px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:gb-indigo-400 z-10">Enviar</button>
                    <h2>SECCION 5</h2>
                </section>
                <section class="seccion seccio_6 w-1/2 h-screen flex justify-center items-center bg-yellow-400">
                    <button class="bg-[#3fa09b] hover:bg-[#177571] px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:gb-indigo-400 z-10">Enviar</button>
                    <h2 class="texto_6">SECCION 6</h2>
                </section>
            </div>
        </main>
    </div>  
  )
}

export default Home
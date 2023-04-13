import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <h1 className="text-[#6DC6E3] font-bold m-2 absolute bottom-0 right-0">BRUZDA Corto</h1>
    </div>
  )
}

export default MyApp

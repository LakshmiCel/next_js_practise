
export default function App({ Component, pageProps }) {
  const getlayout=Component.getLayout || ((page)=>page)
  return getlayout(<Component {...pageProps} />)
}
